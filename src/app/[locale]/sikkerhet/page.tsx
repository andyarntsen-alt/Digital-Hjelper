'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

// FAQ for SEO
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
      {/* SEO: Structured Data */}
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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href="/" className="text-purple-600 hover:underline mb-4 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-purple-600 text-white p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
              <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          {/* SEO: Intro-tekst */}
          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Digital sikkerhet</strong> handler om å beskytte deg selv og din informasjon på nett.
              Her finner du guider om hvordan du bruker BankID trygt, gjenkjenner svindel og phishing,
              og lager sikre passord. Lær å beskytte deg mot de vanligste truslene på internett.
            </p>
          </div>

          <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-xl">
            <p className="text-lg text-gray-700">
              <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {sikkerhetsGuider.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline">
              <div className="card hover:shadow-xl transition-all duration-200 hover:border-purple-600 h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.guideKey}.title`)}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tGuides(`${guide.guideKey}.difficulty`)}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{tGuides(`${guide.guideKey}.description`)}</p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tGuides(`${guide.guideKey}.time`)}
                  </span>
                  <span className="text-purple-600 font-semibold flex items-center gap-1">
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

        {/* FAQ seksjon */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om sikkerhet</h2>
          <div className="space-y-4">
            {sikkerhetFAQs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-purple-600 transform transition-transform group-open:rotate-180 flex-shrink-0"
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

        <div className="mt-12 card bg-red-50">
          <h2 className="text-2xl font-bold mb-4 text-red-800">{t('warningSignsTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              t('warningSigns.personalInfo'),
              t('warningSigns.urgent'),
              t('warningSigns.prize'),
              t('warningSigns.tooGood'),
              t('warningSigns.spelling'),
              t('warningSigns.strangeLinks'),
            ].map((sign, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-red-600 font-bold text-xl">!</span>
                <span>{sign}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Relaterte guider - internlenking */}
        <div className="mt-12 card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">📚 Relaterte guider</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/nav" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-semibold text-gray-800">NAV</p>
                <p className="text-sm text-gray-600">Logg inn trygt</p>
              </div>
            </Link>
            <Link href="/helse" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🏥</span>
              <div>
                <p className="font-semibold text-gray-800">Helsenorge</p>
                <p className="text-sm text-gray-600">Sikker innlogging</p>
              </div>
            </Link>
            <Link href="/bank" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🏦</span>
              <div>
                <p className="font-semibold text-gray-800">Bank</p>
                <p className="text-sm text-gray-600">Nettbank-sikkerhet</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-8 card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">{t('beenScammedTitle')}</h2>
          <p className="text-lg text-gray-700 mb-4">{t('beenScammedText')}</p>
          <ol className="space-y-3 text-lg">
            {[
              t('beenScammedSteps.bank'),
              t('beenScammedSteps.police'),
              t('beenScammedSteps.password'),
              t('beenScammedSteps.idTheft'),
            ].map((step, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{index + 1}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Sist oppdatert */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-nav-blue hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
