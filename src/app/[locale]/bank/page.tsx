import { Link } from '@/i18n/navigation';

const bankGuider = [
  {
    title: 'Komme i gang med nettbank',
    description: 'En enkel guide til å logge inn og bruke nettbanken din',
    href: '/bank/nettbank',
    difficulty: 'Enkel',
    time: '15 min',
  },
  {
    title: 'Betale regninger',
    description: 'Hvordan betale regninger med nettbank eller Vipps',
    href: '/bank/betaling',
    difficulty: 'Enkel',
    time: '10 min',
  },
  {
    title: 'Bruke Vipps',
    description: 'Lær å sende penger, betale i butikk og dele regninger med Vipps',
    href: '/bank/vipps',
    difficulty: 'Enkel',
    time: '10 min',
  },
  {
    title: 'Få hjelp med gjeld',
    description: 'Informasjon om hvor du kan få hjelp hvis du sliter med gjeld',
    href: '/bank/gjeld',
    difficulty: 'Enkel',
    time: '8 min',
  },
];

export default function BankPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-orange-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til forsiden
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-orange-500 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Bank og økonomi</h1>
            <p className="text-xl text-gray-600">Lær å bruke nettbank og digitale betalingsløsninger</p>
          </div>
        </div>
        <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>Visste du?</strong> Over 90% av nordmenn bruker nettbank. Det er trygt og enkelt når du vet hvordan!
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Velg hva du trenger hjelp med</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {bankGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-orange-500 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {guide.difficulty}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{guide.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ca. {guide.time}
                </span>
                <span className="text-orange-600 font-semibold flex items-center gap-1">
                  Start guide
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 card bg-green-50">
        <h2 className="text-2xl font-bold mb-4">Tips for trygg nettbankbruk</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Logg alltid ut av nettbanken når du er ferdig</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Bruk aldri nettbank på offentlig WiFi (kafé, flyplass)</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Del aldri BankID-koder med noen - heller ikke banken!</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Sjekk kontoutskriften jevnlig for mistenkelige transaksjoner</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Trenger du hjelp?</h2>
        <p className="text-lg text-gray-700 mb-4">
          De fleste banker tilbyr hjelp for de som synes nettbank er vanskelig:
        </p>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>Ring kundeservice</strong> - de fleste banker har seniortelefon</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span><strong>Besøk banken</strong> - få hjelp ansikt til ansikt</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span><strong>Videohjelp</strong> - noen banker tilbyr videoveiledning</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
