const Pricing = require("../models/pricing");

exports.create = async (req, res) => {
  try {
    const {
      title,
      description,
      before_discount_price,
      discount,
      currency,
      country,
    } = req.body;
    const newPricing = await new Pricing({
      title,
      description,
      before_discount_price,
      discount,
      amount: before_discount_price - (discount * before_discount_price) / 100,
      currency,
      saving:
        before_discount_price -
        (before_discount_price - (discount * before_discount_price) / 100),
      country,
    }).save();
    res.json(newPricing);
  } catch (error) {
    console.log(error);
  }
};

exports.remove = async (req, res) => {
  try {
    res.json(await Pricing.findByIdAndDelete(req.params.pricingId).exec());
  } catch (error) {
    console.log(error);
  }
};

exports.list = async (req, res) => {
  try {
    res.json(await Pricing.find({}).sort({ createdAt: -1 }).exec());
  } catch (error) {
    console.log(error);
  }
};
