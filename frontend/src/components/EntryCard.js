// frontend/src/components/EntryCard.js
import React from 'react';

const EntryCard = ({ entry }) => {
    const date = new Date(entry.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-4 hover:shadow-lg transition-shadow">
            <div className="text-sm text-gray-500 mb-2">{date}</div>
            <div className="text-indigo-600 font-semibold mb-3">
                "{entry.promptId?.text}"
            </div>
            <div className="text-gray-700 whitespace-pre-wrap">{entry.response}</div>
        </div>
    );
};

export default EntryCard;