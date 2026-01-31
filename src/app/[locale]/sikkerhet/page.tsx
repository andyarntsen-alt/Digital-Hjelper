'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const sikkerhetFAQs = [
  {
    question: "Hva er BankID og hvordan fungerer det?",
    answer: "BankID er en elektronisk legitimasjon som brukes til å logge inn på offentlige tjenester og nettbanker i Norge. Du får BankID gjennom banken din. BankID på mobil fungerer ved at du godkjenner innlogging via en app på telefonen. BankID med kodebrikke bruker en fysisk brikke som genererer engangskoder."
  },
  {
    question: "Hvordan gjenkjenner jeg svindel-meldinger?",
    answer: "Svindel-meldinger kjennetegnes ved: 1) De ber om personlig informasjon som passord eller BankID. 2) De skaper hastverk med trusler om stengte kontoer. 3) De inneholder skrivefeil og dårlig språk. 4) Avsenderadressen ser merkelig ut. 5) Lenker fører til falske nettsider. NAV, banker og offentlige etater vil aldri be om BankID-koder eller passord via SMS eller e-post."
  },
  {
    question: "Hva er phishing?",
    answer: "Phishing er en type svindel der kriminelle utgir seg for å være legitime virksomheter (som banker eller NAV) for å lure deg til å oppgi personlig informasjon. De bruker ofte e-post, SMS eller falske nettsider som ser ekte ut. Aldri klikk på lenker i meldinger som ber om pålogging - gå heller direkte til den offisielle nettsiden."
  },
  {
    question: "Hvordan lager jeg et sikkert passord?",
    answer: "Et sikkert passord er minst 12 tegn langt og inneholder en blanding av store og små bokstaver, tall og spesialtegn. Bruk gjerne en setning du husker, for eksempel 'MinKattHeter3Puser!'. Ikke bruk samme passord flere steder. Vurder å bruke en passordmanager som husker passordene for deg."
  },
  {
    question: "Hva gjør jeg hvis jeg har blitt svindlet?",
    answer: "1) Ring banken din umiddelbart og be dem sperre kortet/kontoen. 2) Anmeld svindelen til politiet på politiet.no eller 02800. 3) Endre passord på alle kontoer, spesielt e-post og nettbank. 4) Kontakt ID-tyveriregisteret hvis du har gitt fra deg personnummer. 5) Dokumenter alt med skjermbilder."
  },
  {
    question: "Er det trygt å bruke offentlig WiFi?",
    answer: "Offentlig WiFi kan være usikkert. Unngå å logge inn på nettbank eller oppgi sensitiv informasjon på offentlig WiFi. Hvis du må bruke det, sørg for at nettsiden bruker HTTPS (hengelås-ikon i nettleseren). Vurder å bruke mobildata for sensitive oppgaver i stedet."
  }
];

export default function SikkerhetPage() {
  const t = useTranslations('services.sikkerhet');
  const tCommon = useTranslations('common');
  const tGuides = useTranslations('guides.sikkerhet');
  const locale = useLocale();

  const sikkerhetsGuider = [
    { guideKey: 'bankid', href: '/sikkerhet/bankid', time: '10 min' },
    { guideKey: 'svindel', href: '/sikkerhet/svindel', time: '15 min' },
    { guideKey: 'phishing', href: '/sikkerhet/phishing', time: '10 min' },
    { guideKey: 'passord', href: '/sikkerhet/passord', time: '8 min' },
  ];

  return (
    <>
      <FAQSchema questions={sikkerhetFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Sikkerhet', url: `/${locale}/sikkerhet` }
      ]} />
      <ArticleSchema
        title="Digital Sikkerhet - Beskytt deg mot svindel og phishing"
        description="Lær hvordan du beskytter deg mot svindel, phishing og ID-tyveri på nett. Guider om BankID, sikre passord og hvordan du gjenkjenner falske meldinger."
        url={`/${locale}/sikkerhet`}
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
            <div className="bg-purple-600 text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">Digital sikkerhet</strong> handler om å beskytte deg selv og din informasjon på nett.
            Her finner du guider om hvordan du bruker BankID trygt, gjenkjenner svindel og phishing,
            og lager sikre passord.
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
          {sikkerhetsGuider.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">{tGuides(`${guide.guideKey}.title`)}</h3>
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
                    {tGuides(`${guide.guideKey}.difficulty`)}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tGuides(`${guide.guideKey}.description`)}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tGuides(`${guide.guideKey}.time`)}
                  </span>
                  <span className="text-purple-600 font-medium flex items-center gap-1">
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

        {/* Warning signs */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('warningSignsTitle')}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              t('warningSigns.personalInfo'),
              t('warningSigns.urgent'),
              t('warningSigns.prize'),
              t('warningSigns.tooGood'),
              t('warningSigns.spelling'),
              t('warningSigns.strangeLinks'),
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-gray-700">{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Vanlige spørsmål om sikkerhet</h2>
          <div className="space-y-3">
            {sikkerhetFAQs.map((faq, index) => (
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

        {/* If scammed */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('beenScammedTitle')}</h2>
          <p className="text-gray-600 mb-6">{t('beenScammedText')}</p>
          <div className="space-y-3">
            {[
              t('beenScammedSteps.bank'),
              t('beenScammedSteps.police'),
              t('beenScammedSteps.password'),
              t('beenScammedSteps.idTheft'),
            ].map((step, index) => (
              <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
                <span className="bg-gray-100 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">{index + 1}</span>
                <span className="text-gray-700">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Related guides */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Relaterte guider</h2>
          <p className="text-gray-600 mb-6">
            Andre tjenester som krever sikker innlogging
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <Link href="/nav" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-nav-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">NAV</p>
                <p className="text-sm text-gray-500">Logg inn trygt</p>
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
                <p className="text-sm text-gray-500">Sikker innlogging</p>
              </div>
            </Link>
            <Link href="/bank" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">Bank</p>
                <p className="text-sm text-gray-500">Nettbank-sikkerhet</p>
              </div>
            </Link>
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
