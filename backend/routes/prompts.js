// backend/routes/prompts.js
const express = require('express');
const router = express.Router();
const Prompt = require('../models/Prompt');

// Get random prompt
router.get('/random', async (req, res) => {
    try {
        const count = await Prompt.countDocuments();
        const random = Math.floor(Math.random() * count);
        const prompt = await Prompt.findOne().skip(random);
        res.json(prompt);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all prompts (for seeding)
router.get('/', async (req, res) => {
    try {
        const prompts = await Prompt.find();
        res.json(prompts);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;