const Blog = require("../models/blog");

// Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json({ blogs, userId: req.user?.id || null }); // Include user ID if logged in
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch blogs", error: error.message });
  }
};

// Get a blog by ID
exports.getBlogById = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch the blog", error: error.message });
  }
};

// Create a new blog
exports.createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = new Blog({ title, content, ownerId: req.user.id });
    await newBlog.save();
    res.status(201).json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Failed to create blog", error: error.message });
  }
};

// Update a blog
exports.updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to update this blog" });
    }
    blog.title = title || blog.title;
    blog.content = content || blog.content;
    await blog.save();
    res.status(200).json({ message: "Blog updated successfully", blog });
  } catch (error) {
    res.status(500).json({ message: "Failed to update blog", error: error.message });
  }
};

// Delete a blog
exports.deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    if (blog.ownerId.toString() !== req.user.id) {
      return res.status(403).json({ message: "Unauthorized to delete this blog" });
    }
    await blog.remove();
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete blog", error: error.message });
  }
};