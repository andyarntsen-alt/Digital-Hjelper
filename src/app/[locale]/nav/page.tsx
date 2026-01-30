'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const navGuideKeys = [
  { key: 'loggInn', href: '/nav/logg-inn', difficulty: 'easy', time: 5 },
  { key: 'meldekort', href: '/nav/meldekort', difficulty: 'easy', time: 5 },
  { key: 'dagpenger', href: '/nav/dagpenger', difficulty: 'medium', time: 20 },
  { key: 'sykepenger', href: '/nav/sykepenger', difficulty: 'medium', time: 15 },
  { key: 'pensjon', href: '/nav/pensjon', difficulty: 'medium', time: 15 },
  { key: 'uforetrygd', href: '/nav/uforetrygd', difficulty: 'medium', time: 20 },
  { key: 'foreldrepenger', href: '/nav/foreldrepenger', difficulty: 'medium', time: 25 },
  { key: 'arbeidsledig', href: '/nav/arbeidsledig', difficulty: 'easy', time: 10 },
];

// FAQ for SEO - direkte svar som AI kan sitere
const navFAQs = [
  {
    question: "Hvordan logger jeg inn på NAV?",
    answer: "Du logger inn på nav.no med BankID, BankID på mobil, eller Commfides. Gå til nav.no, klikk på 'Logg inn' øverst til høyre, og velg din innloggingsmetode. Hvis du har BankID på mobil, får du en melding på telefonen din som du må godkjenne."
  },
  {
    question: "Hvordan sender jeg meldekort til NAV?",
    answer: "Du sender meldekort ved å logge inn på nav.no med BankID. Gå til 'Meldekort' i menyen, fyll ut informasjon om arbeid og aktivitet for de siste 14 dagene, og send inn. Fristen er hver 14. dag, og det tar 2-3 minutter å fylle ut."
  },
  {
    question: "Hvordan søker jeg dagpenger?",
    answer: "Du søker dagpenger på nav.no. Logg inn med BankID, gå til 'Søknader', velg 'Dagpenger', og fyll ut skjemaet. Du må være registrert som arbeidssøker først. Behandlingstiden er vanligvis 3-4 uker."
  },
  {
    question: "Hva er telefonnummeret til NAV?",
    answer: "NAV sitt telefonnummer er 55 55 33 33. De er tilgjengelige mandag til fredag kl. 08:00-15:30. Du kan også chatte med NAV sin chatbot Frida på nav.no, som er tilgjengelig hele døgnet."
  },
  {
    question: "Hvordan finner jeg mitt lokale NAV-kontor?",
    answer: "Du finner ditt lokale NAV-kontor ved å gå til nav.no/sok-nav-kontor og skrive inn postnummeret ditt eller kommunen din. Du får da adresse, åpningstider og kontaktinformasjon til kontoret."
  },
  {
    question: "Kan jeg få hjelp på NAV-kontoret uten avtale?",
    answer: "De fleste NAV-kontorer tilbyr drop-in tider, men det varierer. Sjekk åpningstidene for ditt kontor på nav.no. For lengre samtaler anbefales det å bestille time på forhånd via nav.no eller telefon 55 55 33 33."
  }
];

export default function NAVPage() {
  const t = useTranslations('services.nav');
  const tGuides = useTranslations('guides.nav');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      {/* SEO: Structured Data */}
      <FAQSchema questions={navFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'NAV', url: `/${locale}/nav` }
      ]} />
      <ArticleSchema
        title="NAV Guider - Komplett hjelp til NAV sine digitale tjenester"
        description="Lær hvordan du logger inn på NAV, sender meldekort, søker dagpenger og bruker alle NAV sine digitale tjenester. Enkle steg-for-steg guider."
        url={`/${locale}/nav`}
        datePublished="2024-01-01"
        dateModified="2026-01-30"
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-nav-blue hover:underline mb-4 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-nav-blue text-white p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
              <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          {/* SEO: Intro-tekst med nøkkelord */}
          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>NAV (Arbeids- og velferdsetaten)</strong> tilbyr mange digitale tjenester som du kan bruke hjemmefra.
              Her finner du enkle guider som viser deg steg-for-steg hvordan du logger inn på NAV,
              sender meldekort, søker dagpenger, sykepenger og andre ytelser.
              Alle guidene er skrevet i et enkelt språk og testet for å sikre at de fungerer.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-nav-blue p-4 rounded-r-xl">
            <p className="text-lg text-gray-700">
              <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        {/* Veiledninger */}
        <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {navGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline">
              <div className="card hover:shadow-xl transition-all duration-200 hover:border-nav-blue h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.key}.title`)}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    guide.difficulty === 'easy'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}>
                    {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{tGuides(`${guide.key}.description`)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.time} {tCommon('minutes')}
                  </span>
                  <span className="text-nav-blue font-semibold flex items-center gap-1">
                    {tCommon('startGuide')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ seksjon - synlig for brukere og SEO */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om NAV</h2>
          <div className="space-y-4">
            {navFAQs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-nav-blue transform transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Relaterte guider - internlenking */}
        <div className="mt-12 card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">📚 Relaterte guider</h2>
          <p className="text-gray-700 mb-4">
            Trenger du hjelp med andre offentlige tjenester? Sjekk ut disse guidene:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/helse" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🏥</span>
              <div>
                <p className="font-semibold text-gray-800">Helsenorge</p>
                <p className="text-sm text-gray-600">Fastlege, resepter, journal</p>
              </div>
            </Link>
            <Link href="/skatt" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">💰</span>
              <div>
                <p className="font-semibold text-gray-800">Skatteetaten</p>
                <p className="text-sm text-gray-600">Skattemelding, skattekort</p>
              </div>
            </Link>
            <Link href="/sikkerhet/bankid" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🔐</span>
              <div>
                <p className="font-semibold text-gray-800">BankID</p>
                <p className="text-sm text-gray-600">Innlogging og sikkerhet</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Hjelp */}
        <div className="mt-12 card bg-blue-50">
          <h2 className="text-2xl font-bold mb-4">{t('needMoreHelp')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('needMoreHelpText')}
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong>{t('phone')}:</strong> 55 55 33 33 ({t('phoneHours')})</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span><strong>{t('chat')}:</strong> {t('chatAvailable')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong>{t('office')}:</strong> <a href="https://www.nav.no/sok-nav-kontor" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline">{t('findOffice')}</a></span>
            </li>
          </ul>
        </div>

        {/* Sist oppdatert - E-E-A-T signal */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-nav-blue hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
