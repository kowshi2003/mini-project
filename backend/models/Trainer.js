// const mongoose = require('mongoose');

// const trainerSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phone: String,
//     specialization: String,
//     users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Member' }],
// });

// module.exports = mongoose.model('Trainer', trainerSchema);


// models/Trainer.js
const mongoose = require('mongoose');

// Define Trainer Schema
const trainerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    specialization: { type: String },
    experience: { type: String },
    photo: { type: String }, // File path for the uploaded PDF/photo
});

// Create Trainer Model
const Trainer = mongoose.model('Trainer', trainerSchema);

module.exports = Trainer;

