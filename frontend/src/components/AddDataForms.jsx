import React, { useState } from 'react';
import axios from 'axios';
import { WalletIcon, PhoneIcon } from "../Icons.jsx";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AddDataForms = ({ userId, onDataAdded }) => {
    const [formType, setFormType] = useState('transaction'); // 'transaction' or 'recharge'
    const [amount, setAmount] = useState('');
    const [transactionType, setTransactionType] = useState('CREDIT');
    const [message, setMessage] = useState({ text: '', type: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const numericAmount = parseFloat(amount);
        if (isNaN(numericAmount) || numericAmount <= 0) {
            setMessage({ text: 'Please enter a valid amount.', type: 'error' });
            setLoading(false);
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
            setLoading(false);
            setTimeout(() => setMessage({ text: '', type: '' }), 3000);
        }
    };

    return (
        <div className="w-full">
            <h3 className="text-xl font-bold text-indigo-400 mb-4 text-center">Add Your Data</h3>
            <div className="bg-gray-700 rounded-lg p-2 flex space-x-2 mb-4">
                <button
                    onClick={() => setFormType('transaction')}
                    className={`flex-1 py-2 text-center font-semibold rounded-md transition-colors ${formType === 'transaction' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-600'}`}
                >
                    UPI Transaction
                </button>
                <button
                    onClick={() => setFormType('recharge')}
                    className={`flex-1 py-2 text-center font-semibold rounded-md transition-colors ${formType === 'recharge' ? 'bg-indigo-600 text-white' : 'text-gray-400 hover:bg-gray-600'}`}
                >
                    Mobile Recharge
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">Amount (₹)</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                            {formType === 'transaction' ? <WalletIcon /> : <PhoneIcon />}
                        </div>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="w-full bg-gray-900 border-2 border-gray-700 rounded-lg pl-10 pr-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                            placeholder="e.g., 500"
                            required
                        />
                    </div>
                </div>

                {formType === 'transaction' && (
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Transaction Type</label>
                        <select
                            value={transactionType}
                            onChange={(e) => setTransactionType(e.target.value)}
                            className="w-full bg-gray-900 border-2 border-gray-700 rounded-lg px-3 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                        >
                            <option value="CREDIT">Credit (Received)</option>
                            <option value="DEBIT">Debit (Sent)</option>
                        </select>
                    </div>
                )}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 disabled:bg-gray-500 disabled:scale-100"
                >
                    {loading ? 'Adding...' : 'Add Record'}
                </button>
            </form>

            {message.text && (
                <p className={`mt-4 text-center text-sm font-semibold ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                    {message.text}
                </p>
            )}
        </div>
    );
};

export default AddDataForms;