// const express = require("express");
// const router = express.Router();

// const {
//   createRazorPayOrder,
//   capturePayment,
// } = require("../controllers/razorpay");

// const { create } = require("../controllers/razorpayCapture");

// router.get("/order/razorpay", createRazorPayOrder);
// router.post("/capture/razorpay/:paymentId", capturePayment);
// router.post("/capture/razorpay/create", create);

// module.exports = router;
const express = require("express");
const {
  createPayment,
  getLogo,
  paymentCallback,
  getPayment,
} = require("../controllers/paymentControlller");
const { create } = require("../controllers/paymentStatusController");
const router = express.Router();

router.get("/razorpay/create", createPayment);
router.post("/payment/callback", paymentCallback);
router.get("/razorpay/payments/:paymentId", getPayment);
router.post("/razorpay/payments/paymentStatus", create);
router.get("/logo", getLogo);
module.exports = router;
