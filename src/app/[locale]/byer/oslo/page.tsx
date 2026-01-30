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

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {t('backToHome')}
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-xl">
              <span className="text-4xl">🏙️</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                {t('publicServicesIn', { city: 'Oslo' })}
              </h1>
              <p className="text-xl text-gray-600">{t('navAndServices')}</p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              {t('oslo.intro')}
            </p>
          </div>
        </div>

        {/* NAV-kontorer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏢</span> {t('navOfficesIn', { city: 'Oslo' })}
          </h2>

          <div className="card bg-blue-50 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📞</div>
              <div>
                <p className="font-bold text-lg">{t('navContactCenter')}</p>
                <p className="text-2xl font-bold text-blue-600">55 55 33 33</p>
                <p className="text-gray-600">{t('openWeekdays')}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {navKontorerOslo.map((kontor, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800">NAV {kontor.bydel}</h3>
                <p className="text-gray-600">{kontor.adresse}</p>
                <p className="text-gray-500 text-sm">{kontor.postnr}</p>
                <p className="text-sm text-blue-600 mt-2">{t('open')}: {t('weekdays')} 09:00-15:00</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/nav" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
              {t('seeAllNavGuides')} →
            </Link>
          </div>
        </section>

        {/* Skatteetaten */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💰</span> {t('taxOfficeIn', { city: 'Oslo' })}
          </h2>

          <div className="card">
            <h3 className="font-bold text-lg mb-2">{t('taxOffice')} Oslo</h3>
            <p className="text-gray-600 mb-2">{t('digitalServices')}</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('taxReturn')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('taxCard')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('movingNotice')}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> {t('nationalRegistry')}
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/skatt" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                {t('seeAllTaxGuides')} →
              </Link>
            </div>
          </div>
        </section>

        {/* Helsetjenester */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏥</span> {t('healthServicesIn', { city: 'Oslo' })}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-red-50 border-l-4 border-red-500">
              <h3 className="font-bold text-lg text-red-700">{t('emergencyRoomIn', { city: 'Oslo' })}</h3>
              <p className="text-gray-700">{t('oslo.emergencyAddress')}</p>
              <p className="text-2xl font-bold text-red-600 mt-2">📞 116 117</p>
              <p className="text-gray-600 text-sm">{t('open24h')}</p>
              <p className="text-red-600 text-sm mt-2">{t('lifeThreateningCall')}</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg">{t('helsenorge')}</h3>
              <p className="text-gray-600 mb-3">{t('digitalHealthServices')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {t('bookAppointment')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {t('viewPrescriptions')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {t('readJournal')}
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> {t('changeGP')}
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/helse" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                  {t('seeAllHealthGuides')} →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nyttige lenker */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span> {t('usefulLinksFor', { city: 'Oslo' })}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://www.oslo.kommune.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🏛️</span>
              <p className="font-semibold">{t('municipality', { city: 'Oslo' })}</p>
              <p className="text-sm text-gray-500">oslo.kommune.no</p>
            </a>
            <a href="https://ruter.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🚌</span>
              <p className="font-semibold">Ruter</p>
              <p className="text-sm text-gray-500">{t('publicTransport')}</p>
            </a>
            <a href="https://www.oslo.kommune.no/bolig-og-sosiale-tjenester/finn-ditt-nav-kontor/"
               target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🔍</span>
              <p className="font-semibold">{t('findNAVOffice')}</p>
              <p className="text-sm text-gray-500">{t('allDistricts')}</p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❓ {t('faqAbout', { city: 'Oslo' })}</h2>
          <div className="space-y-4">
            {osloFAQs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500 transform transition-transform group-open:rotate-180 flex-shrink-0"
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
        </section>

        {/* Andre byer */}
        <section className="card bg-gray-50">
          <h2 className="text-2xl font-bold mb-4">📍 {t('otherCities')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/byer/bergen" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🏔️</span>
              <p className="font-semibold">{t('bergen.name')}</p>
            </Link>
            <Link href="/byer/trondheim" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">⛪</span>
              <p className="font-semibold">{t('trondheim.name')}</p>
            </Link>
            <Link href="/byer/stavanger" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🛢️</span>
              <p className="font-semibold">{t('stavanger.name')}</p>
            </Link>
            <Link href="/byer/kristiansand" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">⛵</span>
              <p className="font-semibold">{t('kristiansand.name')}</p>
            </Link>
          </div>
        </section>

        {/* Sist oppdatert */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>{t('lastUpdated')}:</strong> Januar 2026 | <Link href="/om" className="text-blue-600 hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
