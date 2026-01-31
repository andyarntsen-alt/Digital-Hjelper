'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const grunnleggendeFAQs = [
  {
    question: "Hvordan bruker jeg en smarttelefon?",
    answer: "En smarttelefon har en berøringsskjerm som du trykker på med fingeren. For å åpne en app, trykk én gang på ikonet. For å skrolle, dra fingeren opp eller ned på skjermen. De viktigste knappene er hjem-knappen (tar deg tilbake til startskjermen) og tilbake-knappen. Start med å øve på å ringe, sende SMS og ta bilder."
  },
  {
    question: "Hva er en app og hvordan laster jeg ned apper?",
    answer: "En app er et program på telefonen din, som Vipps eller Facebook. For å laste ned nye apper, åpne 'App Store' (iPhone) eller 'Google Play' (Android). Søk etter appen du vil ha, trykk på 'Hent' eller 'Installer', og den lastes ned gratis (noen apper koster penger). Appen dukker opp på startskjermen din."
  },
  {
    question: "Hvordan kobler jeg meg til WiFi?",
    answer: "For å koble til WiFi: 1) Gå til Innstillinger på telefonen. 2) Trykk på 'WiFi' eller 'Trådløst nettverk'. 3) Velg nettverket ditt fra listen. 4) Skriv inn passordet (står ofte på ruteren eller bak på modemet). 5) Trykk 'Koble til'. Du ser et WiFi-symbol øverst på skjermen når du er tilkoblet."
  },
  {
    question: "Hvordan tar jeg en videosamtale?",
    answer: "For videosamtale trenger du en app som FaceTime (iPhone), WhatsApp, eller Skype. Åpne appen, finn personen du vil ringe, og trykk på kamera-ikonet i stedet for telefon-ikonet. Sørg for godt lys i rommet og hold telefonen slik at ansiktet ditt er synlig. Du kan også bruke datamaskin med Teams eller Zoom."
  },
  {
    question: "Hva gjør jeg hvis jeg har glemt passordet mitt?",
    answer: "Hvis du har glemt passordet: 1) Klikk på 'Glemt passord?' på innloggingssiden. 2) Skriv inn e-postadressen din. 3) Sjekk e-posten for en lenke til å lage nytt passord. 4) Lag et nytt, sikkert passord. Tips: Skriv ned passordene dine på et trygt sted, eller bruk en passordmanager."
  },
  {
    question: "Hvor kan jeg få hjelp med data og internett?",
    answer: "Det finnes mange steder du kan få gratis hjelp: 1) Biblioteket - de fleste bibliotek tilbyr datahjelp. 2) Seniornett Norge - frivillige som hjelper eldre med teknologi. 3) NAV - kan hjelpe med digitale tjenester. 4) Frivilligsentralen - mange har datakurs. 5) Familie og venner - spør om de kan vise deg."
  }
];

const grunnleggendeGuideKeys = [
  { key: 'smarttelefon', href: '/grunnleggende/smarttelefon', difficulty: 'easy', time: 15 },
  { key: 'nettleser', href: '/grunnleggende/nettleser', difficulty: 'easy', time: 10 },
  { key: 'videosamtale', href: '/grunnleggende/videosamtale', difficulty: 'medium', time: 15 },
  { key: 'passordHjelp', href: '/grunnleggende/passord-hjelp', difficulty: 'easy', time: 10 },
  { key: 'faHjelp', href: '/grunnleggende/fa-hjelp', difficulty: 'easy', time: 5 },
];

export default function GrunnleggendePage() {
  const t = useTranslations('services.grunnleggende');
  const tGuides = useTranslations('guides.grunnleggende');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <FAQSchema questions={grunnleggendeFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Grunnleggende', url: `/${locale}/grunnleggende` }
      ]} />
      <ArticleSchema
        title="Grunnleggende digital kunnskap - Lær å bruke smarttelefon og internett"
        description="Enkle guider for nybegynnere som vil lære å bruke smarttelefon, nettleser, videosamtale og internett. Steg-for-steg forklaringer for alle."
        url={`/${locale}/grunnleggende`}
        datePublished="2024-01-01"
        dateModified="2026-01-30"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="bg-grunnleggende-purple text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">Grunnleggende digital kunnskap</strong> hjelper deg å mestre hverdagens teknologi.
            Her finner du enkle steg-for-steg guider som viser hvordan du bruker smarttelefon,
            nettleser, videosamtale og andre digitale verktøy.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              <strong className="text-gray-900">{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        {/* Guides */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('selectGuide')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {grunnleggendeGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-grunnleggende-purple transition-colors">{tGuides(`${guide.key}.title`)}</h3>
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
                  <span className="text-grunnleggende-purple font-medium flex items-center gap-1">
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

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Vanlige spørsmål for nybegynnere</h2>
          <div className="space-y-3">
            {grunnleggendeFAQs.map((faq, index) => (
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

        {/* Next steps */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Neste steg</h2>
          <p className="text-gray-600 mb-6">
            Når du har lært det grunnleggende, kan du ta i bruk offentlige digitale tjenester:
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/sikkerhet/bankid" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">BankID</p>
                <p className="text-sm text-gray-500">Digital innlogging</p>
              </div>
            </Link>
            <Link href="/nav" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-nav-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">NAV</p>
                <p className="text-sm text-gray-500">Offentlige tjenester</p>
              </div>
            </Link>
            <Link href="/helse" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-helse-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">Helsenorge</p>
                <p className="text-sm text-gray-500">Fastlege og resepter</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Help */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{t('needMoreHelp')}</h2>
          <p className="text-gray-600 mb-4">{t('needMoreHelpText')}</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <p className="font-medium text-gray-900">{t('seniornett')}</p>
              <p className="text-gray-600 text-sm">{t('seniornettDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <p className="font-medium text-gray-900">{t('library')}</p>
              <p className="text-gray-600 text-sm">{t('libraryDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-lg">
              <p className="font-medium text-gray-900">{t('dataHjelpen')}</p>
              <p className="text-gray-600 text-sm">{t('dataHjelpenDesc')}</p>
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
