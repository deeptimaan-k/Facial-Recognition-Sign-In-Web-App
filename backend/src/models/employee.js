const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  faceEmbedding: { type: Array, required: true }, // Store facial embeddings
  attendance: [
    {
      date: { type: Date, default: Date.now },
      status: { type: String, enum: ['Present', 'Absent'], default: 'Present' },
    },
  ],
}, { timestamps: true });

module.exports = mongoose.model('Employee', employeeSchema);
