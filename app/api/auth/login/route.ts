import { NextResponse } from "next/server";
import pool from "@/lib/db";
import bcrypt from "bcryptjs";
import * as jose from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-change-this",
);

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Please provide email and password" },
        { status: 400 },
      );
    }

    const client = await pool.connect();

    try {
      const userRes = await client.query(
        "SELECT * FROM users WHERE email = $1",
        [email],
      );

      if (userRes.rows.length === 0) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 },
        );
      }

      const user = userRes.rows[0];
      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return NextResponse.json(
          { message: "Invalid credentials" },
          { status: 401 },
        );
      }

      const token = await new jose.SignJWT({ userId: user.id })
        .setProtectedHeader({ alg: "HS256" })
        .setExpirationTime("7d")
        .sign(JWT_SECRET);

      const response = NextResponse.json(
        {
          message: "Login successful",
          user: { name: user.name, email: user.email },
        },
        { status: 200 },
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
    console.error("Login error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 },
    );
  }
}
