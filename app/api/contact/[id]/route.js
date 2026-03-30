export async function GET(request, { params }) {
  const id = Number(params.id);

  // In a real app, you'd query a database
  // For now, return a mock response
  return Response.json({
    success: false,
    message: "Message not found."
  }, { status: 404 });
}

export async function PUT(request, { params }) {
  return Response.json({
    success: false,
    message: "Update not implemented in demo."
  }, { status: 501 });
}

export async function DELETE(request, { params }) {
  return Response.json({
    success: false,
    message: "Delete not implemented in demo."
  }, { status: 501 });
}
