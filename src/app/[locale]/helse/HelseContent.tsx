'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const helseGuideKeys = [
  { key: 'bestilleTime', href: '/helse/bestille-time', difficulty: 'easy', time: 10 },
  { key: 'resepter', href: '/helse/resepter', difficulty: 'easy', time: 5 },
  { key: 'bytteFastlege', href: '/helse/bytte-fastlege', difficulty: 'medium', time: 10 },
  { key: 'journal', href: '/helse/journal', difficulty: 'easy', time: 5 },
  { key: 'melding', href: '/helse/melding', difficulty: 'easy', time: 5 },
];

const helseFAQs = [
  {
    question: "Hvordan logger jeg inn på Helsenorge?",
    answer: "Du logger inn på helsenorge.no med BankID, BankID på mobil, eller Commfides. Gå til helsenorge.no, klikk på 'Logg inn' øverst til høyre, og velg din innloggingsmetode. Første gang må du godkjenne brukervilkårene."
  },
  {
    question: "Hvordan bytter jeg fastlege?",
    answer: "Du bytter fastlege ved å logge inn på helsenorge.no. Gå til 'Fastlege' i menyen, klikk på 'Bytt fastlege', og søk etter ledige fastleger i din kommune. Du kan bytte inntil to ganger per kalenderår, og byttet trer i kraft fra den 1. i påfølgende måned."
  },
  {
    question: "Hvordan bestiller jeg legetime på Helsenorge?",
    answer: "Logg inn på helsenorge.no med BankID. Gå til 'Timeavtaler', velg 'Bestill time', og velg fastlegen din eller en ledig time hos annen lege. Du kan også bestille time til blodprøver og andre undersøkelser hvis legekontoret tilbyr dette."
  },
  {
    question: "Hvordan ser jeg mine resepter på Helsenorge?",
    answer: "Logg inn på helsenorge.no og gå til 'Resepter' i menyen. Der ser du alle dine aktive resepter, hvor mange uttak som gjenstår, og når resepten utløper. Du kan også se historikk over tidligere resepter."
  },
  {
    question: "Hvordan leser jeg journalen min på Helsenorge?",
    answer: "Logg inn på helsenorge.no og gå til 'Journaldokumenter'. Her finner du notater og dokumenter fra dine legebesøk, sykehusopphold og andre helsetjenester. Det kan ta noen dager før nye dokumenter blir synlige."
  },
  {
    question: "Hva er telefonnummeret til legevakten?",
    answer: "Legevakten har telefonnummer 116 117. Dette nummeret gjelder i hele Norge. Legevakten er for akutte helseproblemer som ikke kan vente til fastlegen åpner, men som ikke er livstruende. Ved livstruende situasjoner ring 113."
  }
];

export default function HelseContent() {
  const t = useTranslations('services.helse');
  const tGuides = useTranslations('guides.helse');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <FAQSchema questions={helseFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Helsenorge', url: `/${locale}/helse` }
      ]} />
      <ArticleSchema
        title="Helsenorge Guider - Komplett hjelp til helsetjenester på nett"
        description="Lær hvordan du logger inn på Helsenorge, bytter fastlege, bestiller legetime og ser reseptene dine. Enkle steg-for-steg guider."
        url={`/${locale}/helse`}
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
            <div className="bg-helse-red text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">Helsenorge</strong> er den offentlige helseportalen i Norge hvor du kan administrere din helse digitalt.
            Her finner du enkle guider som viser deg steg-for-steg hvordan du logger inn på Helsenorge,
            bytter fastlege, bestiller legetime, ser reseptene dine og leser journalen din.
          </p>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              <strong className="text-gray-900">{t('didYouKnow')}</strong> {t('emergencyNotice')}
            </p>
          </div>
        </div>

        {/* Guides grid */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('selectGuide')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {helseGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-helse-red transition-colors">{tGuides(`${guide.key}.title`)}</h3>
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
                  <span className="text-helse-red font-medium flex items-center gap-1">
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

        {/* What you can do */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('canDoTitle')}</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoBooking')}</p>
                <p className="text-gray-600 text-sm">{t('canDoBookingDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoPrescriptions')}</p>
                <p className="text-gray-600 text-sm">{t('canDoPrescriptionsDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoMessage')}</p>
                <p className="text-gray-600 text-sm">{t('canDoMessageDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoJournal')}</p>
                <p className="text-gray-600 text-sm">{t('canDoJournalDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoChangeGP')}</p>
                <p className="text-gray-600 text-sm">{t('canDoChangeGPDesc')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <div>
                <p className="font-medium text-gray-900">{t('canDoVaccines')}</p>
                <p className="text-gray-600 text-sm">{t('canDoVaccinesDesc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ section */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Vanlige spørsmål om Helsenorge</h2>
          <div className="space-y-3">
            {helseFAQs.map((faq, index) => (
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
            Trenger du hjelp med andre offentlige tjenester?
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
                <p className="text-sm text-gray-500">Dagpenger, sykepenger</p>
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

        {/* Emergency numbers */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{t('importantNumbers')}</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-3xl font-bold text-helse-red">{t('emergencyNumber')}</p>
              <p className="font-medium text-gray-900">{t('ambulance')}</p>
              <p className="text-gray-600 text-sm">{t('ambulanceDesc')}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-3xl font-bold text-helse-red">{t('legevaktNumber')}</p>
              <p className="font-medium text-gray-900">{t('legevakt')}</p>
              <p className="text-gray-600 text-sm">{t('legevaktDesc')}</p>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-3xl font-bold text-helse-red">{t('poisonControlNumber')}</p>
              <p className="font-medium text-gray-900">{t('poisonControl')}</p>
              <p className="text-gray-600 text-sm">{t('poisonControlDesc')}</p>
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
