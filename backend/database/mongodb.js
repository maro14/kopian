const mongoose = require('mongoose');

const connectDB = async(req, res) => {
    try {
        const URL = ''
        mongoose.connect(URL, {

        })
        console.log('Database Connected');
    } catch (err) {
        console.error('Database Error');
    }
}