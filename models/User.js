const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add name']
  },
  telephone: {
    type: String,
    required: [true, 'Please add telephone number']
  },
  email: {
    type: String,
    required: [true, 'Please add email'],
    unique: true  
  },
  role: {
    type: String,
    enum: ['user','admin'],
    default: 'user'
  },
  password: {
    type: String,
    required: [true, 'Please add password'],
    minlength: 6,
    select: false
  }
});

UserSchema.pre('save', async function(next){
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.getSignedJwtToken = function(){
  return jwt.sign(
    { id: this._id },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};

UserSchema.methods.matchPassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', UserSchema);
