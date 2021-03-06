const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  typeDocument: {
    type: String,
    required: true,
  },
  document: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: Schema.Types.ObjectId,
    ref: "Role",
    required: true
  }
});

module.exports = mongoose.model('User', userSchema);
