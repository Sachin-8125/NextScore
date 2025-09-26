import React, { useState } from 'react'
import axios from 'axios'

const API_BASE_URL = import.meta.env.API_BASE_URL;

const Signup = ({onSignUpSuccess, onSwitchToLogin}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSignup = async(e) => {
        e.preventDefault();
        if(!name){
            setError('Please enter your name');
            return;
        }
        if (!phone.match(/^[0-9]{10}$/)) {
            setError("Please enter a valid 10-digit phone number.");
            return;
        }
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(`${API_BASE_URL}/user`, {name, phone});
            onSignupSuccess(response.data);
            console.log(response.data);
        } catch (error) {
            console.error("Sign up error:", err);
            setError(err.response?.data?.error || "Could not sign up. The phone number might already be in use.");
        }finally{
            setLoading(false);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-md p-8 bg-gray-800 rounded-2xl shadow-2xl">
                <h1 className="text-3xl font-bold text-center text-indigo-400">Create Account</h1>
                <p className="text-center text-gray-400 mt-2 mb-6">Join NextScore Today</p>

                <form onSubmit={handleSignup}>
                    <div className="space-y-4">
                         <input
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
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
                        {loading ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-gray-400">
                        Already have an account?{' '}
                        <button onClick={onSwitchToLogin} className="font-medium text-indigo-400 hover:text-indigo-500">
                            Login
                        </button>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Signup;