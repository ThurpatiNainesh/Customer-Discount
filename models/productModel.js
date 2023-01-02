const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
        trim: true
    },

    price: {
        type: Number,
        required: true,
    },

    availableSizes: {
        type: [String],
        required:true,
        trim:true,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
    },


}, { timestamps: true })

module.exports = mongoose.model('productModel', productSchema)