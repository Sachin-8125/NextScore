import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const CreditScore = ({ userId, scoreKey }) => {
    const [score, setScore] = useState(null);
    const [displayScore, setDisplayScore] = useState(300);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchScore = async () => {
            if (!userId) return;
            setLoading(true);
            try {
                const response = await axios.get(`${API_BASE_URL}/user/${userId}/score`);
                setScore(response.data.creditScore);
                setError('');
            } catch (err) {
                console.error("Error fetching score:", err);
                setError("Could not fetch score.");
                setScore(null);
            } finally {
                setLoading(false);
            }
        };
        fetchScore();
    }, [userId, scoreKey]);

    useEffect(() => {
        if (score === null) return;
        const animationDuration = 1500; // ms
        const frameDuration = 1000 / 60; // 60 fps
        const totalFrames = Math.round(animationDuration / frameDuration);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentScore = 300 + (score - 300) * progress;
            setDisplayScore(currentScore);

            if (frame === totalFrames) {
                clearInterval(counter);
                setDisplayScore(score);
            }
        }, frameDuration);

        return () => clearInterval(counter);
    }, [score]);

    const getScoreColor = (s) => {
        if (s === null) return '#6B7280'; // gray-500
        if (s < 500) return '#EF4444'; // red-500
        if (s < 700) return '#F59E0B'; // yellow-500
        return '#10B981'; // green-500
    };

    const scoreColor = getScoreColor(score);
    const radius = 80;
    const circumference = 2 * Math.PI * radius;
    const scorePercentage = (score - 300) / (850 - 300);
    const strokeDashoffset = circumference * (1 - scorePercentage);

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h3 className="text-xl font-bold text-indigo-400 mb-4">Your NextScore</h3>
            <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 200 200">
                    {/* Background circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke="#374151" // gray-700
                        strokeWidth="20"
                    />
                    {/* Progress circle */}
                    <circle
                        cx="100"
                        cy="100"
                        r={radius}
                        fill="none"
                        stroke={scoreColor}
                        strokeWidth="20"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        transform="rotate(-90 100 100)"
                        style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    {loading ? (
                        <div className="text-4xl font-bold text-indigo-400 animate-pulse">...</div>
                    ) : error ? (
                        <div className="text-lg font-bold text-red-400 text-center">{error}</div>
                    ) : (
                        <div className="text-5xl font-bold" style={{ color: scoreColor }}>
                            {displayScore.toFixed(0)}
                        </div>
                    )}
                </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Score ranges from 300 to 850</p>
        </div>
    );
};

export default CreditScore;
