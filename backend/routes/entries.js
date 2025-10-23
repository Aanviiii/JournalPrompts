// backend/routes/entries.js
const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Entry = require('../models/Entry');

// Create entry
router.post('/', auth, async (req, res) => {
    try {
        const { promptId, response } = req.body;

        const newEntry = new Entry({
            userId: req.user.id,
            promptId,
            response
        });

        const entry = await newEntry.save();
        res.json(entry);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

// Get all entries for user
router.get('/', auth, async (req, res) => {
    try {
        const entries = await Entry.find({ userId: req.user.id })
            .populate('promptId')
            .sort({ date: -1 });
        res.json(entries);
    } catch (err) {
        res.status(500).send('Server error');
    }
});

module.exports = router;