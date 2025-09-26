import React, { useState } from 'react';
import CreditScore from './CreditScore.jsx';
import AddDataForms from './AddDataForms.jsx';
import { UserIcon } from '../Icons.jsx';

const Dashboard = ({ user, onLogout }) => {
    // A key to force re-fetching the score when data is added
    const [scoreKey, setScoreKey] = useState(0);

    const handleDataAdded = () => {
        setScoreKey(prevKey => prevKey + 1);
    };

    return (
        <div className="p-4 sm:p-6 md:p-8">
            <div className="max-w-2xl mx-auto">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-indigo-400">VishwasScore Dashboard</h1>
                    <button onClick={onLogout} className="text-sm bg-gray-700 hover:bg-red-500 px-3 py-1 rounded-md transition-colors">Logout</button>
                </header>

                <main>
                    <div className="flex items-center p-4 mb-6 bg-gray-800 rounded-lg">
                        <UserIcon />
                        <div>
                            <p className="font-bold text-lg">{user.name}</p>
                            <p className="text-sm text-gray-400">{user.phone}</p>
                        </div>
                    </div>

                    <CreditScore userId={user.id} scoreKey={scoreKey} />
                    <AddDataForms userId={user.id} onDataAdded={handleDataAdded} />
                    {/* Vouching system component can be added here in the future */}
                </main>
            </div>
        </div>
    );
};

export default Dashboard;
