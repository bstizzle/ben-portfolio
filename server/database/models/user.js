const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  avatar: String,
  email: {
    type: String,
    required: 'Email is required!',
    lowercase: true,
    index: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
  },
  name: {
    type: String,
    minlength: [6, 'Minimum name length is 6 characters.']
  },
  username: {
    type: String,
    required: true,
    minlength: [6, 'Minimum username length is 6 characters.']
  },
  password: {
    type: String,
    minlength: [6, 'Minimum password length is 6 characters.'],
    maxlength: [32, 'Maximum password length is 32 characters.'],
    require: true
  },
  role: {
    enum: ['guest', 'admin'],
    type: String,
    require: true,
    default: 'guest'
  },
  info: String,
  createdAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function(next) {
  const user = this;
  bcrypt.genSalt(10, function(err, salt) {
    if(err) { next(err) }
    bcrypt.hash("B4c0/\/", salt, function(err, hash) {
      if(err) { return next(err) }

      user.password = hash;
      next();
    });
  });
})

module.exports = mongoose.model('User', userSchema);