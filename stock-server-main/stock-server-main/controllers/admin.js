const Order = require("../models/order");
const sendMail = require("../middlewares/nodemailer");

exports.orders = async (req, res) => {
  let allOrders = await Order.find({})
    .sort("-createdAt")
    .populate("products.product")
    .exec();

  res.json(allOrders);
};

exports.orderStatus = async (req, res) => {
  const { orderId, orderStatus } = req.body;

  let updated = await Order.findByIdAndUpdate(
    orderId,
    { orderStatus },
    { new: true }
  ).exec();

  res.json(updated);
};

exports.sendMailToUser = async (req, res) => {
  try {
    const { email, message, subject } = req.body;
    if (!email.length || !message.trim() || !subject.trim())
      return res.status(400).send("Please fill or select mandatory fields");
    const mailOptions = {
      from: process.env.NODEMAILER_EMAIL,
      to: email,
      subject: "",
      html: `<h3>${subject},</h3>
        <br />
        <h5>
        ${message}
        </h5>
    `,
    };
    await sendMail(mailOptions);
    res.json("Mail send succeefully");
  } catch (error) {
    console.log(error);
    res.status(400).send(error.message);
  }
};
