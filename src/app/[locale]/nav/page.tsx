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

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header - clean, minimal */}
        <div className="mb-12">
          <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="bg-nav-blue text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          {/* Intro text */}
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">NAV (Arbeids- og velferdsetaten)</strong> tilbyr mange digitale tjenester som du kan bruke hjemmefra.
            Her finner du enkle guider som viser deg steg-for-steg hvordan du logger inn på NAV,
            sender meldekort, søker dagpenger, sykepenger og andre ytelser.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              <strong className="text-gray-900">{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        {/* Guides - clean grid */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('selectGuide')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {navGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-nav-blue transition-colors">{tGuides(`${guide.key}.title`)}</h3>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    guide.difficulty === 'easy'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-amber-100 text-amber-700'
                  }`}>
                    {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tGuides(`${guide.key}.description`)}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.time} {tCommon('minutes')}
                  </span>
                  <span className="text-nav-blue font-medium flex items-center gap-1">
                    {tCommon('startGuide')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ section - clean, no emoji */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Vanlige spørsmål om NAV</h2>
          <div className="space-y-3">
            {navFAQs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5">
                  <h3 className="text-base font-medium text-gray-900 pr-4">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Related guides - clean, no emoji */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Relaterte guider</h2>
          <p className="text-gray-600 mb-6">
            Trenger du hjelp med andre offentlige tjenester?
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/helse" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-helse-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">Helsenorge</p>
                <p className="text-sm text-gray-500">Fastlege, resepter</p>
              </div>
            </Link>
            <Link href="/skatt" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-skatt-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">Skatteetaten</p>
                <p className="text-sm text-gray-500">Skattemelding, skattekort</p>
              </div>
            </Link>
            <Link href="/sikkerhet/bankid" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">BankID</p>
                <p className="text-sm text-gray-500">Innlogging og sikkerhet</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Help section - subtle styling */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{t('needMoreHelp')}</h2>
          <p className="text-gray-600 mb-4">
            {t('needMoreHelpText')}
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong className="text-gray-900">{t('phone')}:</strong> 55 55 33 33 ({t('phoneHours')})</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span><strong className="text-gray-900">{t('chat')}:</strong> {t('chatAvailable')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong className="text-gray-900">{t('office')}:</strong> <a href="https://www.nav.no/sok-nav-kontor" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline">{t('findOffice')}</a></span>
            </div>
          </div>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-gray-400">
          Sist oppdatert: Januar 2026
        </p>
      </div>
    </>
  );
}
