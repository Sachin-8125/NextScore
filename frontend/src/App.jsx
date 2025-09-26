import React, { useState, useEffect } from 'react';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import Dashboard from './components/Dashboard.jsx';


function App() {
    const [user, setUser] = useState(null);
    const [authScreen, setAuthScreen] = useState('login');
    useEffect(() => {
        try {
            const storedUser = localStorage.getItem('NextUser');
            if (storedUser) {
                setUser(JSON.parse(storedUser));
            }
        } catch (error) {
            console.error("Failed to parse user from localStorage:", error);
            localStorage.removeItem('NextUser');
        }
    }, []); 
    const handleAuthSuccess = (loggedInUser) => {
        localStorage.setItem('NextUser', JSON.stringify(loggedInUser));
        setUser(loggedInUser);
    };
    const handleLogout = () => {
        localStorage.removeItem('NextUser');
        setUser(null);
        setAuthScreen('login');
    };
    return (
        <div className="bg-gray-900 text-white min-h-screen font-sans selection:bg-indigo-500 selection:text-white">
            <main className="container mx-auto p-4 flex justify-center items-center min-h-screen">
                {user ? (
                    <Dashboard user={user} onLogout={handleLogout} />
                ) : (
                    authScreen === 'login' ? (
                        <Login
                            onLoginSuccess={handleAuthSuccess}
                            onSwitchToSignUp={() => setAuthScreen('signup')}
                        />
                    ) : (
                        <Signup
                            onSignUpSuccess={handleAuthSuccess}
                            onSwitchToLogin={() => setAuthScreen('login')}
                        />
                    )
                )}
            </main>
        </div>
    );
}
export default App;
