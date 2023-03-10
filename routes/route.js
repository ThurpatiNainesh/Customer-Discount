const router = require("express").Router()
const{Register,updateCustomer,deleteCustomer,getCustomer,getAllCustomer}=require("../controllers/customerController")
const {verifyToken,verifyTokenAndAuthorization, verifyTokenAndAdmin}=require("./verifyToken")
const{createProducts,updateProducts,deleteProduct,getProducts}=require("../controllers/productController")
const{createOrder,updateOrder,createOrder1}=require("../controllers/orderController")

// customer
router.post("/Register",Register)
// router.post("/login",login)
router.put("/updateCustomer/:id",verifyTokenAndAuthorization,updateCustomer);
router.delete("/deleteCustomer/:id",deleteCustomer)
router.get("/getCustomer/:id",verifyTokenAndAdmin,getCustomer)
router.get("/",getAllCustomer)

// products
router.post("/createProducts",createProducts)
router.put("/updateProducts/:id",verifyTokenAndAdmin,updateProducts);
router.delete("/deleteProduct/:id",verifyTokenAndAdmin,deleteProduct);
router.get("/getProducts",getProducts);

// ORDER
router.post("/createOrder",createOrder);
router.post("/createOrder1",createOrder1);
router.put("/Order/:id",updateOrder);
// router.delete("/Cart/:id",verifyTokenAndAdmin,deleteOrder);
// router.get("/Cart/:customerId",verifyTokenAndAuthorization,getOrders);




module.exports = router