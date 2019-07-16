// Main imports
const express = require('express');
const auth = require('./middleware/verifyToken');
require('dotenv').config();
require('./dbConnect');

// Init
const app = express();

// Routes
const authRouter = require('./routes/auth');

// Midleware
app.use(express.json());

// Routes middlewares
app.use('/user', auth, authRouter);


app.listen(process.env.PORT, () => console.log(`Server runing on ${process.env.PORT} port`));
