import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
  const jwt = request.cookies.get("TokenUser");

  if (!jwt) return NextResponse.redirect(new URL("/auth", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt,
      new TextEncoder().encode("mySeed")
    );
    console.log({ payload });
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }
}

export const config = {
  matcher: ["/profile","/search"],
};
