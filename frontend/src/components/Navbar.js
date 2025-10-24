// frontend/src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { removeToken } from '../utils/auth';

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        removeToken();
        navigate('/login');
    };

    return (
        <nav className="bg-indigo-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">🎲 Dice Journal</Link>
                <div className="space-x-4">
                    <Link to="/write" className="hover:underline">Write</Link>
                    <Link to="/dashboard" className="hover:underline">Dashboard</Link>
                    <button onClick={handleLogout} className="hover:underline">Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;