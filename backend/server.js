const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const morgan = require('morgan'); // Single import

const app = express();

// Database connection
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
const productRouter = require('./routes/product');
app.use('/products', productRouter); // No duplicate morgan import

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});