const express = require("express");
const crypto = require("crypto");

const app = express();

// Generate password
app.get("/generate", (req, res) => {
  const length = req.query.length || 10;
  const password = crypto.randomBytes(length).toString("hex").slice(0, length);
  res.json({ password });
});

// Health check
app.get("/", (req, res) => {
  res.send("Password API running");
});

app.listen(5000, () => console.log("Server running on port 5000"));