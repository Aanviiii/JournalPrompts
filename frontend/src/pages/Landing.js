// frontend/src/pages/Landing.js
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
            <div className="text-center text-white p-8">
                <h1 className="text-6xl font-bold mb-4">🎲</h1>
                <h2 className="text-4xl font-bold mb-6">Mysterious Dice Journal</h2>
                <p className="text-xl mb-8">Roll the dice. Get a prompt. Reflect.</p>
                <div className="space-x-4">
                    <Link
                        to="/login"
                        className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition-all inline-block"
                    >
                        Login
                    </Link>
                    <Link
                        to="/register"
                        className="px-8 py-3 bg-indigo-700 text-white rounded-lg font-semibold hover:bg-indigo-800 transition-all inline-block"
                    >
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Landing;