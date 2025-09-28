import React, {useState} from 'react';
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Login = ({ onLoginSuccess, onSwitchToSignUp }) => {
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleLogin = async(e) => {
        e.preventDefault();
        if (!phone.match(/^[0-9]{10}$/)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }

        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${API_BASE_URL}/api/login`, { phone });
            onLoginSuccess(response.data);
        } catch (err) {
            console.error("Login error:", err);
            setError(err.response?.data?.error || "Login failed. Please check your phone number or sign up.");
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-indigo-400">Welcome Back</h1>
                <p className="text-center text-gray-400 mt-2 mb-6">Login to your NextScore Account</p>

                <form onSubmit={handleLogin}>
                    <div className="space-y-4">
                        <input
                            type="tel"
                            placeholder="Enter your 10-digit phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm mt-4 text-center">{error}</p>}
                    <button type="submit" disabled={loading} className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-md transition-colors disabled:bg-gray-500">
                        {loading ? 'Logging In...' : 'Login'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Don't have an account?{' '}
                        <button onClick={onSwitchToSignUp} className="font-medium text-indigo-400 hover:text-indigo-500">
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Login;