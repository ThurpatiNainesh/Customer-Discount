const mongoose = require("mongoose")
const ObjectId = mongoose.Types.ObjectId

const orderSchema = new mongoose.Schema({

    userId: {
        type: ObjectId,
        required: true,
        ref: 'userModel'
    },

    productId: {
            type: ObjectId,
            required: true,
            ref: 'productModel'
        },
    quantity:{
           type:Number,
           default:1
        },
    amount: {
        type: Number,
        required: true,
        comment: "Holds total price of all the items in the cart"
    },
    discountPercentage:{
        type: Number,
        required: true,
    }


}, { timestamps: true })

module.exports = mongoose.model('orderModel', orderSchema)