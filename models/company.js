const mongoose = require('mongoose');

const CompanySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add company name'],
    unique: true,
    trim: true,
    maxlength: [100, 'Name cannot be more than 100 characters']
  },
  address: {
    type: String,
    required: [true, 'Please add an address']
  },
  website: {
    type: String
  },
  description: {
    type: String
  },
  telephone: {
    type: String
  },
  businessType: {
    type: String
  },
  size: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Company', CompanySchema);