'use client';

import { usePathname } from 'next/navigation';

const locales = ['no', 'en', 'uk', 'pl', 'so', 'ar'];
const baseUrl = 'https://www.lettdigital.no';

const localeToLangCode: Record<string, string> = {
  no: 'nb',
  en: 'en',
  uk: 'uk',
  pl: 'pl',
  so: 'so',
  ar: 'ar'
};

export default function HreflangTags() {
  const pathname = usePathname();

  // Ekstraher path uten locale-prefix (as-needed: Norwegian has no prefix)
  const pathWithoutLocale = pathname.replace(/^\/(en|uk|pl|so|ar)/, '') || '/';

  // Hent current locale fra pathname (no prefix = Norwegian)
  const currentLocale = pathname.match(/^\/(en|uk|pl|so|ar)/)?.[1] || 'no';

  // Helper: build URL for locale (Norwegian = no prefix)
  const getUrl = (locale: string, path: string) => {
    const cleanPath = path === '/' ? '' : path;
    return locale === 'no' ? `${baseUrl}${cleanPath}` : `${baseUrl}/${locale}${cleanPath}`;
  };

  // Canonical URL
  const canonicalUrl = getUrl(currentLocale, pathWithoutLocale);

  return (
    <>
      {/* Canonical tag */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags */}
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={localeToLangCode[locale]}
          href={getUrl(locale, pathWithoutLocale)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={getUrl('no', pathWithoutLocale)}
      />
    </>
  );
}
