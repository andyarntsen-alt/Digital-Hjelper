import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';

const svindelSteps = [
  {
    title: 'Stopp opp og tenk',
    description: 'Svindlere prøver å stresse deg til å handle raskt. Ta deg tid. Ekte banker og myndigheter gir deg alltid tid til å tenke.',
    tip: 'Hvis noen sier "dette haster!" eller "du må handle NÅ!", er det nesten alltid svindel.',
  },
  {
    title: 'Sjekk hvem som kontakter deg',
    description: 'Se nøye på hvem som ringer eller sender meldingen. Svindlere kan forfalske telefonnumre og e-postadresser, men det er ofte små feil.',
    warning: 'Banken din vil ALDRI ringe og be om passord, BankID-kode eller personnummer!',
  },
  {
    title: 'Se etter skrivefeil',
    description: 'Ekte meldinger fra banker og myndigheter er alltid skrevet med korrekt norsk. Svindelmeldinger har ofte skrivefeil, rare formuleringer eller dårlig grammatikk.',
    tip: 'Les meldingen høyt. Høres det rart ut? Da er det trolig svindel.',
  },
  {
    title: 'Ikke klikk på lenker i meldinger',
    description: 'Svindlere sender ofte lenker som ser ekte ut, men som leder til falske nettsider. Gå heller direkte til bankens nettside ved å skrive adressen selv.',
    warning: 'Aldri logg inn via lenker i e-post eller SMS. Skriv alltid adressen selv i nettleseren.',
  },
  {
    title: 'Del aldri personlig informasjon',
    description: 'Passord, BankID-koder, personnummer og kortinformasjon skal du ALDRI dele med noen som kontakter deg. Ekte selskaper ber aldri om dette.',
  },
  {
    title: 'Ring tilbake på offisielt nummer',
    description: 'Hvis noen ringer og sier de er fra banken, legg på og ring bankens offisielle nummer. Finn nummeret på bankens nettside eller på baksiden av bankkortet.',
    tip: 'Ikke ring tilbake på nummeret som ringte deg - det kan også være forfalsket.',
  },
  {
    title: 'Snakk med noen du stoler på',
    description: 'Er du usikker? Snakk med familie, venner eller banken din før du gjør noe. Det er bedre å spørre én gang for mye enn å bli lurt.',
  },
];

export default function SvindelPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/sikkerhet" className="text-purple-600 hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Tilbake til Digital sikkerhet
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 10 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">Enkel</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Unngå svindel</h1>
        <p className="text-xl text-gray-600">
          Lær å gjenkjenne og unngå svindelforsøk på telefon, SMS og e-post.
        </p>
      </div>

      <div className="card bg-red-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">De vanligste svindeltypene</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Telefonsvindel</p>
            <p className="text-gray-600">Noen ringer og utgir seg for å være fra banken, politiet eller Microsoft. De vil ha tilgang til kontoen din.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">SMS-svindel</p>
            <p className="text-gray-600">"Din pakke venter" eller "Du har vunnet!" - meldinger med lenker som leder til falske nettsider.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">E-postsvindel (phishing)</p>
            <p className="text-gray-600">E-poster som ser ut som de kommer fra banken eller andre du stoler på, men som vil lure deg.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Kjærlighetssvindel</p>
            <p className="text-gray-600">Noen på nettet later som de er forelsket i deg, men vil egentlig bare ha pengene dine.</p>
          </div>
        </div>
      </div>

      <StepGuide title="Slik beskytter du deg mot svindel" steps={svindelSteps} />

      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4">Husk: Ekte avsendere vil ALDRI be deg om...</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Passord eller PIN-kode</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>BankID-kode på telefon</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Personnummer</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Å installere programmer på datamaskinen</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Å overføre penger til en "sikker konto"</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">Eksempler på ekte svindelmeldinger</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">SMS</p>
            <p className="italic">"Din pakke venter på levering. Betal 29 kr frakt her: [lenke]"</p>
            <p className="text-red-600 text-sm mt-2">Posten sender aldri SMS om betaling via lenker!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">Telefon</p>
            <p className="italic">"Hei, dette er fra bankens sikkerhetsavdeling. Vi har oppdaget mistenkelig aktivitet og må verifisere BankID-en din."</p>
            <p className="text-red-600 text-sm mt-2">Banken ringer ALDRI om BankID!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">E-post</p>
            <p className="italic">"Kjære kunde, din konto vil bli stengt hvis du ikke oppdaterer informasjonen din innen 24 timer."</p>
            <p className="text-red-600 text-sm mt-2">Ekte banker truer aldri med kontostengning via e-post!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
