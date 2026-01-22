import { Link } from '@/i18n/navigation';

const utdanningGuider = [
  {
    title: 'Søke studielån',
    description: 'Lån og stipend fra Lånekassen til utdanning',
    href: '/utdanning/studielan',
    difficulty: 'Middels',
    time: '20 min',
  },
  {
    title: 'Søke stipend',
    description: 'Få deler av lånet omgjort til stipend',
    href: '/utdanning/stipend',
    difficulty: 'Enkel',
    time: '15 min',
  },
  {
    title: 'Tilbakebetaling',
    description: 'Betale tilbake studielån og søke om utsettelse',
    href: '/utdanning/tilbakebetaling',
    difficulty: 'Middels',
    time: '15 min',
  },
];

export default function UtdanningPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-indigo-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til forsiden
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-indigo-500 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Utdanning og Lånekassen</h1>
            <p className="text-xl text-gray-600">Studielån, stipend og tilbakebetaling</p>
          </div>
        </div>
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>Visste du?</strong> Lånekassen gir lån og stipend til de som tar utdanning. Deler av lånet kan bli omgjort til stipend hvis du fullfører utdanningen og ikke tjener for mye.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Velg hva du trenger hjelp med</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {utdanningGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-indigo-500 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
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
                <span className="text-indigo-600 font-semibold flex items-center gap-1">
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

      <div className="mt-12 card bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">Hvem kan få støtte?</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Studielån</p>
            <p className="text-gray-600">For deg som tar godkjent utdanning. Du må være registrert student og ha gyldig studierett.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Stipend</p>
            <p className="text-gray-600">Deler av lånet kan bli stipend hvis du fullfører utdanningen og ikke tjener over inntektsgrensen.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Betalingsutsettelse</p>
            <p className="text-gray-600">Har du problemer med å betale? Du kan søke om utsettelse eller rentefritak.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Nyttige lenker</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>lanekassen.no</strong> - Søk lån og stipend, sjekk saldo</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>samordnaopptak.no</strong> - Søk opptak til høyere utdanning</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>Lånekassen telefon:</strong> 55 55 44 00 (hverdager 09-15)</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
