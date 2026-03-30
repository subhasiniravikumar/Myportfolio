// API route for contact messages - POST, GET all, GET by ID, PUT, DELETE

const messages = [];
let nextId = 1;

function handleContactPost(req, res) {
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
    id: nextId++,
    name: String(name).trim(),
    email: String(email).trim(),
    message: String(message).trim(),
    createdAt: new Date().toISOString()
  };

  messages.push(entry);

  return JSON.stringify({
    success: true,
    message: "Message received successfully.",
    data: entry
  });
}

// In Next.js API route format:
export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body || {};

    if (!name || !email || !message) {
      return Response.json({
        success: false,
        message: "Name, email, and message are required."
      }, { status: 400 });
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return Response.json({
        success: false,
        message: "Please provide a valid email address."
      }, { status: 400 });
    }

    const entry = {
      id: nextId++,
      name: String(name).trim(),
      email: String(email).trim(),
      message: String(message).trim(),
      createdAt: new Date().toISOString()
    };

    messages.push(entry);

    return Response.json({
      success: true,
      message: "Message received successfully.",
      data: entry
    }, { status: 201 });
  } catch (error) {
    return Response.json({
      success: false,
      message: "Server error"
    }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({
    count: messages.length,
    messages
  });
}
