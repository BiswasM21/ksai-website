import { NextResponse } from "next/server";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@kalingasovereignai.com";
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "ksai-admin-2026";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      const token = Buffer.from(`${email}:${Date.now()}`).toString("base64");

      const response = NextResponse.json({
        success: true,
        token,
        user: { email: ADMIN_EMAIL }
      });

      // Set session cookie
      response.cookies.set("admin_session", token, {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      // Set verification cookie
      response.cookies.set("admin_verified", "true", {
        httpOnly: false,
        secure: false,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });

      return response;
    }

    return NextResponse.json(
      { error: "Invalid email or password" },
      { status: 401 }
    );
  } catch {
    return NextResponse.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
