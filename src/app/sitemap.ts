import { MetadataRoute } from 'next';
import { activeLocales } from '@/i18n/routing';

// Bruk kun aktive språk i sitemap (no, en)
const locales = activeLocales;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lettdigital.no';

  // Alle guide-paths (uten språkprefix)
  const guidePaths = [
    // NAV
    '/nav',
    '/nav/dagpenger',
    '/nav/pensjon',
    '/nav/uforetrygd',
    '/nav/sykepenger',
    '/nav/foreldrepenger',
    '/nav/meldekort',
    '/nav/arbeidsledig',
    '/nav/logg-inn',
    // Helse
    '/helse',
    '/helse/logg-inn',
    '/helse/bestille-time',
    '/helse/resepter',
    '/helse/journal',
    '/helse/bytte-fastlege',
    '/helse/melding',
    // Skatt
    '/skatt',
    '/skatt/skattemelding',
    '/skatt/skattekort',
    '/skatt/fradrag',
    '/skatt/skatteoppgjoer',
    '/skatt/skatteattest',
    '/skatt/logg-inn',
    // Sikkerhet
    '/sikkerhet',
    '/sikkerhet/bankid',
    '/sikkerhet/passord',
    '/sikkerhet/svindel',
    '/sikkerhet/phishing',
    // Grunnleggende
    '/grunnleggende',
    '/grunnleggende/smarttelefon',
    '/grunnleggende/nettleser',
    '/grunnleggende/videosamtale',
    '/grunnleggende/passord-hjelp',
    '/grunnleggende/fa-hjelp',
    // Bank
    '/bank',
    '/bank/nettbank',
    '/bank/vipps',
    '/bank/betaling',
    '/bank/gjeld',
    // Bolig
    '/bolig',
    '/bolig/bostotte',
    '/bolig/startlan',
    '/bolig/kommunal-bolig',
    // Utdanning
    '/utdanning',
    '/utdanning/studielan',
    '/utdanning/stipend',
    '/utdanning/tilbakebetaling',
    // ID
    '/id',
    '/id/pass',
    '/id/id-kort',
    '/id/forerkort',
    // Digital
    '/digital',
    // Byer
    '/byer',
    // Ny i Norge
    '/ny-i-norge',
    // Andre sider
    '',
    '/faq',
    '/ordbok',
    '/om',
    '/personvern',
    '/favoritter',
    '/hjelpere',
  ];

  // Generer URL-er for alle språk
  const urls: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of guidePaths) {
      // Norwegian uses no prefix (as-needed), other languages use prefix
      const fullPath = locale === 'no' ? path : `/${locale}${path}`;
      const isHomePage = path === '';
      const isMainCategory = path.split('/').length === 2;

      // Generer alternates for hreflang
      const alternates: { languages: Record<string, string> } = {
        languages: {}
      };

      for (const altLocale of locales) {
        const langCode = altLocale === 'no' ? 'nb' : altLocale;
        // Norwegian = no prefix, others = with prefix
        const altPath = altLocale === 'no' ? path : `/${altLocale}${path}`;
        alternates.languages[langCode] = `${baseUrl}${altPath}`;
      }
      alternates.languages['x-default'] = `${baseUrl}${path}`; // Default = Norwegian (no prefix)

      urls.push({
        url: `${baseUrl}${fullPath}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: isHomePage ? 1 : isMainCategory ? 0.9 : 0.8,
        alternates
      });
    }
  }

  return urls;
}
