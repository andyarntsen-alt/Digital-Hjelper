// SEO utility functions for canonical URLs
// With localePrefix: 'as-needed', Norwegian (default) has no prefix

const BASE_URL = 'https://www.lettdigital.no';

export function getCanonicalUrl(locale: string, path: string): string {
  // Norwegian = no prefix, other languages = with prefix
  if (locale === 'no') {
    return `${BASE_URL}${path}`;
  }
  return `${BASE_URL}/${locale}${path}`;
}

export function getLanguageAlternates(path: string) {
  return {
    'nb': `${BASE_URL}${path}`,           // Norwegian = no prefix
    'en': `${BASE_URL}/en${path}`,
    'uk': `${BASE_URL}/uk${path}`,
    'pl': `${BASE_URL}/pl${path}`,
    'so': `${BASE_URL}/so${path}`,
    'ar': `${BASE_URL}/ar${path}`,
  };
}
