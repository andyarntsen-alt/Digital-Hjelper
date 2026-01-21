import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['no'],
  defaultLocale: 'no',
  localePrefix: 'always'
});

// Alle språk som vises i språkvelgeren (inkludert kommende)
export const allLocales = ['no', 'en', 'pl', 'so', 'ar'];

// Språk som er aktive og fungerer
export const activeLocales = ['no'];

export const localeNames: Record<string, string> = {
  no: 'Norsk',
  en: 'English',
  pl: 'Polski',
  so: 'Soomaali',
  ar: 'العربية'
};

export const localeFlags: Record<string, string> = {
  no: '🇳🇴',
  en: '🇬🇧',
  pl: '🇵🇱',
  so: '🇸🇴',
  ar: '🇸🇦'
};

// Sjekk om et språk er aktivt
export function isLocaleActive(locale: string): boolean {
  return activeLocales.includes(locale);
}
