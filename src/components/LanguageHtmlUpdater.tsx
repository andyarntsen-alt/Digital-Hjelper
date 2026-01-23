'use client';

import { useEffect } from 'react';
import { useLocale } from 'next-intl';

const localeToHtmlLang: Record<string, string> = {
  no: 'nb',
  en: 'en',
  uk: 'uk',
  pl: 'pl',
  so: 'so',
  ar: 'ar'
};

export default function LanguageHtmlUpdater() {
  const locale = useLocale();

  useEffect(() => {
    const htmlLang = localeToHtmlLang[locale] || locale;
    document.documentElement.lang = htmlLang;

    // Sett tekst-retning for arabisk
    if (locale === 'ar') {
      document.documentElement.dir = 'rtl';
    } else {
      document.documentElement.dir = 'ltr';
    }
  }, [locale]);

  return null;
}
