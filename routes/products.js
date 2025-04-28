const express = require("express");
const router = express.Router();
const { createProduct, getProducts, getProductById } = require("../controllers/productController");
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Protect all product routes
router.use(auth);
// Public routes (authenticated users)
router.post("/createProduct", createProduct);
router.get("/getProducts", getProducts);
router.get("/:idProduct", getProductById);

router.post("/adminProduct", adminAuth, createProduct);  // Only admins can create products

module.exports = router;