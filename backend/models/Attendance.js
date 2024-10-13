const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  memberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
  date: { type: String, required: true }, // Stored as a string in 'YYYY-MM-DD' format
  status: { type: String, enum: ['Present', 'Absent'], required: true },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);
module.exports = Attendance;
