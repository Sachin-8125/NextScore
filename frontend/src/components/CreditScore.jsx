import React, {useState, useEffect} from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.API_BASE_URL;

const CreditScore = ({ userId, scoreKey }) => {
    const [score, setScore] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if(userId){
            setLoading(true);
        }
        axios.get(`${API_BASE_URL}/user/${userId}/score`)
            .then(response => {
                setScore(response.data.creditScore);
                setError('');
            })
            .catch(err => {
                console.error("Error fetching score:", err);
                setError("Could not fetch score.");
                setScore(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [userId, scoreKey]);

    const getScoreColor = (s) => {
        if (s === null) return 'text-gray-500';
        if (s < 500) return 'text-red-500';
        if (s < 700) return 'text-yellow-500';
        return 'text-green-500';
    };

    return (
        <div className="bg-gray-800 p-6 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-lg font-semibold text-gray-400 mb-2">Vishwas Score</h3>
            {loading ? (
                <div className="text-4xl font-bold text-indigo-400 animate-pulse">...</div>
            ) : error ? (
                <div className="text-xl font-bold text-red-400">{error}</div>
            ) : (
                <div className={`text-6xl font-bold ${getScoreColor(score)}`}>
                    {score ? score.toFixed(0) : 'N/A'}
                </div>
            )}
            <p className="text-sm text-gray-500 mt-2">Score ranges from 300 to 850</p>
        </div>
    );
};

export default CreditScore;
