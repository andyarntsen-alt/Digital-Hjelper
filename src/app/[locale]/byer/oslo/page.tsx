'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

// NAV-kontorer i Oslo med adresser (statisk data)
const navKontorerOslo = [
  { bydel: "Gamle Oslo", adresse: "Grønlandsleiret 25", postnr: "0190 Oslo" },
  { bydel: "Grünerløkka", adresse: "Trondheimsveien 2", postnr: "0560 Oslo" },
  { bydel: "Sagene", adresse: "Sandakerveien 99", postnr: "0483 Oslo" },
  { bydel: "Frogner", adresse: "Bygdøy allé 19", postnr: "0262 Oslo" },
  { bydel: "Bjerke", adresse: "Økernveien 94", postnr: "0579 Oslo" },
  { bydel: "Grorud", adresse: "Ammerudveien 22", postnr: "0958 Oslo" },
  { bydel: "Stovner", adresse: "Stovner senter 2", postnr: "0985 Oslo" },
  { bydel: "Søndre Nordstrand", adresse: "Holmlia senter", postnr: "1255 Oslo" },
];

export default function OsloPage() {
  const locale = useLocale();
  const t = useTranslations('cities');
  const tCommon = useTranslations('common');

  // FAQ for structured data
  const osloFAQs = [
    { question: t('oslo.faq1q'), answer: t('oslo.faq1a') },
    { question: t('oslo.faq2q'), answer: t('oslo.faq2a') },
    { question: t('oslo.faq3q'), answer: t('oslo.faq3a') },
    { question: t('oslo.faq4q'), answer: t('oslo.faq4a') },
    { question: t('oslo.faq5q'), answer: t('oslo.faq5a') },
  ];

  return (
    <>
      {/* SEO: Structured Data */}
      <FAQSchema questions={osloFAQs} />
      <BreadcrumbSchema items={[
        { name: locale === 'no' ? 'Hjem' : locale === 'en' ? 'Home' : 'Головна', url: `/${locale}` },
        { name: locale === 'no' ? 'Byer' : locale === 'en' ? 'Cities' : 'Міста', url: `/${locale}/byer` },
        { name: 'Oslo', url: `/${locale}/byer/oslo` }
      ]} />
      <ArticleSchema
        title={t('publicServicesIn', { city: 'Oslo' })}
        description={t('oslo.intro')}
        url={`/${locale}/byer/oslo`}
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
            <div className="bg-blue-600 text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {t('publicServicesIn', { city: 'Oslo' })}
              </h1>
              <p className="text-lg text-gray-600">{t('navAndServices')}</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              {t('oslo.intro')}
            </p>
          </div>
        </div>

        {/* NAV-kontorer */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('navOfficesIn', { city: 'Oslo' })}</h2>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-nav-blue text-white p-2 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="font-bold text-gray-900">{t('navContactCenter')}</p>
                <p className="text-xl font-bold text-nav-blue">55 55 33 33</p>
                <p className="text-gray-600 text-sm">{t('openWeekdays')}</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {navKontorerOslo.map((kontor, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <h3 className="font-bold text-gray-900">NAV {kontor.bydel}</h3>
                <p className="text-gray-600 text-sm">{kontor.adresse}</p>
                <p className="text-gray-500 text-sm">{kontor.postnr}</p>
                <p className="text-sm text-nav-blue mt-2">{t('open')}: {t('weekdays')} 09:00-15:00</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/nav" className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1">
              {t('seeAllNavGuides')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Skatteetaten */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('taxOfficeIn', { city: 'Oslo' })}</h2>

          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <h3 className="font-bold text-gray-900 mb-2">{t('taxOffice')} Oslo</h3>
            <p className="text-gray-600 mb-3">{t('digitalServices')}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('taxReturn')}
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('taxCard')}
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('movingNotice')}
              </li>
              <li className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {t('nationalRegistry')}
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/skatt" className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1">
                {t('seeAllTaxGuides')}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Helsetjenester */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('healthServicesIn', { city: 'Oslo' })}</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{t('emergencyRoomIn', { city: 'Oslo' })}</h3>
              <p className="text-gray-700 text-sm">{t('oslo.emergencyAddress')}</p>
              <p className="text-xl font-bold text-helse-red mt-2">116 117</p>
              <p className="text-gray-600 text-sm">{t('open24h')}</p>
              <p className="text-helse-red text-sm mt-2">{t('lifeThreateningCall')}</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{t('helsenorge')}</h3>
              <p className="text-gray-600 text-sm mb-3">{t('digitalHealthServices')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-helse-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('bookAppointment')}
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-helse-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('viewPrescriptions')}
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-helse-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('readJournal')}
                </li>
                <li className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-helse-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t('changeGP')}
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/helse" className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1 text-sm">
                  {t('seeAllHealthGuides')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nyttige lenker */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('usefulLinksFor', { city: 'Oslo' })}</h2>

          <div className="grid sm:grid-cols-3 gap-4">
            <a href="https://www.oslo.kommune.no" target="_blank" rel="noopener noreferrer"
               className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline text-center">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900">{t('municipality', { city: 'Oslo' })}</p>
              <p className="text-sm text-gray-500">oslo.kommune.no</p>
            </a>
            <a href="https://ruter.no" target="_blank" rel="noopener noreferrer"
               className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline text-center">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <p className="font-medium text-gray-900">Ruter</p>
              <p className="text-sm text-gray-500">{t('publicTransport')}</p>
            </a>
            <a href="https://www.oslo.kommune.no/bolig-og-sosiale-tjenester/finn-ditt-nav-kontor/"
               target="_blank" rel="noopener noreferrer"
               className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline text-center">
              <div className="w-10 h-10 bg-nav-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900">{t('findNAVOffice')}</p>
              <p className="text-sm text-gray-500">{t('allDistricts')}</p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('faqAbout', { city: 'Oslo' })}</h2>
          <div className="space-y-3">
            {osloFAQs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="cursor-pointer list-none flex justify-between items-center p-4">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
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
                <div className="px-4 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Andre byer */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{t('otherCities')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            <Link href="/byer/bergen" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 text-sm">{t('bergen.name')}</p>
            </Link>
            <Link href="/byer/trondheim" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 text-sm">{t('trondheim.name')}</p>
            </Link>
            <Link href="/byer/stavanger" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 text-sm">{t('stavanger.name')}</p>
            </Link>
            <Link href="/byer/kristiansand" className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 text-sm">{t('kristiansand.name')}</p>
            </Link>
          </div>
        </section>

        {/* Sist oppdatert */}
        <p className="mt-8 text-sm text-gray-400">
          Sist oppdatert: Januar 2026
        </p>
      </div>
    </>
  );
}
