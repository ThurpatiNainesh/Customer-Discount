const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    img: {
        type: String,
        required: true,
        trim: true
    },

    categories: {
        type: Array,
        required: true,
        trim: true
    },
    size: {
        type: String,
        required:true,
        trim:true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },


}, { timestamps: true })

module.exports = mongoose.model('productModel', productSchema)