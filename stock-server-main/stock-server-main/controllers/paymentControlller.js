require("dotenv").config();
const uniquId = require("uniqid");
const path = require("path");
const Formidable = require("formidable");
const crypto = require("crypto");
const request = require("request");
const paymentSchema = require("../models/paymentSchema");
const pricings = require("../models/pricing");
const Razorpay = require("razorpay");
let orderId;

var instance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createPayment = (req, res) => {
  var options = {
    amount: 175000,
    currency: "INR",
    receipt: uniquId(),
  };
  instance.orders.create(options, function (err, order) {
    if (err) {
      return res.status(500).json({
        error: err,
      });
    }
    orderId = order.id;
    res.json(order);
  });
};

exports.paymentCallback = (req, res) => {
  const form = Formidable();
  form.parse(req, (err, fields, files) => {
    if (fields) {
      console.log("FIELDS", fields);
      // const hash = crypto
      //   .createHash("sha256", process.env.RAZORPAY_KEY_SECRET)
      //   .update(orderId + "|" + fields.razorpay_payment_id)
      //   .digest("hex");
      // console.log(hash);

      if (fields.razorpay_signature) {
        const info = {
          _id: fields.razorpay_payment_id,
          razorpay_order_id: fields.razorpay_order_id,
        };
        const order = new paymentSchema({
          _id: info._id,
          orders: fields.razorpay_order_id,
        });

        order.save((err, data) => {
          if (err) {
            res.status(400).json({
              error: "Not able to save in Db",
            });
          } else {
            res.redirect(`/payment/status/${fields.razorpay_payment_id}`);
          }
        });
      } else {
        console.log("ERROR");
      }
    }
  });
};
exports.getLogo = (req, res) => {
  res.sendFile(path.join(__dirname, "../logo.JPG"));
};

exports.getPayment = (req, res) => {
  paymentSchema.findById(req.params.paymentId).exec((err, data) => {
    if (err || data == null) {
      return res.json({
        error: "No order Found",
      });
    }
    request(
      `https://${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}`,
      function (error, response, body) {
        if (body) {
          const result = JSON.parse(body);
          res.status(200).json(result);
        }
      }
    );
  });
};
