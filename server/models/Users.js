const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  username: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model('users', userSchema);
module.exports = userModel;