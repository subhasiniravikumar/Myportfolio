const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const messages = [];

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required."
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  const entry = {
    id: messages.length + 1,
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString()
  };

  messages.push(entry);

  return res.status(201).json({
    success: true,
    message: "Message received successfully.",
    data: entry
  });
});

app.get("/api/messages", (req, res) => {
  res.json({ count: messages.length, messages });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
