import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const app = express();

// Global error handling
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));


// Health check endpoint
app.get('/', (req, res) => {
    res.json({ message: 'Informal Credit Score API is running', status: 'healthy' });
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});


function calculateCreditScore(transactions, recharges, vouches){
    let score = 300;
    const creditTransactions = transactions.filter(t => t.type==='CREDIT');
    
    if(creditTransactions.length > 20){
        score += 150;
    }else if(creditTransactions.length > 10){
        score += 100;
    }else if(creditTransactions.length > 5){
        score += 50;
    }

    //analyze stability of income
    if(creditTransactions.length>1){
        const totalIncome = creditTransactions.reduce((acc, t) => acc + t.amount, 0);
        const avgIncome = totalIncome / creditTransactions.length;
        if (avgIncome > 5000) { // Assuming a monthly income proxy
            score += 75;
        }
    }

    //mobile recharge score
    if (recharges.length > 10) {
        score += 70;
    } else if (recharges.length > 5) {
        score += 40;
    }

    //community vouch score
    const approvedVouches = vouches.filter(v => v.status === 'APPROVED');
    score += approvedVouches.length * 25;
    return Math.min(score, 850);
}

//create user
app.post('/api/user', async (req, res) => {
    
    const { name, phone } = req.body;
    
    // Validate input
    if (!name || !phone) {
        return res.status(400).json({ 
            error: 'Name and phone are required',
            received: { name, phone }
        });
    }
    
    if (typeof name !== 'string' || typeof phone !== 'string') {
        return res.status(400).json({ 
            error: 'Name and phone must be strings',
            received: { name: typeof name, phone: typeof phone }
        });
    }
    
    try {
        const existingUser = await prisma.user.findUnique({ where: { phone } });
        if (existingUser) {
            return res.status(409).json({ error: "A user with this phone number already exists." });
        }
        const user = await prisma.user.create({
            data: { name, phone },
        });
        res.status(201).json(user);
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ error: 'Could not create user.' });
    }
});

//login user
app.post('/api/login', async (req, res) => {
    const { phone } = req.body;
    try {
        const user = await prisma.user.findUnique({
            where: { phone },
        });
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ error: "User not found." });
        }
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ error: 'An error occurred during login.' });
    }
});

//add upi transaction
app.post('/api/transaction', async (req, res) => {
    const { userId, amount, type } = req.body;
    try {
        const transaction = await prisma.upiTransaction.create({
            data: { 
                userId, 
                amount: parseFloat(amount), 
                type 
            },
        });
        res.status(201).json(transaction);
    } catch (error) {
        console.error("Transaction Error:", error);
        res.status(500).json({ error: 'Could not add transaction.' });
    }
});

//add mobile recharge
app.post('/api/recharge', async (req, res) => {
    const { userId, amount } = req.body;
    try {
        const recharge = await prisma.mobileRecharge.create({
            data: {
                userId,
                amount: parseFloat(amount)
            }
        });
        res.status(201).json(recharge);
    } catch (error) {
        console.error("Recharge Error:", error);
        res.status(500).json({ error: 'Could not add recharge record.' });
    }
});

//calculate and get score
app.get('/api/user/:id/score', async (req, res) => {
    const { id } = req.params;
    try {
        const [user, transactions, recharges, vouches] = await Promise.all([
            prisma.user.findUnique({ where: { id } }),
            prisma.upiTransaction.findMany({ where: { userId: id } }),
            prisma.mobileRecharge.findMany({ where: { userId: id } }),
            prisma.communityVouch.findMany({ where: { voucheeId: id, status: 'APPROVED' } })
        ]);

        if (!user) {
            return res.status(404).json({ error: "User not found." });
        }
        
        // Calculate the score
        const score = calculateCreditScore(transactions, recharges, vouches);
        
        // Update the user's score in the database
        await prisma.user.update({
            where: { id },
            data: { creditScore: score },
        });

        res.json({ userId: id, creditScore: score });

    } catch (error) {
        console.error("Score Calculation Error:", error);
        res.status(500).json({ error: 'Could not calculate score.' });
    }
});

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📊 Informal Credit Score API is ready!`);
});

// Graceful shutdown
process.on('SIGTERM', async () => {
    console.log('SIGTERM received, shutting down gracefully');
    await prisma.$disconnect();
    server.close(() => {
        console.log('Process terminated');
    });
});

process.on('SIGINT', async () => {
    console.log('SIGINT received, shutting down gracefully');
    await prisma.$disconnect();
    server.close(() => {
        console.log('Process terminated');
    });
});
