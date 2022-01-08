const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  orders: {
    type: Array,
    default: [],
  },
  subscription_type: {
    type: String,
    enum: ["Indian Portfolio", "US Portfolio", "Both Indian and US Portfolio"],
    default: "Indian Portfolio",
  },
});

module.exports = mongoose.model("Payment", paymentSchema);
