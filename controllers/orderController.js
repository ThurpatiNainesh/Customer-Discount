const orderModel = require("../models/orderModel")


const createOrder = async function (req, res) {
    const newOrder = new orderModel(req.body)
    try {
        const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateOrder = async function (req, res) {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedOrder )
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteOrder = async function(req,res){
    try {
        await orderModel.findByIdAndDelete(req.params.id);
        res.status(200).Json("cart has been deleted..")
    } catch (error) {
        res.status(500).Json(error)
    }

}
const getOrders = async function(req,res){
    try {
        const order = await orderModel.findOne({userId:req.param.userId});
      res.status(200).json(order)

    } catch (error) {
        res.status(500).Json(error)
    }
}




module.exports ={createOrder,updateOrder,deleteOrder,getOrders}