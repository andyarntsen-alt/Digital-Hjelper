'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

// FAQ for SEO
const bankFAQs = [
  {
    question: "Hvordan logger jeg inn på nettbanken?",
    answer: "Du logger inn på nettbanken med BankID. Gå til bankens nettside, klikk på 'Logg inn', og velg BankID på mobil eller BankID med kodebrikke. Med BankID på mobil får du en melding på telefonen som du godkjenner. Med kodebrikke taster du inn engangskoden som vises."
  },
  {
    question: "Hvordan betaler jeg regninger i nettbanken?",
    answer: "Logg inn på nettbanken, velg 'Betal' eller 'Overføringer'. Skriv inn kontonummer (eller bruk KID-nummer fra fakturaen), beløp og forfallsdato. Dobbeltsjekk informasjonen og trykk 'Betal'. Du kan også sette opp faste betalinger for regninger som kommer hver måned."
  },
  {
    question: "Hva er Vipps og hvordan fungerer det?",
    answer: "Vipps er en norsk betalingsapp som lar deg sende og motta penger enkelt via mobilnummeret. Last ned Vipps fra App Store eller Google Play, koble til bankkontoen din via BankID, og du kan betale i butikker, sende penger til venner, og betale regninger."
  },
  {
    question: "Hvordan setter jeg opp AvtaleGiro?",
    answer: "AvtaleGiro er en avtale om automatisk betaling av faste regninger. Logg inn på nettbanken, finn 'AvtaleGiro' under betalinger, og søk opp leverandøren (f.eks. strøm eller telefon). Godkjenn avtalen, så trekkes beløpet automatisk fra kontoen din på forfallsdato."
  },
  {
    question: "Hva gjør jeg hvis jeg har mistet bankkortet?",
    answer: "Hvis du har mistet bankkortet, sperr det umiddelbart! Ring bankens sperretelefon (DNB: 915 04800, Nordea: 915 04750, SpareBank 1: 915 04750) eller logg inn på nettbanken og sperr kortet der. Bestill deretter et nytt kort via nettbanken eller kontakt banken."
  },
  {
    question: "Hva er forskjellen på debetkort og kredittkort?",
    answer: "Med debetkort trekkes pengene direkte fra bankkontoen din når du betaler. Med kredittkort låner du penger fra banken og får en regning i etterkant. Debetkort er tryggere fordi du ikke kan bruke mer enn du har. Kredittkort kan gi reiseforsikring og bonuspoeng, men pass på renten hvis du ikke betaler hele beløpet."
  }
];

const bankGuideKeys = [
  { key: 'nettbank', href: '/bank/nettbank', difficulty: 'easy', time: 15 },
  { key: 'betaling', href: '/bank/betaling', difficulty: 'easy', time: 10 },
  { key: 'vipps', href: '/bank/vipps', difficulty: 'easy', time: 10 },
  { key: 'gjeld', href: '/bank/gjeld', difficulty: 'easy', time: 8 },
];

export default function BankPage() {
  const t = useTranslations('services.bank');
  const tGuides = useTranslations('guides.bank');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      {/* SEO: Structured Data */}
      <FAQSchema questions={bankFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Bank', url: `/${locale}/bank` }
      ]} />
      <ArticleSchema
        title="Bank og Nettbank - Guider for trygg digital bankbruk"
        description="Lær hvordan du bruker nettbank, betaler regninger, setter opp Vipps og AvtaleGiro. Enkle steg-for-steg guider for trygg bankbruk på nett."
        url={`/${locale}/bank`}
        datePublished="2024-01-01"
        dateModified="2026-01-30"
        locale={locale}
      />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <Link href="/" className="text-orange-600 hover:underline mb-4 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-500 text-white p-4 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
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
              <strong>Nettbank og digital bankbruk</strong> gjør hverdagen enklere.
              Her finner du guider som viser deg steg-for-steg hvordan du logger inn på nettbanken,
              betaler regninger, bruker Vipps, og setter opp AvtaleGiro. Lær å bruke banktjenester
              trygt og effektivt fra din egen stue.
            </p>
          </div>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
            <p className="text-lg text-gray-700">
              <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bankGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline">
              <div className="card hover:shadow-xl transition-all duration-200 hover:border-orange-500 h-full">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.key}.title`)}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
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
                  <span className="text-orange-600 font-semibold flex items-center gap-1">
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
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om bank og nettbank</h2>
          <div className="space-y-4">
            {bankFAQs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-orange-500 transform transition-transform group-open:rotate-180 flex-shrink-0"
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
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <Link href="/sikkerhet/bankid" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🔐</span>
              <div>
                <p className="font-semibold text-gray-800">BankID</p>
                <p className="text-sm text-gray-600">Innlogging og sikkerhet</p>
              </div>
            </Link>
            <Link href="/sikkerhet/svindel" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🛡️</span>
              <div>
                <p className="font-semibold text-gray-800">Unngå svindel</p>
                <p className="text-sm text-gray-600">Beskytt deg mot svindlere</p>
              </div>
            </Link>
            <Link href="/nav" className="flex items-center gap-3 p-3 bg-white rounded-lg hover:shadow-md transition-shadow">
              <span className="text-2xl">🏢</span>
              <div>
                <p className="font-semibold text-gray-800">NAV</p>
                <p className="text-sm text-gray-600">Utbetalinger og ytelser</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-12 card bg-green-50">
          <h2 className="text-2xl font-bold mb-4">{t('securityTipsTitle')}</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('securityTip1')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('securityTip2')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('securityTip3')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{t('securityTip4')}</span>
            </li>
          </ul>
        </div>

        <div className="mt-8 card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">{t('needHelpTitle')}</h2>
          <p className="text-lg text-gray-700 mb-4">
            {t('needHelpText')}
          </p>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong>{t('helpPhone')}</strong> - {t('helpPhoneDesc')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong>{t('helpVisit')}</strong> - {t('helpVisitDesc')}</span>
            </li>
            <li className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              <span><strong>{t('helpVideo')}</strong> - {t('helpVideoDesc')}</span>
            </li>
          </ul>
        </div>

        {/* Sist oppdatert */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-orange-600 hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
