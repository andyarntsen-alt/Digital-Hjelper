import { Link } from '@/i18n/navigation';

const sikkerhetsGuider = [
  {
    title: 'Unngå svindel',
    description: 'Lær å gjenkjenne svindelforsøk på telefon, SMS og e-post',
    href: '/sikkerhet/svindel',
    difficulty: 'Enkel',
    time: '10 min',
  },
  {
    title: 'Sikker bruk av BankID',
    description: 'Slik beskytter du BankID-en din mot misbruk',
    href: '/sikkerhet/bankid',
    difficulty: 'Enkel',
    time: '8 min',
  },
  {
    title: 'Unngå phishing',
    description: 'Gjenkjenn falske e-poster og nettsider som vil lure deg',
    href: '/sikkerhet/phishing',
    difficulty: 'Enkel',
    time: '10 min',
  },
  {
    title: 'Lage gode passord',
    description: 'Hvordan lage passord som er trygge og lette å huske',
    href: '/sikkerhet/passord',
    difficulty: 'Enkel',
    time: '8 min',
  },
];

export default function SikkerhetPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-purple-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Tilbake til forsiden
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-600 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">Digital sikkerhet</h1>
            <p className="text-xl text-gray-600">Beskytt deg mot svindel og trusler på nett</p>
          </div>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>Visste du?</strong> Hver dag blir nordmenn svindlet for millioner av kroner på nett.
            De fleste svindelforsøk er lette å avsløre hvis du vet hva du skal se etter.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">Velg hva du vil lære om</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sikkerhetsGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-purple-600 h-full">
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
                <span className="text-purple-600 font-semibold flex items-center gap-1">
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

      <div className="mt-12 card bg-red-50">
        <h2 className="text-2xl font-bold mb-4 text-red-800">Viktige varseltegn på svindel</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>De ber om personlig informasjon (passord, BankID, personnummer)</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>Det haster veldig og du må handle NÅ</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>Du har "vunnet" noe du ikke har deltatt i</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>Tilbud som virker for godt til å være sant</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>Skrivefeil og dårlig norsk i meldinger</span>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-red-600 font-bold text-xl">!</span>
            <span>Lenker som ser merkelige ut</span>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">Har du blitt svindlet?</h2>
        <p className="text-lg text-gray-700 mb-4">
          Hvis du tror du har blitt utsatt for svindel, gjør dette med en gang:
        </p>
        <ol className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
            <span>Ring banken din og sperre kort/konto</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
            <span>Anmeld til politiet på politiet.no</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
            <span>Endre passord på alle viktige kontoer</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
            <span>Kontakt ID-tyveri hjelpen på 21 05 32 00</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
