const express = require('express');

const app = express()

app.use(express.json())

const productRouter = require('./routes/product');
app.use('/product', productRouter)

const PORT = 5000

app.listen(PORT, () => {
    console.log(`server on ${PORT}`);
})