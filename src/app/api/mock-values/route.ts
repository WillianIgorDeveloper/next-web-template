export async function GET() {
  return Response.json({
    success: true,
    data: {
      values: [
        { id: 1, name: "Mock Value 1" },
        { id: 2, name: "Mock Value 2" },
        { id: 3, name: "Mock Value 3" }
      ]
    }
  })
}

export async function POST(request: Request) {
  const { name } = await request.json()
  if (!name) {
    return Response.json({ success: false, error: "Name is required" }, { status: 400 })
  }

  const newValue = { id: Math.floor(Math.random() * 1000) + 4, name }
  return Response.json({ success: true, data: newValue }, { status: 201 })
}
