import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json({ error: 'Token is required' }, { status: 400 });
    }

    // Set secure HttpOnly cookie
    const response = NextResponse.json({ message: 'Cookie set successfully' });
    response.cookies.set('authToken', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 3600, // 1 hour
    });

    return response;
  } catch (error) {
    console.log(error);
    
    return NextResponse.json({ error: 'Failed to set cookie' }, { status: 500 });
  }
}
