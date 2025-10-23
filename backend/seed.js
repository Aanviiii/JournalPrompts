// backend/seed.js
const mongoose = require('mongoose');
const Prompt = require('./models/Prompt');
require('dotenv').config();

const prompts = [
    { category: 'reflection', text: 'What made you smile today?' },
    { category: 'reflection', text: 'If you could redo one thing this week, what would it be?' },
    { category: 'gratitude', text: 'What are you grateful for today?' },
    { category: 'reflection', text: 'What challenged you today?' },
    { category: 'future', text: 'What is one goal you want to achieve this month?' },
    { category: 'past', text: 'What is a memory that makes you feel warm inside?' },
    { category: 'present', text: 'How are you feeling right now, and why?' },
    { category: 'growth', text: 'What did you learn about yourself today?' },
    { category: 'creativity', text: 'If you could create anything, what would it be?' },
    { category: 'connection', text: 'Who do you want to connect with and why?' }
];

mongoose.connect(process.env.MONGODB_URI)
    .then(async () => {
        console.log('MongoDB Connected');
        await Prompt.deleteMany({});
        await Prompt.insertMany(prompts);
        console.log('Prompts seeded!');
        process.exit();
    })
    .catch(err => console.log(err));