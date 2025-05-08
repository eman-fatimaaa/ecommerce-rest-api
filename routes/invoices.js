const express = require("express");
const router = express.Router();
const {
  createInvoice,
  getInvoices,
  getInvoiceById,
  updateInvoiceStatus
} = require("../controllers/invoiceController");
const auth = require('../middleware/auth');

// Protect all invoice routes
router.use(auth);
// Regular user routes
router.post("/createInvoice", createInvoice);
router.get("/getInvoices", getInvoices);
router.get("/:idInvoice", getInvoiceById);
router.patch("/:id/statusInvoice", updateInvoiceStatus);
// Admin only routes
router.get("/adminInvoice", adminAuth, getInvoices);  // Only admins can see all invoices
router.patch("/:id/statusupdateInvoice", adminAuth, updateInvoiceStatus);  // Only admins can update status

module.exports = router;