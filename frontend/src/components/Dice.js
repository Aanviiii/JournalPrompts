// frontend/src/components/Dice.js
import React, { useState } from 'react';

const Dice = ({ onRollComplete }) => {
    const [rolling, setRolling] = useState(false);

    const handleRoll = () => {
        setRolling(true);
        setTimeout(() => {
            setRolling(false);
            onRollComplete();
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center justify-center p-8">
            <div
                className={`text-8xl cursor-pointer transition-transform duration-300 ${rolling ? 'animate-spin' : 'hover:scale-110'
                    }`}
                onClick={handleRoll}
            >
                🎲
            </div>
            <button
                onClick={handleRoll}
                disabled={rolling}
                className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 transition-all"
            >
                {rolling ? 'Rolling...' : 'Roll the Dice'}
            </button>
        </div>
    );
};

export default Dice;