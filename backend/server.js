// filepath: backend/server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Mock login endpoint
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (email === "test@example.com" && password === "password") {
    res.json({ token: "mock-token" });
  } else {
    res.status(401).json({ error: "Invalid credentials" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
