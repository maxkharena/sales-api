const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 1,
    max: 255,
  },
  code: {
    type: String,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model('Products', productSchema);
