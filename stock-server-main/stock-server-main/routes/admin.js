const express = require("express");
const router = express.Router();

// route middlewares
const { authCheck, adminCheck } = require("../middlewares/auth");

// controllers
const { orders, orderStatus, sendMailToUser } = require("../controllers/admin");

// routes
router.get("/admin/orders", authCheck, adminCheck, orders);
router.put("/admin/order-status", authCheck, adminCheck, orderStatus);

router.post("/admin/send/mail", authCheck, adminCheck, sendMailToUser);

module.exports = router;
