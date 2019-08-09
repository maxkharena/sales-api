// Main imports
const express = require('express');
const auth = require('./middleware/verifyToken');
require('dotenv').config();

// Init
const app = express();

// Routes
const authRouter = require('./routes/auth');
const productsRouter = require('./routes/products');
const ordersRouter = require('./routes/orders');

// Midleware
app.use(express.json());

// Routes middlewares
app.use('/user', authRouter);
app.use('/products', auth, productsRouter);
app.use('/orders', auth, ordersRouter);


// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log(`Server runing on ${process.env.PORT} port`));
