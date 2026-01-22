import { Link } from '@/i18n/navigation';

const idGuider = [
  {
    title: 'Bestille pass',
    description: 'Slik bestiller du nytt eller fornyer passet ditt',
    href: '/id/pass',
    difficulty: 'Enkel',
    time: '15 min',
  },
  {
    title: 'Fornye førerkort',
    description: 'Slik fornyer eller bestiller du førerkort',
    href: '/id/forerkort',
    difficulty: 'Enkel',
    time: '15 min',
  },
  {
    title: 'Nasjonalt ID-kort',
    description: 'Bestill nasjonalt ID-kort med eller uten reiserett',
    href: '/id/id-kort',
    difficulty: 'Enkel',
    time: '15 min',
  },
];

export default function IDPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-cyan-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til forsiden
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-cyan-500 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">ID og dokumenter</h1>
            <p className="text-xl text-gray-600">Pass, førerkort og ID-kort</p>
          </div>
        </div>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>Visste du?</strong> Du trenger gyldig legitimasjon for mange ting i Norge - fra å logge inn på offentlige tjenester til å reise. Her hjelper vi deg med å bestille og fornye dokumentene dine.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Velg hva du trenger hjelp med</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {idGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-cyan-500 h-full">
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
                <span className="text-cyan-600 font-semibold flex items-center gap-1">
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
        <h2 className="text-2xl font-bold mb-4">Hvilken legitimasjon trenger jeg?</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Pass</p>
            <p className="text-gray-600">For reiser utenfor Norden. Gyldig i 10 år (5 år for barn). Kan også brukes som ID i Norge.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Førerkort</p>
            <p className="text-gray-600">For å kjøre bil. Gyldig som legitimasjon i Norge. Må fornyes hvert 15. år.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">Nasjonalt ID-kort</p>
            <p className="text-gray-600">Alternativ til pass. Med reiserett kan du reise i EØS. Praktisk størrelse for lommeboken.</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Nyttige lenker</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>politiet.no</strong> - Bestill time for pass og ID-kort</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>vegvesen.no</strong> - Bestill time for førerkort</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>Politiet:</strong> 02800 | <strong>Vegvesen:</strong> 22 07 30 00</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
