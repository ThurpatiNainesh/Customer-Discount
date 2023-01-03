const productModel = require("../models/productModel")
const createProducts = async function (req, res) {
    const newProduct = new productModel(req.body)
    try {
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } catch (error) {
        res.status(500).json(error)
    }
}
const updateProducts = async function (req, res) {
    try {
        const updatedproduct = await productModel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedproduct)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteProduct = async function(req,res){
    try {
        await productModel.findByIdAndDelete(req.params.id);
        res.status(200).Json("product has been deleted..")
    } catch (error) {
        res.status(500).Json(error)
    }

}
const getProducts = async function(req,res){
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try {
        let products;
        if(qNew){
            products = await productModel.find().sort({createdAt:-1}).limit(5)
        }else if(qCategory){
            products = await productModel.find({
                categories:{
                    $in:[qCategory]
                }
            })
        }else{
            products = await productModel.find()
        }
        res.status(200).json( products)

    } catch (error) {
        res.status(500).Json(error)
    }
}





module.exports ={createProducts,updateProducts,deleteProduct,getProducts};
  