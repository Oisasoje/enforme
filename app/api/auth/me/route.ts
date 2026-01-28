import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import pool from "@/lib/db";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-this",
);

export async function GET(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { payload } = await jose.jwtVerify(token, JWT_SECRET);
    const userId = payload.userId;

    const client = await pool.connect();

    try {
      const userRes = await client.query(
        "SELECT id, name, email, plan, membership_status FROM users WHERE id = $1",
        [userId],
      );

      if (userRes.rows.length === 0) {
        return NextResponse.json(
          { message: "User not found" },
          { status: 404 },
        );
      }

      return NextResponse.json({ user: userRes.rows[0] }, { status: 200 });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Me error:", error);
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
}
