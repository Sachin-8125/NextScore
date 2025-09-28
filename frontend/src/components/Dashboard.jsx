import React, { useState } from 'react';
import CreditScore from './CreditScore.jsx';
import AddDataForms from './AddDataForms.jsx';
import { UserIcon, LogoutIcon } from '../Icons.jsx';

const Dashboard = ({ user, onLogout }) => {
    const [scoreKey, setScoreKey] = useState(0);

    const handleDataAdded = () => {
        setScoreKey(prevKey => prevKey + 1);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-indigo-400">NextScore</h1>
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-lg">
                            <UserIcon />
                            <span className="font-semibold">{user.name}</span>
                        </div>
                        <button onClick={onLogout} className="bg-red-500 hover:bg-red-600 p-2 rounded-full transition-colors">
                            <LogoutIcon />
                        </button>
                    </div>
                </header>

                <main className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <CreditScore userId={user.id} scoreKey={scoreKey} />
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <AddDataForms userId={user.id} onDataAdded={handleDataAdded} />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
