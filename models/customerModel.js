const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: {
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
        required: true
    }, // encrypted password
    isAdmin:{
        type:Boolean,
        default:false
    },
    Categorise: {
        type: String,
        enum: ['Regular', 'Gold', 'Platinium'],
        default: 'Regular',
      },

  

}, { timestamps: true })

module.exports = mongoose.model('userModel', userSchema)