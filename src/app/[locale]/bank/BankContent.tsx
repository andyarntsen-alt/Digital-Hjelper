'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

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

export default function BankContent() {
  const t = useTranslations('services.bank');
  const tGuides = useTranslations('guides.bank');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
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
            <div className="bg-orange-500 text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">Nettbank og digital bankbruk</strong> gjør hverdagen enklere.
            Her finner du guider som viser deg steg-for-steg hvordan du logger inn på nettbanken,
            betaler regninger, bruker Vipps, og setter opp AvtaleGiro.
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
          {bankGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">{tGuides(`${guide.key}.title`)}</h3>
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
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
                  <span className="text-orange-600 font-medium flex items-center gap-1">
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

        {/* Security tips */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('securityTipsTitle')}</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('securityTip1')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('securityTip2')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('securityTip3')}</span>
            </div>
            <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">{t('securityTip4')}</span>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Vanlige spørsmål om bank og nettbank</h2>
          <div className="space-y-3">
            {bankFAQs.map((faq, index) => (
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

        {/* Related guides */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">Relaterte guider</h2>
          <p className="text-gray-600 mb-6">
            Trenger du hjelp med sikkerhet og innlogging?
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
                <p className="text-sm text-gray-500">Innlogging og sikkerhet</p>
              </div>
            </Link>
            <Link href="/sikkerhet/svindel" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div>
                <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">Unnga svindel</p>
                <p className="text-sm text-gray-500">Beskytt deg mot svindlere</p>
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
                <p className="text-sm text-gray-500">Utbetalinger og ytelser</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Help */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{t('needHelpTitle')}</h2>
          <p className="text-gray-600 mb-4">{t('needHelpText')}</p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong className="text-gray-900">{t('helpPhone')}</strong> - {t('helpPhoneDesc')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span><strong className="text-gray-900">{t('helpVisit')}</strong> - {t('helpVisitDesc')}</span>
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
