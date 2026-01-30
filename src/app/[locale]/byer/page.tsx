'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const byer = [
  {
    navn: "Oslo",
    slug: "oslo",
    emoji: "🏙️",
    innbyggere: "700 000+",
    beskrivelse: "Norges hovedstad med NAV-kontorer i alle bydeler",
    navKontorer: 15
  },
  {
    navn: "Bergen",
    slug: "bergen",
    emoji: "🏔️",
    innbyggere: "285 000+",
    beskrivelse: "Vestlandets hovedstad med fire NAV-kontorer",
    navKontorer: 4
  },
  {
    navn: "Trondheim",
    slug: "trondheim",
    emoji: "⛪",
    innbyggere: "210 000+",
    beskrivelse: "Teknologihovedstaden i Midt-Norge",
    navKontorer: 4
  },
  {
    navn: "Stavanger",
    slug: "stavanger",
    emoji: "🛢️",
    innbyggere: "145 000+",
    beskrivelse: "Oljehovedstaden med fem NAV-kontorer",
    navKontorer: 5
  },
  {
    navn: "Kristiansand",
    slug: "kristiansand",
    emoji: "⛵",
    innbyggere: "115 000+",
    beskrivelse: "Sørlandets hovedstad med sentralt NAV-kontor",
    navKontorer: 1
  }
];

export default function ByerPage() {
  const locale = useLocale();

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

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="text-blue-600 hover:underline mb-4 inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Tilbake til forsiden
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-xl">
              <span className="text-4xl">📍</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Offentlige tjenester i din by
              </h1>
              <p className="text-xl text-gray-600">Finn lokale NAV-kontorer, helsetjenester og mer</p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Velg din by for å finne <strong>lokale NAV-kontorer</strong>, legevakter,
              og andre offentlige tjenester med adresser, åpningstider og kontaktinformasjon.
            </p>
          </div>
        </div>

        {/* By-kort */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {byer.map((by) => (
            <Link key={by.slug} href={`/byer/${by.slug}`} className="no-underline">
              <div className="card hover:shadow-xl transition-all duration-200 hover:border-blue-500 h-full">
                <div className="text-center mb-4">
                  <span className="text-5xl">{by.emoji}</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">{by.navn}</h2>
                <p className="text-gray-500 text-center text-sm mb-3">{by.innbyggere} innbyggere</p>
                <p className="text-gray-600 text-center mb-4">{by.beskrivelse}</p>
                <div className="flex justify-center">
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                    {by.navKontorer} NAV-kontor{by.navKontorer > 1 ? 'er' : ''}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Info-boks */}
        <div className="mt-12 card bg-blue-50">
          <h2 className="text-xl font-bold mb-4">💡 Visste du?</h2>
          <p className="text-gray-700">
            De fleste NAV-tjenester kan du bruke <strong>digitalt på nav.no</strong> uansett hvor du bor.
            Du kan sende meldekort, søke dagpenger, sjekke utbetalinger og ha dialog med NAV - alt fra mobilen eller PC-en.
          </p>
          <div className="mt-4">
            <Link href="/nav" className="text-blue-600 hover:underline font-semibold">
              Se alle NAV-guider →
            </Link>
          </div>
        </div>

        {/* Andre tjenester */}
        <div className="mt-8 card bg-gray-50">
          <h2 className="text-xl font-bold mb-4">🔗 Nasjonale digitale tjenester</h2>
          <p className="text-gray-700 mb-4">
            Disse tjenestene fungerer likt uansett hvor du bor:
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/nav" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🏢</span>
              <p className="font-semibold text-sm">NAV.no</p>
            </Link>
            <Link href="/skatt" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">💰</span>
              <p className="font-semibold text-sm">Skatteetaten</p>
            </Link>
            <Link href="/helse" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🏥</span>
              <p className="font-semibold text-sm">Helsenorge</p>
            </Link>
            <Link href="/sikkerhet/bankid" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🔐</span>
              <p className="font-semibold text-sm">BankID</p>
            </Link>
          </div>
        </div>

        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-blue-600 hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
