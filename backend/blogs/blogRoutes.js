const express = require("express");
const router = express.Router();


const blogs = [
  { id: 1, title: "How to Learn React", content: "React is a JavaScript library..." },
  { id: 2, title: "Understanding JavaScript Closures", content: "Closures are a fundamental concept..." },
];


router.get("/", (req, res) => {
  res.json(blogs);
});


router.get("/:id", (req, res) => {
  const blog = blogs.find((b) => b.id === parseInt(req.params.id));
  if (!blog) return res.status(404).json({ message: "Blog not found" });
  res.json(blog);
});

module.exports = router;
