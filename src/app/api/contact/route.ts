import { randomUUID } from "crypto";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const requestLog = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (requestLog.get(ip) ?? []).filter((time) => now - time < WINDOW_MS);
  recent.push(now);
  requestLog.set(ip, recent);
  return recent.length > MAX_REQUESTS;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
  }

  let payload: Record<string, unknown>;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = clean(payload.name, 100);
  const contact = clean(payload.contact, 160);
  const service = clean(payload.service, 120);
  const message = clean(payload.message, 3000);
  const website = clean(payload.website, 200);

  if (website) return NextResponse.json({ success: true });

  if (!name || !contact || !service || !message) {
    return NextResponse.json({ error: "Please complete every field." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error("Contact email is missing RESEND_API_KEY, CONTACT_EMAIL, or CONTACT_FROM_EMAIL.");
    return NextResponse.json({ error: "Email delivery is not configured." }, { status: 503 });
  }

  const emailPayload: Record<string, unknown> = {
    from: fromEmail,
    to: [toEmail],
    subject: `New CD Solutions enquiry: ${service}`,
    text: [
      "New website enquiry",
      "",
      `Name: ${name}`,
      `Contact: ${contact}`,
      `Service: ${service}`,
      "",
      "Project brief:",
      message,
    ].join("\n"),
  };

  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact)) emailPayload.reply_to = contact;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "Idempotency-Key": randomUUID(),
        "User-Agent": "cd-solutions-contact-form/1.0",
      },
      body: JSON.stringify(emailPayload),
      cache: "no-store",
    });

    if (!response.ok) {
      console.error(`Resend email request failed with status ${response.status}.`);
      return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "We could not send your message. Please try again." }, { status: 502 });
  }
}
