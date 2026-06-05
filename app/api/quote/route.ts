import { NextResponse } from "next/server";

/**
 * Quote form endpoint. Validates the lead and (for now) logs it server-side.
 *
 * TODO(launch): wire this to a real destination — e.g. send an email via
 * Resend/SendGrid to `site.email`, or push to a CRM. Until then it accepts the
 * submission so the front-end flow works end to end.
 */
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

  // Minimal phone sanity check (digits only, 7–15 long).
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7 || digits.length > 15) {
    return NextResponse.json(
      { error: "Please enter a valid phone number." },
      { status: 422 },
    );
  }

  // Placeholder delivery — replace with email/CRM integration at launch.
  console.log("[quote] new lead", { name, phone, service, message });

  return NextResponse.json({ ok: true });
}
