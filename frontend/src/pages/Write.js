// frontend/src/pages/Write.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Dice from '../components/Dice';
import API from '../utils/api';

const Write = () => {
    const [prompt, setPrompt] = useState(null);
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const fetchPrompt = async () => {
        try {
            const res = await API.get('/prompts/random');
            setPrompt(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSave = async () => {
        if (!response.trim()) return;

        setLoading(true);
        try {
            await API.post('/entries', {
                promptId: prompt._id,
                response
            });
            navigate('/dashboard');
        } catch (err) {
            console.error(err);
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            <div className="container mx-auto px-4 py-8 max-w-2xl">
                {!prompt ? (
                    <Dice onRollComplete={fetchPrompt} />
                ) : (
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <div className="text-center mb-6">
                            <div className="text-4xl mb-4">✍️</div>
                            <div className="text-xl font-semibold text-indigo-600 mb-2">
                                Today's Prompt
                            </div>
                            <div className="text-2xl text-gray-800">"{prompt.text}"</div>
                        </div>
                        <textarea
                            value={response}
                            onChange={(e) => setResponse(e.target.value)}
                            placeholder="Write your thoughts here..."
                            className="w-full h-64 p-4 border rounded-lg resize-none focus:ring-2 focus:ring-indigo-500"
                        />
                        <div className="flex justify-between mt-4">
                            <button
                                onClick={() => { setPrompt(null); setResponse(''); }}
                                className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-50"
                            >
                                Roll Again
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={loading || !response.trim()}
                                className="px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 disabled:opacity-50"
                            >
                                {loading ? 'Saving...' : 'Save Entry'}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Write;