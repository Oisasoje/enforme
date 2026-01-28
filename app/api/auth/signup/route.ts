import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-this",
);

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Please provide all details" },
        { status: 400 },
      );
    }

    const client = await pool.connect();

    try {
      const existingUserRes = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );
      if (existingUserRes.rows.length > 0) {
        return NextResponse.json(
          { message: "User already exists" },
          { status: 400 },
        );
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const insertRes = await client.query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, plan, membership_status",
        [name, email, hashedPassword],
      );
      const user = insertRes.rows[0];

      const token = await new jose.SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("7d")
        .sign(JWT_SECRET);

      const response = NextResponse.json(
        { message: "Account created successfully", user },
        { status: 201 },
      );

      response.cookies.set("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      return response;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
