import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: Request) {
  const token = cookies().then((data) => {
    return data.get('authToken');
  }).catch((err) => {});
  

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Validate token here if necessary (e.g., by verifying it with the backend)
  return NextResponse.next();
}