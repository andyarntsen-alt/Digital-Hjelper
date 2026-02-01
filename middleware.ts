import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

const intlMiddleware = createMiddleware(routing);

export default intlMiddleware;

export const config = {
  matcher: [
    // Match root path
    '/',
    // Match all pathnames except for static files, api, and _next
    '/((?!api|_next|_vercel|.*\\.[\\w]+$).*)'
  ]
};
