const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const paymentStatusSchema = new mongoose.Schema(
  {
    orderStatus: {
      type: String,
      default: "Completed",
    },
    orderedBy: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    subscription_date: {
      type: Date,
    },
    expiry_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PaymentStatus", paymentStatusSchema);
