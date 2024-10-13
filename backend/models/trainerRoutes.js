const express = require('express');
const router = express.Router();
const { createTrainer, upload } = require('./TrainerModel');

// Route for creating a trainer with file upload
router.post('/trainers', upload.single('photoPDF'), createTrainer);

module.exports = router;
