const { Schema, model } = require('mongoose');

const schema = new Schema ({
  email: {
    type: String,
    unique: true,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true,
  }
});

module.exports = model('User', schema);