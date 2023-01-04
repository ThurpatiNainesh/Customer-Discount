const Customer = require("../models/customerModel")

const Register = async function (req, res) {
    const newUser = new Customer({
        username:req.body.username,
        email:req.body.email,
        password:req.body.password,
    })
    try{
        const saveCustomer = await newUser.save();
        res.status(201).Json(saveCustomer)
    }catch(err){
        res.status(500).json(err)
    }
}
// const login = async function (req, res){
//   try {
//     const customer = await Customer({username:req.body.username})
//     const decodedPassword =CryptoJS.AES.decrypt(customer.password,process.env.PASS);
//     const originalPassword = decodedPassword.toString(CryptoJS.enc.Utf8)
//     originalPassword !== req.body.password&&res.status(401).Json("wrong credentials");
//     const accessToken = jwt.sign(
//         {
//             id:customer._id,
//             isAdmin:customer.isAdmin,
//         },
//         process.env.JWT_SEC,{expiresIn:"3d"}
//     );
//     const {password,...others}= user._doc;
//     res.status(200).json(others ,accessToken)
//   } catch (error) {
    
//   }
// }
const updateCustomer  = async function (req, res){
    try {
        const updatedUser = await Customer.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedUser)
    } catch (error) {
        res.status(500).json(error)
    }
}
const deleteCustomer = async function(req,res){
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(200).Json("User has been deleted..")
    } catch (error) {
        res.status(500).Json(error)
    }
}
const getCustomer = async function(req,res){
    try {
        await Customer.findById(req.params.id);
        const{password,...others}= user._doc;
        res.status(200).json(others)

    } catch (error) {
        res.status(500).Json(error)
    }
}
const getAllCustomer = async function(req,res){
    const query = req.query.new
    try {
        const customer = query
        ? await Customer.find().sort({_id:-1}).limit(1)
        : await Customer.find()
        res.status(200).json(customer)

    } catch (error) {
        res.status(500).Json(error)
    }
}






module.exports ={Register ,updateCustomer,deleteCustomer,getCustomer,getAllCustomer};
  