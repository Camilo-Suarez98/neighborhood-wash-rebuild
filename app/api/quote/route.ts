import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const phone = String(body.phone ?? "").trim();
  const service = String(body.service ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !phone) {
    return NextResponse.json(
      { error: "Name and phone are required." },
      { status: 422 },
    );
  }

  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 422 },
    );
  }

  return NextResponse.json({ ok: true });
}
