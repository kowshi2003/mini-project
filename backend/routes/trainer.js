const express = require('express');
const multer = require('multer');
const Trainer = require('../models/Trainer');
const path = require('path');

const router = express.Router();

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // directory to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // append timestamp to file name
  },
});

const upload = multer({ storage });

// Add Trainer endpoint
router.post('/', upload.single('photo'), async (req, res) => {
  try {
    const { name, email, password, specialization, experience } = req.body;
    const photo = req.file ? req.file.path : null; // get file path

    const newTrainer = new Trainer({
      name,
      email,
      password,
      specialization,
      experience,
      photo,
    });

    await newTrainer.save();
    res.status(201).json({ message: 'Trainer added successfully', trainer: newTrainer });
  } catch (error) {
    console.error('Error adding trainer:', error);
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
