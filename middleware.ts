import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

// Alle aktive locales
const locales = ['no', 'en', 'uk', 'pl', 'so', 'ar'];

export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Redirect root to /no
  if (pathname === '/') {
    return NextResponse.redirect(new URL('/no', request.url), { status: 308 });
  }

  // Sjekk om pathname allerede har en locale prefix
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  // Redirect paths uten locale prefix til /no/path
  if (!pathnameHasLocale && !pathname.startsWith('/api') && !pathname.startsWith('/_next') && !pathname.includes('.')) {
    return NextResponse.redirect(new URL(`/no${pathname}`, request.url), { status: 308 });
  }

  return intlMiddleware(request);
}

export const config = {
  matcher: [
    // Match root path
    '/',
    // Match all pathnames except for static files, api, and _next
    '/((?!api|_next|_vercel|.*\\.[\\w]+$).*)'
  ]
};
