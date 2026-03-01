const mongoose = require('mongoose');

const InterviewSessionSchema = new mongoose.Schema({
  company: {
    type: mongoose.Schema.ObjectId,
    ref: 'Company',
    required: true
  },
  startTime: {
    type: Date,
    required: [true, 'Please add start time']
  },
  endTime: {
    type: Date,
    required: [true, 'Please add end time']
  },
  jobPosition: {
    type: String,
    required: [true, 'Please add job position']
  },
  jobDescription: {
    type: String
  },
  status: {
    type: String,
    enum: ['available', 'occupied'],
    default: 'available'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('InterviewSession', InterviewSessionSchema);