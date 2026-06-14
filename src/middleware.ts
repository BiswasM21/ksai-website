import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip middleware for static files, API routes, and login page
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin/login") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  // Redirect /about/padhaiway to /vision/padhaiway
  if (pathname === "/about/padhaiway" || pathname === "/about/padhaiway/") {
    const url = new URL("/vision/padhaiway", request.url);
    return NextResponse.redirect(url);
  }

  // Check if accessing admin routes (except /admin itself)
  if (pathname.startsWith("/admin")) {
    // Check for session cookie
    const sessionCookie = request.cookies.get("admin_session");
    const verifiedCookie = request.cookies.get("admin_verified");

    if (!sessionCookie && !verifiedCookie) {
      const loginUrl = new URL("/admin/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
