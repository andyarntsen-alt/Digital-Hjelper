'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

// Oslo-spesifikk FAQ for SEO
const osloFAQs = [
  {
    question: "Hvor finner jeg NAV-kontor i Oslo?",
    answer: "Oslo har NAV-kontorer i alle bydeler. Du finner ditt lokale kontor basert på hvor du bor: NAV Gamle Oslo, NAV Grünerløkka, NAV Sagene, NAV St. Hanshaugen, NAV Frogner, NAV Ullern, NAV Vestre Aker, NAV Nordre Aker, NAV Bjerke, NAV Grorud, NAV Stovner, NAV Alna, NAV Østensjø, NAV Nordstrand og NAV Søndre Nordstrand."
  },
  {
    question: "Hva er åpningstidene for NAV i Oslo?",
    answer: "NAV-kontorene i Oslo har generelt åpent hverdager kl. 09:00-15:00. Drop-in er vanligvis kl. 10:00-14:30. Ring 55 55 33 33 for å sjekke åpningstider for ditt kontor, da noen kontorer kan ha avvikende tider."
  },
  {
    question: "Hvor er Skatteetaten i Oslo?",
    answer: "Skatteetaten har kontorer i Oslo sentrum. Du kan også bruke de digitale tjenestene på skatteetaten.no for de fleste oppgaver som skattemelding, skattekort og flyttemelding."
  },
  {
    question: "Hvor finner jeg legevakt i Oslo?",
    answer: "Oslo legevakt ligger i Storgata 40 (Sentrum). Åpent 24 timer. Telefon: 116 117. For livstruende situasjoner, ring 113. Det finnes også legevakter i flere bydeler."
  },
  {
    question: "Hvordan bestiller jeg time hos fastlege i Oslo?",
    answer: "Du bestiller time hos fastlegen din via Helsenorge.no. Logg inn med BankID, velg 'Timeavtaler', og finn din fastlege. Du kan også ringe legekontoret direkte. Mangler du fastlege? Søk om fastlege på Helsenorge.no."
  }
];

// NAV-kontorer i Oslo med adresser
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

  return (
    <>
      {/* SEO: Structured Data */}
      <FAQSchema questions={osloFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Byer', url: `/${locale}/byer` },
        { name: 'Oslo', url: `/${locale}/byer/oslo` }
      ]} />
      <ArticleSchema
        title="Offentlige tjenester i Oslo - NAV, Skatt, Helse"
        description="Finn lokale NAV-kontorer, Skatteetaten og helsetjenester i Oslo. Adresser, åpningstider og kontaktinformasjon for alle bydeler."
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
            Tilbake til forsiden
          </Link>

          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-600 text-white p-4 rounded-xl">
              <span className="text-4xl">🏙️</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Offentlige tjenester i Oslo
              </h1>
              <p className="text-xl text-gray-600">NAV, Skatteetaten og helsetjenester</p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Oslo</strong> er Norges hovedstad med over 700 000 innbyggere.
              Her finner du oversikt over alle offentlige tjenester i Oslo, inkludert
              NAV-kontorer i alle bydeler, Skatteetaten og helsetjenester.
              Bruk denne siden for å finne adresser, åpningstider og kontaktinformasjon.
            </p>
          </div>
        </div>

        {/* NAV-kontorer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏢</span> NAV-kontorer i Oslo
          </h2>

          <div className="card bg-blue-50 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📞</div>
              <div>
                <p className="font-bold text-lg">NAV Kontaktsenter</p>
                <p className="text-2xl font-bold text-blue-600">55 55 33 33</p>
                <p className="text-gray-600">Åpent hverdager kl. 09:00-15:00</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {navKontorerOslo.map((kontor, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800">NAV {kontor.bydel}</h3>
                <p className="text-gray-600">{kontor.adresse}</p>
                <p className="text-gray-500 text-sm">{kontor.postnr}</p>
                <p className="text-sm text-blue-600 mt-2">Åpent: hverdager 09:00-15:00</p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link href="/nav" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
              Se alle NAV-guider →
            </Link>
          </div>
        </section>

        {/* Skatteetaten */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💰</span> Skatteetaten i Oslo
          </h2>

          <div className="card">
            <h3 className="font-bold text-lg mb-2">Skatteetaten Oslo</h3>
            <p className="text-gray-600 mb-2">De fleste tjenester er tilgjengelig digitalt på skatteetaten.no</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Skattemelding og skatteoppgjør
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Skattekort og forskuddsskatt
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Flyttemelding
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span> Folkeregisteret
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/skatt" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                Se alle Skatt-guider →
              </Link>
            </div>
          </div>
        </section>

        {/* Helsetjenester */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏥</span> Helsetjenester i Oslo
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-red-50 border-l-4 border-red-500">
              <h3 className="font-bold text-lg text-red-700">Oslo Legevakt</h3>
              <p className="text-gray-700">Storgata 40, 0182 Oslo</p>
              <p className="text-2xl font-bold text-red-600 mt-2">📞 116 117</p>
              <p className="text-gray-600 text-sm">Åpent 24 timer</p>
              <p className="text-red-600 text-sm mt-2">Ved livstruende situasjoner: ring 113</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg">Helsenorge.no</h3>
              <p className="text-gray-600 mb-3">Digitale helsetjenester:</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Bestill time hos fastlege
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Se resepter og medisinliste
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Les journalen din
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-green-500">✓</span> Bytt fastlege
                </li>
              </ul>
              <div className="mt-4">
                <Link href="/helse" className="text-blue-600 hover:underline font-semibold flex items-center gap-2">
                  Se alle Helse-guider →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nyttige lenker */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span> Nyttige lenker for Oslo
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://www.oslo.kommune.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🏛️</span>
              <p className="font-semibold">Oslo kommune</p>
              <p className="text-sm text-gray-500">oslo.kommune.no</p>
            </a>
            <a href="https://ruter.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🚌</span>
              <p className="font-semibold">Ruter</p>
              <p className="text-sm text-gray-500">Kollektivtransport</p>
            </a>
            <a href="https://www.oslo.kommune.no/bolig-og-sosiale-tjenester/finn-ditt-nav-kontor/"
               target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🔍</span>
              <p className="font-semibold">Finn NAV-kontor</p>
              <p className="text-sm text-gray-500">Alle bydeler</p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om offentlige tjenester i Oslo</h2>
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
          <h2 className="text-2xl font-bold mb-4">📍 Andre byer</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/byer/bergen" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🏔️</span>
              <p className="font-semibold">Bergen</p>
            </Link>
            <Link href="/byer/trondheim" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">⛪</span>
              <p className="font-semibold">Trondheim</p>
            </Link>
            <Link href="/byer/stavanger" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🛢️</span>
              <p className="font-semibold">Stavanger</p>
            </Link>
            <Link href="/byer/kristiansand" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">⛵</span>
              <p className="font-semibold">Kristiansand</p>
            </Link>
          </div>
        </section>

        {/* Sist oppdatert */}
        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-blue-600 hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
