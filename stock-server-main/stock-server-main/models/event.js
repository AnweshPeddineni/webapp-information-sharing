const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const eventSchema = new mongoose.Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  title: {
    type: String,
    required: "stock name is required",
    minlength: [2, "Too short"],
    maxlength: [32, "Too long"],
  },

  content: {
    type: String,
  },
  date: {
    type: Date,
    required: "true",
  },
  start: {
    type: String,
    required: true,
  },
  end: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Event", eventSchema);
