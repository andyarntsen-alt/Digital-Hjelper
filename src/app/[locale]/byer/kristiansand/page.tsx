'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const kristiansandFAQs = [
  {
    question: "Hvor finner jeg NAV-kontor i Kristiansand?",
    answer: "NAV Kristiansand ligger sentralt i Gyldengården, Gyldenløves gate 23, ved Wergelandsparken i sentrum. Dette er hovedkontoret for hele Kristiansand kommune. NAV har ikke lenger kontorer på Tangvall og Nodeland."
  },
  {
    question: "Hva er åpningstidene for NAV Kristiansand?",
    answer: "NAV Kristiansand har drop-in åpent: Mandag og tirsdag kl. 11:30-14:30, onsdag kl. 10:00-12:00. Telefontid er hverdager kl. 09:00-15:00 på 55 55 33 33."
  },
  {
    question: "Hvor er legevakten i Kristiansand?",
    answer: "Kristiansand legevakt ligger på Sørlandet sykehus, Eg. Telefon: 116 117. Åpent hele døgnet. For livstruende situasjoner, ring 113."
  },
  {
    question: "Hvordan kommer jeg meg til NAV i Kristiansand?",
    answer: "NAV Kristiansand ligger sentralt ved Wergelandsparken, lett tilgjengelig med buss fra hele byen. Bruk AKT reiseplanlegger for å finne beste rute."
  },
  {
    question: "Kan jeg få hjelp på NAV uten timeavtale?",
    answer: "Ja, NAV Kristiansand har drop-in tider der du kan komme uten avtale. Mandag og tirsdag kl. 11:30-14:30, onsdag kl. 10:00-12:00. For andre tider, bestill time via nav.no eller ring 55 55 33 33."
  }
];

export default function KristiansandPage() {
  const locale = useLocale();

  return (
    <>
      <FAQSchema questions={kristiansandFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Byer', url: `/${locale}/byer` },
        { name: 'Kristiansand', url: `/${locale}/byer/kristiansand` }
      ]} />
      <ArticleSchema
        title="Offentlige tjenester i Kristiansand - NAV, Skatt, Helse"
        description="Finn NAV-kontor, Skatteetaten og helsetjenester i Kristiansand. Adresser, åpningstider og kontaktinformasjon for Sørlandets hovedstad."
        url={`/${locale}/byer/kristiansand`}
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
              <span className="text-4xl">⛵</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Offentlige tjenester i Kristiansand
              </h1>
              <p className="text-xl text-gray-600">NAV, Skatteetaten og helsetjenester</p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Kristiansand</strong> er Sørlandets hovedstad med over 115 000 innbyggere.
              Her finner du oversikt over NAV-kontoret, Skatteetaten og helsetjenester i Kristiansand.
              NAV Kristiansand ligger sentralt i byen ved Wergelandsparken.
            </p>
          </div>
        </div>

        {/* NAV-kontor */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏢</span> NAV-kontor i Kristiansand
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

          <div className="card hover:shadow-md transition-shadow">
            <h3 className="font-bold text-xl text-gray-800">NAV Kristiansand</h3>
            <p className="text-lg text-gray-600">Gyldengården, Gyldenløves gate 23</p>
            <p className="text-gray-500">Ved Wergelandsparken i sentrum</p>

            <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
              <p className="font-semibold text-gray-800">📅 Drop-in åpningstider:</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                <li>Mandag: 11:30 - 14:30</li>
                <li>Tirsdag: 11:30 - 14:30</li>
                <li>Onsdag: 10:00 - 12:00</li>
                <li>Torsdag-fredag: Kun med avtale</li>
              </ul>
            </div>

            <p className="text-sm text-gray-500 mt-4">
              ⚠️ NAV har ikke lenger kontorer på Tangvall og Nodeland
            </p>
          </div>

          <div className="mt-6">
            <Link href="/nav" className="text-blue-600 hover:underline font-semibold">
              Se alle NAV-guider →
            </Link>
          </div>
        </section>

        {/* Helsetjenester */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏥</span> Helsetjenester i Kristiansand
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-red-50 border-l-4 border-red-500">
              <h3 className="font-bold text-lg text-red-700">Kristiansand Legevakt</h3>
              <p className="text-gray-700">Sørlandet sykehus, Eg</p>
              <p className="text-gray-700">4604 Kristiansand</p>
              <p className="text-2xl font-bold text-red-600 mt-2">📞 116 117</p>
              <p className="text-gray-600 text-sm">Åpent 24 timer</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg">Sørlandet sykehus Kristiansand</h3>
              <p className="text-gray-600">Eg, 4604 Kristiansand</p>
              <p className="text-gray-600 mt-2">Regionssykehus for Agder</p>
              <div className="mt-4">
                <Link href="/helse" className="text-blue-600 hover:underline font-semibold">
                  Se alle Helse-guider →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Skatteetaten */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">💰</span> Skatteetaten i Kristiansand
          </h2>

          <div className="card">
            <p className="text-gray-600 mb-4">
              De fleste tjenester fra Skatteetaten er tilgjengelig digitalt på skatteetaten.no:
            </p>
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
            </ul>
            <div className="mt-4">
              <Link href="/skatt" className="text-blue-600 hover:underline font-semibold">
                Se alle Skatt-guider →
              </Link>
            </div>
          </div>
        </section>

        {/* Nyttige lenker */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span> Nyttige lenker for Kristiansand
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://www.kristiansand.kommune.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🏛️</span>
              <p className="font-semibold">Kristiansand kommune</p>
            </a>
            <a href="https://www.akt.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🚌</span>
              <p className="font-semibold">AKT</p>
              <p className="text-sm text-gray-500">Kollektivtransport</p>
            </a>
            <a href="https://www.nav.no/kontor/nav-kristiansand"
               target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🔍</span>
              <p className="font-semibold">NAV Kristiansand</p>
              <p className="text-sm text-gray-500">Offisiell side</p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om offentlige tjenester i Kristiansand</h2>
          <div className="space-y-4">
            {kristiansandFAQs.map((faq, index) => (
              <details key={index} className="card group">
                <summary className="cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 transform transition-transform group-open:rotate-180 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
            <Link href="/byer/oslo" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">🏙️</span>
              <p className="font-semibold">Oslo</p>
            </Link>
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
          </div>
        </section>

        <p className="mt-8 text-sm text-gray-500">
          <strong>Sist oppdatert:</strong> Januar 2026 | <Link href="/om" className="text-blue-600 hover:underline">Om LettDigital</Link>
        </p>
      </div>
    </>
  );
}
