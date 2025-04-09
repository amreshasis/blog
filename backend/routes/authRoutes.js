const express = require("express");
const { register, login, verifyToken } = require("../controllers/auth");
const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Protected route example
router.get("/protected", verifyToken, (req, res) => {
  res.status(200).json({ message: "You are authorized", user: req.user });
});

module.exports = router;
