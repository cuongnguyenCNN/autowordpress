import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  if (protectedRoutes.includes(pathname) && !session) {
    // Nếu không có session Supabase => redirect đến /signin
    const signInUrl = new URL("/signin", req.url);
    return NextResponse.redirect(signInUrl);
  }

  // session hợp lệ hoặc route không cần bảo vệ
  return res;
}

export const config = {
  matcher: ["/dashboard", "/profile", "/settings", "/youtube/callback"],
};
