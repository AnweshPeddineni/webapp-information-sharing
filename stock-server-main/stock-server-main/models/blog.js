const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const BlogSchema = new mongoose.Schema(
  {
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
    blog_title: {
      type: String,
      required: "Blog title is required",
      minlength: [2, "Too short"],
      maxlength: [32, "Too long"],
    },
    blog_category: {
      type: String,
      required: false,
    },
    blog_image: { data: Buffer, contentType: String },
    blog_content: {
      type: String,
      required: "Blog Content is required",
      minlength: [5, "Too short"],
    },
    country: {
      type: String,
      required: "Country is required",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
