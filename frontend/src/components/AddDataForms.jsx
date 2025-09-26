import React, { useState } from 'react';
import axios from 'axios';
import { WalletIcon, PhoneIcon } from "../Icons.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;



const AddDataForms = ({ userId, onDataAdded }) => {
    const [formType, setFormType] = useState('transaction'); // 'transaction' or 'recharge'
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('CREDIT');
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0) {
            setMessage({ text: 'Please enter a valid amount.', type: 'error' });
            return;
        }

        let endpoint = '';
        let payload = {};

        if (formType === 'transaction') {
            endpoint = `${API_BASE_URL}/transaction`;
            payload = { userId, amount: numericAmount, type: transactionType };
        } else {
            endpoint = `${API_BASE_URL}/recharge`;
            payload = { userId, amount: numericAmount };
        }

        try {
            await axios.post(endpoint, payload);
            setMessage({ text: `${formType === 'transaction' ? 'Transaction' : 'Recharge'} added successfully!`, type: 'success' });
            setAmount('');
            onDataAdded(); // Notify parent to refresh score
        } catch (error) {
            console.error(`Error adding ${formType}:`, error);
            setMessage({ text: `Failed to add ${formType}.`, type: 'error' });
        } finally {
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        }
    };

    return (
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg w-full">
            <div className="flex border-b border-gray-700 mb-4">
                <button
                    onClick={() => setFormType('transaction')}
                    className={`flex-1 py-2 text-center font-semibold rounded-t-lg transition-colors ${formType === 'transaction' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                    Add UPI Transaction
                </button>
                <button
                    onClick={() => setFormType('recharge')}
                    className={`flex-1 py-2 text-center font-semibold rounded-t-lg transition-colors ${formType === 'recharge' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-700'}`}
                >
                    Add Mobile Recharge
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-1">Amount (₹)</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            {formType === 'transaction' ? <WalletIcon /> : <PhoneIcon />}
                        </div>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., 500"
                            required
                        />
                    </div>
                </div>

                {formType === 'transaction' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Transaction Type</label>
                        <select
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                        >
                            <option value="CREDIT">Credit (Received)</option>
                            <option value="DEBIT">Debit (Sent)</option>
                        </select>
                    </div>
                )}

                <button
                    type="submit"
                    className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded-md transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Add Record
                </button>
            </form>

            {message.text && (
                <p className={`mt-4 text-center text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                </p>
            )}
        </div>
    );
};

export default AddDataForms;