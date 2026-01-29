export const runtime = "nodejs";

import axios from "axios";
import crypto from "crypto";

export async function POST(req) {
  try {
    const body = await req.json();
    const { planCode, userId, accountNumber, bankCode, phoneNumber } = body;

    const requestRef = `ENFORME-${userId}-${Date.now()}`;

    // MD5 signature
    const signature = crypto
      .createHash("md5")
      .update(`${requestRef};${process.env.ONEPIPE_SECRET_KEY}`)
      .digest("hex");

    // TripleDES encryption
    const secretUtf16 = Buffer.from(process.env.ONEPIPE_SECRET_KEY, "utf16le");
    const md5Key16 = crypto.createHash("md5").update(secretUtf16).digest();
    const key24 = Buffer.concat([md5Key16, md5Key16.subarray(0, 8)]);
    const iv = Buffer.alloc(8, 0);

    const plainUtf16 = Buffer.from(`${accountNumber};${bankCode}`, "utf16le");
    const cipher = crypto.createCipheriv("des-ede3-cbc", key24, iv);
    cipher.setAutoPadding(true);
    const secureEncrypted = Buffer.concat([
      cipher.update(plainUtf16),
      cipher.final(),
    ]).toString("base64");

    // Payload
    const payload = {
      request_ref: requestRef,
      request_type: "send invoice",
      auth: {
        type: "bank.account",
        secure: secureEncrypted,
        auth_provider: "PaywithAccount",
      },
      // ...rest of payload
    };

    const response = await axios.post(process.env.ONEPIPE_API_URL, payload, {
      headers: {
        Authorization: `Bearer ${process.env.ONEPIPE_CLIENT_KEY}`,
        Signature: signature,
        "Content-Type": "application/json",
      },
    });

    return Response.json({ ok: true, data: response.data });
  } catch (err) {
    console.error("OnePipe error:", err?.response?.data || err.message);
    return Response.json(
      { ok: false, error: err?.response?.data || "Internal server error" },
      { status: 500 },
    );
  }
}
