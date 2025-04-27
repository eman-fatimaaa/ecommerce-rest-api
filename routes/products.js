const express = require("express");
const router = express.Router();
const { createProduct, getProducts, getProductById } = require("../controllers/productController");
const auth = require('../middleware/auth');
const adminAuth = require('../middleware/adminAuth');

// Protect all product routes
router.use(auth);
// Public routes (authenticated users)
router.post("/", createProduct);
router.get("/", getProducts);
router.get("/:id", getProductById);

router.post("/", adminAuth, createProduct);  // Only admins can create products

module.exports = router;