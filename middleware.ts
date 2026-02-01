import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

export const config = {
  matcher: [
    // Match root path for locale redirect
    '/',
    // Match all pathnames except for:
    // - api routes
    // - _next (Next.js internals)
    // - _vercel (Vercel internals)
    // - sitemap.xml, robots.txt, favicon.ico, favicon.svg, manifest.json
    // - static files (files with extensions)
    '/((?!api|_next|_vercel|sitemap\\.xml|robots\\.txt|favicon\\.ico|favicon\\.svg|manifest\\.json).*)'
  ]
};
