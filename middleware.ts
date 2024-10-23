import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const currentUserId = request.cookies.get("id")?.value;
  if (request.nextUrl.pathname.startsWith("/hub")) {
    if (!currentUserId) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  if (request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/hub", request.url));
  }
}
