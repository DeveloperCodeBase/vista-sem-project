import { NextResponse } from "next/server";
import { sendEmail, forwardToSheets, forwardToHubSpot } from "@/lib/integrations";

export async function POST(request: Request){
  const body = await request.text();
  let payload:any = {};
  try{ payload = JSON.parse(body||"{}"); }catch{}
  // Try integrations (best-effort, non-blocking semantics)
  await Promise.allSettled([ sendEmail(payload), forwardToSheets(payload), forwardToHubSpot(payload) ]);
  return NextResponse.json({ ok: true });
}
