const Razorpay = require("razorpay");
const request = require("request");
require("dotenv").config();
const uniquId = require("uniqid");

const razorInstance = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createRazorPayOrder = (req, res) => {
  try {
    const options = {
      amount: 17000 * 100,
      currency: "INR",
      receipt: uniquId(),
      payment_capture: 1, //1
    };
    razorInstance.orders.create(options, async function (err, order) {
      if (err) {
        return res.status(500).json({
          message: "Something error!s",
        });
      }
      return res.status(200).json(order);
    });
  } catch (err) {
    return res.status(500).json({
      message: "Something error!s",
    });
  }
};

exports.capturePayment = (req, res) => {
  try {
    return request(
      {
        method: "POST",
        url: `https://${process.env.RAZORPAY_KEY_ID}:${process.env.RAZORPAY_KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
        form: {
          amount: 17000 * 100,
          currency: "INR",
        },
      },
      async function (err, response, body) {
        if (err) {
          return res.status(500).json({
            message: "Something error!s",
          });
        }
        return res.status(200).json(body);
      }
    );
  } catch (err) {
    return res.status(500).json({
      message: err.message,
    });
  }
};
