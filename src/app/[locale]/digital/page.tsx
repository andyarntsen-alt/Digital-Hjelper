import { Link } from '@/i18n/navigation';

const digitalGuider = [
  {
    title: 'Sette opp e-post',
    description: 'Lær å opprette og bruke e-post på en enkel måte',
    href: '/digital/epost',
    difficulty: 'Enkel',
    time: '15 min',
  },
  {
    title: 'Bruke Digipost',
    description: 'Din digitale postkasse for brev fra det offentlige',
    href: '/digital/digipost',
    difficulty: 'Enkel',
    time: '10 min',
  },
  {
    title: 'Bruke Altinn',
    description: 'Sende skjemaer og dokumenter til det offentlige',
    href: '/digital/altinn',
    difficulty: 'Middels',
    time: '15 min',
  },
  {
    title: 'MinSide og offentlige tjenester',
    description: 'Finn og bruk ulike offentlige tjenester samlet',
    href: '/digital/minside',
    difficulty: 'Enkel',
    time: '10 min',
  },
];

export default function DigitalPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-teal-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til forsiden
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-teal-600 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Digitale verktøy</h1>
            <p className="text-xl text-gray-600">Lær å bruke e-post, digital postkasse og offentlige tjenester</p>
          </div>
        </div>
        <div className="bg-teal-50 border-l-4 border-teal-600 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>Visste du?</strong> Med digital postkasse får du viktige brev fra det offentlige raskere og sikrere enn med vanlig post.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Velg hva du vil lære</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {digitalGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-teal-600 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{guide.title}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  guide.difficulty === 'Enkel'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
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
                <span className="text-teal-600 font-semibold flex items-center gap-1">
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
        <h2 className="text-2xl font-bold mb-4">Viktige digitale tjenester i Norge</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-lg">Digipost / e-Boks</p>
            <p className="text-gray-600">Digital postkasse for brev fra banker, forsikring og det offentlige</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-lg">Altinn</p>
            <p className="text-gray-600">Send skjemaer og meldinger til det offentlige</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-lg">ID-porten</p>
            <p className="text-gray-600">Felles innlogging for alle offentlige nettsider</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-lg">MinID / BankID</p>
            <p className="text-gray-600">Digital identitet for å logge inn trygt</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card">
        <h2 className="text-2xl font-bold mb-4">Trenger du hjelp med det digitale?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Det finnes mange steder du kan få gratis hjelp:
        </p>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            <span><strong>Biblioteket</strong> - mange har kurs og drop-in hjelp</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span><strong>Seniornett</strong> - frivillige som hjelper eldre med data</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span><strong>NAV-kontoret</strong> - hjelper med offentlige digitale tjenester</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span><strong>Familie og venner</strong> - spør noen du kjenner om hjelp</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
