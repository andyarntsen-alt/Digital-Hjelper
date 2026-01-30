'use client';

import { Link } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const stavangerFAQs = [
  {
    question: "Hvor finner jeg NAV-kontor i Stavanger?",
    answer: "Stavanger har fem NAV-kontorer: NAV Hundvåg og Storhaug (Tinngata 8), NAV Eiganes og Tasta (Dusavikveien 37A), NAV Hillevåg, NAV Hinna og NAV Madla. Hvilket kontor du tilhører avhenger av bydelen din."
  },
  {
    question: "Hva er åpningstidene for NAV i Stavanger?",
    answer: "NAV i Stavanger har telefontid kl. 08:00-15:30 på hverdager. Drop-in åpningstider varierer mellom kontorene. Ring 55 55 33 33 for mer informasjon."
  },
  {
    question: "Hvor er legevakten i Stavanger?",
    answer: "Stavanger legevakt ligger i Armauer Hansens vei 30. Telefon: 116 117. Åpent hele døgnet. For livstruende situasjoner, ring 113."
  },
  {
    question: "Hvordan kommer jeg meg til NAV i Stavanger?",
    answer: "NAV-kontorene i Stavanger er tilgjengelige med buss fra Kolumbus. Bruk Kolumbus reiseplanlegger for å finne beste rute til ditt NAV-kontor."
  },
  {
    question: "Hvilke tjenester tilbyr NAV Stavanger?",
    answer: "NAV Stavanger tilbyr både statlige og kommunale tjenester: arbeidssøking, dagpenger, sykepenger, økonomisk sosialhjelp, gjeldsrådgivning og mer. De fleste tjenester kan også brukes digitalt på nav.no."
  }
];

const navKontorerStavanger = [
  { bydel: "Hundvåg og Storhaug", adresse: "Tinngata 8", postnr: "4014 Stavanger", info: "Sentral beliggenhet" },
  { bydel: "Eiganes og Tasta", adresse: "Dusavikveien 37A", postnr: "4007 Stavanger", info: "Nord i byen" },
  { bydel: "Hillevåg", adresse: "Hillevåg", postnr: "4016 Stavanger", info: "Sør i byen" },
  { bydel: "Hinna", adresse: "Hinna", postnr: "4020 Stavanger", info: "Øst i byen" },
  { bydel: "Madla", adresse: "Madla", postnr: "4042 Hafrsfjord", info: "Vest i byen" },
];

export default function StavangerPage() {
  const locale = useLocale();

  return (
    <>
      <FAQSchema questions={stavangerFAQs} />
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Byer', url: `/${locale}/byer` },
        { name: 'Stavanger', url: `/${locale}/byer/stavanger` }
      ]} />
      <ArticleSchema
        title="Offentlige tjenester i Stavanger - NAV, Skatt, Helse"
        description="Finn lokale NAV-kontorer, Skatteetaten og helsetjenester i Stavanger. Adresser, åpningstider og kontaktinformasjon."
        url={`/${locale}/byer/stavanger`}
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
              <span className="text-4xl">🛢️</span>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                Offentlige tjenester i Stavanger
              </h1>
              <p className="text-xl text-gray-600">NAV, Skatteetaten og helsetjenester</p>
            </div>
          </div>

          <div className="prose max-w-none mb-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Stavanger</strong> er Norges fjerde største by med over 145 000 innbyggere,
              kjent som oljehovedstaden. Her finner du oversikt over NAV-kontorer,
              Skatteetaten og helsetjenester i Stavanger-regionen.
            </p>
          </div>
        </div>

        {/* NAV-kontorer */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🏢</span> NAV-kontorer i Stavanger
          </h2>

          <div className="card bg-blue-50 mb-6">
            <div className="flex items-center gap-4">
              <div className="text-4xl">📞</div>
              <div>
                <p className="font-bold text-lg">NAV Kontaktsenter</p>
                <p className="text-2xl font-bold text-blue-600">55 55 33 33</p>
                <p className="text-gray-600">Åpent hverdager kl. 08:00-15:30</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {navKontorerStavanger.map((kontor, index) => (
              <div key={index} className="card hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-gray-800">NAV {kontor.bydel}</h3>
                <p className="text-gray-600">{kontor.adresse}</p>
                <p className="text-gray-500 text-sm">{kontor.postnr}</p>
                <p className="text-sm text-blue-600 mt-2">{kontor.info}</p>
              </div>
            ))}
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
            <span className="text-3xl">🏥</span> Helsetjenester i Stavanger
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card bg-red-50 border-l-4 border-red-500">
              <h3 className="font-bold text-lg text-red-700">Stavanger Legevakt</h3>
              <p className="text-gray-700">Armauer Hansens vei 30</p>
              <p className="text-gray-700">4011 Stavanger</p>
              <p className="text-2xl font-bold text-red-600 mt-2">📞 116 117</p>
              <p className="text-gray-600 text-sm">Åpent 24 timer</p>
            </div>

            <div className="card">
              <h3 className="font-bold text-lg">Stavanger universitetssjukehus</h3>
              <p className="text-gray-600">Gerd-Ragna Bloch Thorsens gate 8</p>
              <p className="text-gray-600 mt-2">Regionssykehus for Rogaland</p>
              <div className="mt-4">
                <Link href="/helse" className="text-blue-600 hover:underline font-semibold">
                  Se alle Helse-guider →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Nyttige lenker */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-3xl">🔗</span> Nyttige lenker for Stavanger
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="https://www.stavanger.kommune.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🏛️</span>
              <p className="font-semibold">Stavanger kommune</p>
            </a>
            <a href="https://www.kolumbus.no" target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🚌</span>
              <p className="font-semibold">Kolumbus</p>
              <p className="text-sm text-gray-500">Kollektivtransport</p>
            </a>
            <a href="https://www.nav.no/no/nav-og-samfunn/kontakt-nav/relatert-informasjon/finn-ditt-nav-kontor"
               target="_blank" rel="noopener noreferrer"
               className="card hover:shadow-md transition-shadow text-center">
              <span className="text-3xl mb-2 block">🔍</span>
              <p className="font-semibold">Finn NAV-kontor</p>
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">❓ Vanlige spørsmål om offentlige tjenester i Stavanger</h2>
          <div className="space-y-4">
            {stavangerFAQs.map((faq, index) => (
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
            <Link href="/byer/kristiansand" className="p-3 bg-white rounded-lg hover:shadow-md transition-shadow text-center">
              <span className="text-2xl">⛵</span>
              <p className="font-semibold">Kristiansand</p>
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
