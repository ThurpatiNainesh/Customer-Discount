const orderModel = require("../models/orderModel")
// const Customer = require("../models/customerModel")
const cron = require("node-cron")

const createOrder = async function (req, res) {
    try {
        const data=req.body
        const{userId,productId,amount, discountPercentage}=data

    if (Object.keys(data).length == 0) return res.status(400).send({ status: false, message: "please enter details" });

        const userOrderCount= await orderModel.find({userId:userId})
        if(!userOrderCount){
            res.status(400).json("invalid user")
        }
        const userOrderCount1=userOrderCount.length
        const object={}
    if(userOrderCount1 >10 && userOrderCount1<20){
        if(userOrderCount1===9){
            cron.schedule('* * * * * *', () => {
                console.log("you need to make 2 order to reach gold");
              });
        }
        if(userOrderCount1===19){
            cron.schedule('* * * * * *', () => {
                console.log("you need to make 2 order to reach platinium");
              });
          }
    //   update to gold
            //    await Customer.findByIdAndUpdate(userId,{$set:{Categorise:"Gold"}},{new:true})

               let discounPer = amount * 0.01
               let finalAmount = amount - discounPer
               object.amount =finalAmount


    }else if(userOrderCount1>20){
    //    update to platinum 
                // await Customer.findByIdAndUpdate(userId,{$set:{Categorise:"Platinium"}},{new:true})
               let discounPer = amount * 0.02
               let finalAmount = amount - discounPer
               object.amount =finalAmount


    }else{
                 let discounPer = amount 
                 let finalAmount = amount - discounPer
                 object.amount =finalAmount

    }
    
       object. userId=userId;
       object. productId=productId;
       object.discountPercentage=discountPercentage;
    
    const newOrder = new orderModel(object)
    const saveOrder = await newOrder.save()
        res.status(200).json(saveOrder)
    } catch (error) {
        res.status(500).json(error)
    }
}
const createOrder1 = async function (req, res){
    const data=req.body
    const{userId,productId,amount, discountPercentage}=data;

    let obj={
        userId:userId,
        productId:productId,
        amount:amount,
        discountPercentage:discountPercentage
    }
const newOrder = new orderModel(obj)
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
// const newOrder = new orderModel(req.body)
// try {
//     const saveOrder = await newOrder.save()
//     res.status(200).json(saveOrder)
// } catch (error) {
//     res.status(500).json(error)
// }




module.exports ={createOrder,updateOrder,createOrder1}