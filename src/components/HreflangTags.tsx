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

  // Ekstraher path uten locale-prefix
  const pathWithoutLocale = pathname.replace(/^\/(no|en|uk|pl|so|ar)/, '') || '/';

  // Hent current locale fra pathname (no prefix = Norwegian)
  const currentLocale = pathname.match(/^\/(en|uk|pl|so|ar)/)?.[1] || 'no';

  // Canonical URL - Norwegian = no prefix, others = with prefix
  const canonicalUrl = currentLocale === 'no'
    ? `${baseUrl}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`
    : `${baseUrl}/${currentLocale}${pathWithoutLocale === '/' ? '' : pathWithoutLocale}`;

  // Helper to build URL for a locale
  const getLocaleUrl = (locale: string) => {
    const path = pathWithoutLocale === '/' ? '' : pathWithoutLocale;
    return locale === 'no' ? `${baseUrl}${path}` : `${baseUrl}/${locale}${path}`;
  };

  return (
    <>
      {/* Canonical tag - forteller Google hvilken URL som er "hovedversjonen" */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang tags - forteller Google om alle språkversjoner */}
      {locales.map((locale) => (
        <link
          key={locale}
          rel="alternate"
          hrefLang={localeToLangCode[locale]}
          href={getLocaleUrl(locale)}
        />
      ))}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={getLocaleUrl('no')}
      />
    </>
  );
}
