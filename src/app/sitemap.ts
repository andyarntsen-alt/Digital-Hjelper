import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lettdigital.no';

  // All guide pages
  const guides = [
    // NAV
    '/no/nav',
    '/no/nav/dagpenger',
    '/no/nav/pensjon',
    '/no/nav/uforetrygd',
    '/no/nav/sykepenger',
    '/no/nav/foreldrepenger',
    '/no/nav/meldekort',
    '/no/nav/arbeidsledig',
    '/no/nav/logg-inn',
    // Helse
    '/no/helse',
    '/no/helse/logg-inn',
    '/no/helse/bestille-time',
    '/no/helse/resepter',
    '/no/helse/journal',
    '/no/helse/bytte-fastlege',
    '/no/helse/melding',
    // Skatt
    '/no/skatt',
    '/no/skatt/skattemelding',
    '/no/skatt/skattekort',
    '/no/skatt/fradrag',
    '/no/skatt/skatteoppgjoer',
    '/no/skatt/skatteattest',
    '/no/skatt/logg-inn',
    // Sikkerhet
    '/no/sikkerhet',
    '/no/sikkerhet/bankid',
    '/no/sikkerhet/passord',
    '/no/sikkerhet/svindel',
    '/no/sikkerhet/phishing',
    // Grunnleggende
    '/no/grunnleggende',
    '/no/grunnleggende/smarttelefon',
    '/no/grunnleggende/nettleser',
    '/no/grunnleggende/videosamtale',
    '/no/grunnleggende/passord-hjelp',
    '/no/grunnleggende/fa-hjelp',
    // Bank
    '/no/bank',
    '/no/bank/nettbank',
    '/no/bank/vipps',
    '/no/bank/betaling',
    '/no/bank/gjeld',
    // Bolig
    '/no/bolig',
    '/no/bolig/bostotte',
    '/no/bolig/startlan',
    '/no/bolig/kommunal-bolig',
    // Utdanning
    '/no/utdanning',
    '/no/utdanning/studielan',
    '/no/utdanning/stipend',
    '/no/utdanning/tilbakebetaling',
    // ID
    '/no/id',
    '/no/id/pass',
    '/no/id/id-kort',
    '/no/id/forerkort',
    // Andre sider
    '/no',
    '/no/faq',
    '/no/ordbok',
    '/no/om',
  ];

  return guides.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/no' ? 1 : path.split('/').length === 3 ? 0.9 : 0.8,
  }));
}
