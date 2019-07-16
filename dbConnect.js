const mongoose = require('mongoose');
require('dotenv').config();

const connectMongo = mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true },
  () => console.log('Connected'),
);

module.exports = connectMongo;
