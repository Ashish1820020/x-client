import { NextResponse } from 'next/server';
import { cookies } from 'next/headers'; // To access cookies in App Router

export async function middleware(request: Request) {
  // Retrieve the cookies from the incoming request
  const cookieStore = await cookies();
  
  // Get the 'authToken' cookie
  const authToken = cookieStore.get('authToken')?.value;
  console.log("authToken", authToken);
  

  if (!authToken) {
    // If no token, redirect to login page or handle accordingly
    return NextResponse.redirect(new URL('/auth', request.url));
  }

  try {
    console.log('Authenticated with token:', authToken);

    // Continue with the request flow
    return NextResponse.next();
  } catch (error) {
    console.error('Token verification failed', error);
    return NextResponse.redirect(new URL('/auth', request.url)); // If verification fails, redirect to login
  }
}


export const config = {
  matcher: [
    '/app/(home.*)',   // Matches /home, /home/anything
    '/app/(user.*)',   // Matches /user, /user/anything
    '/app/(:path.*)',       // Matches all paths (use this carefully as it applies to everything)
  ],
};
