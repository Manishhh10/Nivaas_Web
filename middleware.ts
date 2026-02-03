import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('auth-token')?.value || 
                request.headers.get('authorization')?.split(' ')[1];
  
  const { pathname } = request.nextUrl;

  // Admin routes protection
  if (pathname.startsWith('/admin')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }

    // Decode token to check role (simple base64 decode for JWT payload)
    try {
      const payload = JSON.parse(
        Buffer.from(token.split('.')[1], 'base64').toString()
      );
      
      if (payload.role !== 'admin') {
        return NextResponse.redirect(new URL('/dashboard', request.url));
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  // User routes protection (both admin and user can access)
  if (pathname.startsWith('/user')) {
    if (!token) {
      return NextResponse.redirect(new URL('/auth/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/user/:path*'],
};
