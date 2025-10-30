import { NextResponse } from "next/server";
import { saveContactRequest, type ContactPayload } from "@/lib/contactStore";

function sanitize(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "INVALID_PAYLOAD" }, { status: 400 });
  }

  const payload: ContactPayload = {
    name: sanitize((body as any).name),
    phone: sanitize((body as any).phone),
    email: sanitize((body as any).email),
    project: sanitize((body as any).project),
    message: sanitize((body as any).message),
  };

  const missing = ["name", "phone", "project", "message"].filter(
    (field) => !(payload as Record<string, string>)[field]
  );

  if (missing.length > 0) {
    return NextResponse.json(
      { ok: false, error: "MISSING_FIELDS", fields: missing },
      { status: 400 }
    );
  }

  const stored = await saveContactRequest(payload);
  return NextResponse.json({ ok: true, id: stored.id, createdAt: stored.createdAt });
}
