import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.log("Webhook hit!");

  return NextResponse.json({ ok: true }, { status: 200 });
}
