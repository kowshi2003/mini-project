// // TrainerModel.js

// const mongoose = require('mongoose');

// const trainerSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         unique: true,
//         trim: true,
//         lowercase: true,
//     },
//     phone: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     experience: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     photo: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     address: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     password: {
//         type: String,
//         required: true, // Ensure password is required
//         trim: true
//     }
// }, {
//     timestamps: true
// });

// const TrainerModel = mongoose.model('Trainer', trainerSchema, 'trainermodel');

// module.exports = TrainerModel;


const multer = require('multer');
const TrainerModel = require('./TrainerModel');

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // Ensure this folder exists
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage: storage });

// Controller to handle trainer creation
const createTrainer = async (req, res) => {
    try {
        const { name, email, phone, experience, address, password } = req.body;
        let photo = req.body.photo; // Handle photo URL if provided

        // If a PDF is uploaded, use its file path
        if (req.file) {
            photo = `/uploads/${req.file.filename}`;
        }

        const newTrainer = new TrainerModel({
            name,
            email,
            phone,
            experience,
            photo,  // Can be a URL or uploaded file path
            address,
            password
        });

        await newTrainer.save();
        res.status(201).json(newTrainer);
    } catch (error) {
        console.error('Error creating trainer:', error);
        res.status(400).json({ message: 'Error creating trainer', error });
    }
};

module.exports = { createTrainer, upload };
