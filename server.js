const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const messages = [];
let nextMessageId = 1;

app.use(express.json());

// Serve static files from root directory
app.use(express.static(path.join(__dirname)));

// Health check endpoint
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
    id: nextMessageId++,
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

app.get("/api/messages/:id", (req, res) => {
  const id = Number(req.params.id);
  const message = messages.find((item) => item.id === id);

  if (!message) {
    return res.status(404).json({
      success: false,
      message: "Message not found."
    });
  }

  return res.json({ success: true, data: message });
});

app.put("/api/messages/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = messages.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Message not found."
    });
  }

  const { name, email, message } = req.body || {};
  const current = messages[index];

  const updatedName = name !== undefined ? String(name).trim() : current.name;
  const updatedEmail = email !== undefined ? String(email).trim() : current.email;
  const updatedMessage = message !== undefined ? String(message).trim() : current.message;

  if (!updatedName || !updatedEmail || !updatedMessage) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required."
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(updatedEmail)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address."
    });
  }

  const updatedEntry = {
    ...current,
    name: updatedName,
    email: updatedEmail,
    message: updatedMessage,
    updatedAt: new Date().toISOString()
  };

  messages[index] = updatedEntry;

  return res.json({
    success: true,
    message: "Message updated successfully.",
    data: updatedEntry
  });
});

app.delete("/api/messages/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = messages.findIndex((item) => item.id === id);

  if (index === -1) {
    return res.status(404).json({
      success: false,
      message: "Message not found."
    });
  }

  const [deletedMessage] = messages.splice(index, 1);

  return res.json({
    success: true,
    message: "Message deleted successfully.",
    data: deletedMessage
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
