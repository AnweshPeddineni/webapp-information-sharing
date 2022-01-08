const RazorpayCapture = require("../models/razorpayCapture");

exports.create = async (req, res) => {
  const { values } = req.body;
  const {
    user,
    name,
    email,
    address,
    state,
    post_code,
    phone,
    country,
    subscripton_type,
    subscription_start_date,
    sbscription_end_date,
  } = values;
  try {
    const paymentCaptureExist = await RazorpayCapture.findOne({ email }).exec();
    if (paymentCaptureExist) {
      await RazorpayCapture.findOneAndUpdate({ email }, { new: true }).exec();
    } else {
      const paymentCapture = await new RazorpayCapture({
        user,
        name,
        email,
        address,
        state,
        post_code,
        phone,
        country,
        subscripton_type,
        subscription_start_date,
        sbscription_end_date,
      }).save();
      res.json(paymentCapture);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
};
