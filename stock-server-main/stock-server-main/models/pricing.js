const mongoose = require("mongoose");
const pricingSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is required",
    },
    description: {
      type: String,
    },
    before_discount_price: {
      type: Number,
      required: "before_discount_price is required",
    },
    discount: {
      type: Number,
    },
    amount: {
      type: Number,
      required: "Amount is required",
    },
    saving: {
      type: Number,
      required: "Amount is required",
    },
    currency: {
      type: String,
      required: "Currency is required",
    },
    country: {
      type: String,
      required: "Country is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pricing", pricingSchema);
