const Blog = require("../models/blog");
const fs = require("fs");

exports.create = async (req, res) => {
  const { values, user } = req.body;
  const { blog_title, blog_content, country, blog_category } = values;

  try {
    const newBlog = await new Blog({
      blog_title,
      blog_content,
      blog_image: {
        data: fs.readFileSync(
          path.join(__dirname + "/uploads/" + req.file.filename)
        ),
        contentType: "image/png",
      },
      blog_category,
      blog_image,
      country,
      user,
    }).save();
    res.json(newBlog);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

exports.list = async (req, res) => {
  const { u_id } = req.params;
  try {
    const blogs = await Blog.find({ user: u_id })
      .sort({ createdAt: -1 })
      .exec();
    if (blogs) {
      res.json(blogs);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No blogs found");
  }
};

exports.getAll = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).exec();
    if (blogs) {
      res.json(blogs);
    }
  } catch (error) {
    console.log(error);
    res.status(404).send("No blogs found");
  }
};

exports.remove = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const foundBlogs = await Blog.find({ blog: id }).exec();
  if (foundBlogs && foundBlogs.length > 0)
    res
      .status(400)
      .send("Cannot delete because active teams are available in this blog");
  else {
    const removedBlog = await Blog.findByIdAndDelete(id).exec();
    if (removedBlog) res.json(removedBlog);
    else res.status(400).send("Could not find the Blog, delete failed");
  }
};

exports.read = async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id).exec();
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).send("Blog not found");
  }
};

exports.update = async (req, res) => {
  console.log();
  const { id } = req.params;
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(id, req.body, {
      new: true,
    }).exec();
    if (updatedBlog) res.json(updatedBlog);
    else res.status(400).send("Blog not found");
  } catch (error) {
    console.log(error);
    res.status(400).send(" update failed");
  }
};
