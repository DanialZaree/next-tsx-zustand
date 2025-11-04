import { NextResponse } from "next/server";

// GET handler
export async function GET() {
  return NextResponse.json({ message: "Hello from the API!" });
}

// POST handler
export async function POST(request: Request) {
  const body = await request.json();
  const name = body.name || "Guest";

  return NextResponse.json({ message: `Hello, ${name}!` });
}
