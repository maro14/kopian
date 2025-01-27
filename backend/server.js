const express = require('express');
const cors = require('cors');
const connectDB = require('./database');

const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const productRouter = require('./routes/product');
app.use('/products', productRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});