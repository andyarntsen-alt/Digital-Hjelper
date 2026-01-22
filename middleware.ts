import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect root to /no
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/no', request.url));
  }

  // Redirect paths without locale prefix to /no/path
  const locales = ['no', 'en', 'pl', 'so', 'ar'];
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (!pathnameHasLocale && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    return NextResponse.redirect(new URL(`/no${pathname}`, request.url));
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match all pathnames except for static files and api
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
};
