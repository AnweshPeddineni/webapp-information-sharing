const PaymentStatus = require("../models/paymentStatus");

exports.create = async (req, res) => {
  const { values } = req.body;
  const { orderStatus, orderedBy } = values;
  try {
    const newPaymentStatus = await new PaymentStatus({
      orderStatus,
      orderedBy,
    }).save();
    res.json(newPaymentStatus);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.getAll = async (req, res) => {
  try {
    console.log("trying to find");
    const paymentStatases = await PaymentStatus.find({})
      .sort({ allocation: 1 })
      .exec();
    if (paymentStatases) {
      console.log(paymentStatases);
      res.json(paymentStatases);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No payment status found");
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  const paymentStatus = await PaymentStatus.findById(id).exec();
  if (paymentStatus) {
    res.json(paymentStatus);
  } else {
    res.status(404).send("Stock not found");
  }
};
