export { auth } from '@/auth';

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { auth } from '@/auth';

// This function can be marked `async` if using `await` inside
export async function proxy(request: NextRequest) {
  const session = await auth();
  const protectedRoutes = ['/dashboard', '/dashboard/profile', '/dashboard/settings'];

  const isProtectedRoute = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (!isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isProtectedRoute && !session) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }

export const config = {
  matcher: ['/dashboard/:path*', '/api/dashboard/:path*'],
};
