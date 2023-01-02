const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    fname: {
        type: String,
        required: true,
        trim: true
    },

    lname: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        min: 8,
        max: 15,
        required: true
    }, // encrypted password

  

}, { timestamps: true })

module.exports = mongoose.model('userModel', userSchema)