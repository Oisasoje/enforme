import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  const { email, password, name } = await req.json();

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing)
    return NextResponse.json({ error: "User exists" }, { status: 400 });

  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      email,
      name,
      passwordHash,
      membership: {
        create: {
          plan: "STARTER",
          status: "TRIAL",
          trialEndsAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        },
      },
    },
  });

  return NextResponse.json({ ok: true });
}
