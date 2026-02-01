'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const byer = [
  {
    navn: "Oslo",
    slug: "oslo",
    innbyggere: "700 000+",
    beskrivelse: "Norges hovedstad med NAV-kontorer i alle bydeler",
    navKontorer: 15
  },
  {
    navn: "Bergen",
    slug: "bergen",
    innbyggere: "285 000+",
    beskrivelse: "Vestlandets hovedstad med fire NAV-kontorer",
    navKontorer: 4
  },
  {
    navn: "Trondheim",
    slug: "trondheim",
    innbyggere: "210 000+",
    beskrivelse: "Teknologihovedstaden i Midt-Norge",
    navKontorer: 4
  },
  {
    navn: "Stavanger",
    slug: "stavanger",
    innbyggere: "145 000+",
    beskrivelse: "Oljehovedstaden med fem NAV-kontorer",
    navKontorer: 5
  },
  {
    navn: "Kristiansand",
    slug: "kristiansand",
    innbyggere: "115 000+",
    beskrivelse: "Sørlandets hovedstad med sentralt NAV-kontor",
    navKontorer: 1
  }
];

export default function ByerContent() {
  const locale = useLocale();
  const tCommon = useTranslations('common');

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Byer', url: `/${locale}/byer` }
      ]} />
      <ArticleSchema
        title="Offentlige tjenester i Norges største byer"
        description="Finn NAV-kontorer, Skatteetaten og helsetjenester i Oslo, Bergen, Trondheim, Stavanger og Kristiansand. Lokale adresser og åpningstider."
        url={`/${locale}/byer`}
        datePublished="2024-01-01"
        dateModified="2026-01-30"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                Offentlige tjenester i din by
              </h1>
              <p className="text-lg text-gray-600">Finn lokale NAV-kontorer, helsetjenester og mer</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              Velg din by for å finne <strong className="text-gray-900">lokale NAV-kontorer</strong>, legevakter,
              og andre offentlige tjenester med adresser, åpningstider og kontaktinformasjon.
            </p>
          </div>
        </div>

        {/* By-kort */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">Velg din by</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {byer.map((by) => (
            <Link key={by.slug} href={`/byer/${by.slug}`} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">{by.navn}</h3>
                <p className="text-gray-500 text-sm mb-2">{by.innbyggere} innbyggere</p>
                <p className="text-gray-600 text-sm mb-3">{by.beskrivelse}</p>
                <span className="inline-block bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full text-xs font-medium">
                  {by.navKontorer} NAV-kontor{by.navKontorer > 1 ? 'er' : ''}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Info-boks */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">Visste du?</h2>
          <p className="text-gray-700 mb-4">
            De fleste NAV-tjenester kan du bruke <strong className="text-gray-900">digitalt på nav.no</strong> uansett hvor du bor.
            Du kan sende meldekort, søke dagpenger, sjekke utbetalinger og ha dialog med NAV - alt fra mobilen eller PC-en.
          </p>
          <Link href="/nav" className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1">
            Se alle NAV-guider
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Andre tjenester */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Nasjonale digitale tjenester</h2>
          <p className="text-gray-600 mb-4">
            Disse tjenestene fungerer likt uansett hvor du bor:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/nav" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-nav-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors text-sm">NAV.no</p>
            </Link>
            <Link href="/skatt" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-skatt-green/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-skatt-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors text-sm">Skatteetaten</p>
            </Link>
            <Link href="/helse" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-helse-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-helse-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors text-sm">Helsenorge</p>
            </Link>
            <Link href="/sikkerhet/bankid" className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors text-sm">BankID</p>
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-400">
          {tCommon('lastUpdatedJan2026')}
        </p>
      </div>
    </>
  );
}
