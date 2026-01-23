import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['no', 'en', 'uk', 'pl', 'so', 'ar'],
  defaultLocale: 'no',
  localePrefix: 'always'
});

// Alle språk som vises i språkvelgeren (inkludert kommende)
export const allLocales = ['no', 'en', 'uk', 'pl', 'so', 'ar'];

// Språk som er fullt oversatt og fungerer
export const activeLocales = ['no', 'en', 'uk', 'pl', 'so', 'ar'];

// Språk som kommer snart (vises med "Coming soon" melding)
export const comingSoonLocales: string[] = [];

export const localeNames: Record<string, string> = {
  no: 'Norsk',
  en: 'English',
  uk: 'Українська',
  pl: 'Polski',
  so: 'Soomaali',
  ar: 'العربية'
};

export const localeFlags: Record<string, string> = {
  no: '🇳🇴',
  en: '🇬🇧',
  uk: '🇺🇦',
  pl: '🇵🇱',
  so: '🇸🇴',
  ar: '🇸🇦'
};

// Sjekk om et språk er aktivt
export function isLocaleActive(locale: string): boolean {
  return activeLocales.includes(locale);
}
