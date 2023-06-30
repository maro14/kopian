const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: Sring
})

const User = mongoose.model('user', productSchema)

module.exports = User