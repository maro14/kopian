const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String
})

const User = mongoose.model('user', productSchema)

module.exports = User