const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const stockSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    stock_name: {
      type: String,
      required: "stock name is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    nasdaq: {
      type: String,
    },

    avg_buy: {
      type: String,
    },
    current_price: {
      type: String,
      default: "0",
    },
    track: {
      type: String,
    },
    allocation: {
      type: Number,
    },
    // image: {
    //   type: String,
    //   trim: true,
    //   required: "Image is required",
    // },
    country: {
      type: String,
    },
    entry_status: {
      type: Boolean,
      required: false,
      default: null,
    },
    last_buy_date: {
      type: Date,
      required: false,
    },

    notes: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

// stockSchema.index({ user: 1, league_name: 1 }, { unique: true });

module.exports = mongoose.model("Stock", stockSchema);
