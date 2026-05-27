import { NextResponse } from "next/server";

export async function POST() {
  const response = NextResponse.json({ success: true });

  // Clear all cookies
  const cookieOptions = {
    path: "/",
    expires: new Date(0),
  };

  response.cookies.set("admin_session", "", cookieOptions);
  response.cookies.set("admin_verified", "", cookieOptions);

  return response;
}
