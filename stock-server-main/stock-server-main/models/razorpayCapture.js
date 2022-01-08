const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const razorpayCaptureSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: Number,
    },
    address: {
      type: String,
    },
    state: {
      type: String,
    },
    country: {
      type: String,
    },
    post_code: {
      type: Number,
    },
    subscription_type: {
      type: String,
      enum: [
        "Indian Subscription",
        "US Subscription",
        "Ind and US subscription",
      ],
      default: "Indian Subscription",
    },
    subscription_start_date: {
      type: Date,
    },
    subscription_end_date: {
      type: Date,
    },
  },
  { timestamps: true }
);

// stockSchema.index({ user: 1, league_name: 1 }, { unique: true });

module.exports = mongoose.model("RazorpayCapture", razorpayCaptureSchema);
