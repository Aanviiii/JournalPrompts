// backend/models/Entry.js
const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    promptId: { type: mongoose.Schema.Types.ObjectId, ref: 'Prompt', required: true },
    response: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Entry', EntrySchema);