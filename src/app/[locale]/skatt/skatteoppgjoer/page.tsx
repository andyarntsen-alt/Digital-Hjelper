import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';

const skatteoppgjoerSteps = [
  {
    title: 'Gå til skatteetaten.no',
    description: 'Åpne nettleseren din og skriv inn "skatteetaten.no" i adressefeltet.',
    tip: 'Du kan også søke etter "Skatteetaten" på Google.',
  },
  {
    title: 'Logg inn med BankID',
    description: 'Klikk på "Logg inn" øverst på siden. Velg BankID og følg instruksjonene.',
  },
  {
    title: 'Finn "Skatteoppgjør"',
    description: 'Etter innlogging, finn og klikk på "Skatteoppgjør" eller "Se skatteoppgjøret". Du finner dette ofte på forsiden etter innlogging.',
    tip: 'Skatteoppgjøret kommer vanligvis i juni-oktober, avhengig av når du leverte skattemeldingen.',
  },
  {
    title: 'Velg hvilket år',
    description: 'Hvis du vil se gamle skatteoppgjør, velg riktig år fra listen. Det nyeste vises vanligvis øverst.',
  },
  {
    title: 'Les skatteoppgjøret',
    description: 'Du ser nå en oversikt over skatten din. De viktigste tallene er: "Fastsatt skatt" (hva du skal betale totalt), "Innbetalt forskuddsskatt/skattetrekk" (hva du allerede har betalt), og "Restskatt/Til gode" (om du skylder eller får tilbake).',
    tip: 'Grønt beløp = penger til gode. Rødt beløp = restskatt du må betale.',
  },
  {
    title: 'Forstå resultatet',
    description: 'Hvis du har penger til gode, utbetales de automatisk til kontoen din. Hvis du har restskatt, får du informasjon om når og hvordan du betaler.',
    warning: 'Restskatt over 1000 kr deles i to terminer. Sjekk forfallsdatoene!',
  },
  {
    title: 'Last ned skatteoppgjøret',
    description: 'Du kan laste ned skatteoppgjøret som PDF ved å klikke "Last ned" eller "Skriv ut". Dette kan være nyttig for lånesøknader eller dokumentasjon.',
  },
];

export default function SkatteoppgjoerPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/skatt" className="text-skatt-green hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Tilbake til Skatteetaten-veiledninger
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 5 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">Enkel</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Se skatteoppgjøret ditt</h1>
        <p className="text-xl text-gray-600">
          Lær hvordan du finner og forstår skatteoppgjøret. Finn ut om du får penger tilbake eller må betale restskatt.
        </p>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">📅 Når kommer skatteoppgjøret?</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Leverte i mars:</strong> Skatteoppgjør i juni</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Leverte i april:</strong> Skatteoppgjør i august</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span><strong>Leverte senere:</strong> Skatteoppgjør i oktober-november</span>
          </li>
        </ul>
        <p className="mt-4 text-gray-600">Du får SMS eller e-post når skatteoppgjøret er klart.</p>
      </div>

      <StepGuide title="Slik finner du skatteoppgjøret" steps={skatteoppgjoerSteps} />

      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4">💰 Penger til gode?</h2>
        <p className="text-gray-700 mb-4">
          Hvis du har penger til gode, utbetales de automatisk til kontoen som er registrert hos Skatteetaten.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Utbetaling skjer vanligvis innen 3 uker</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Sjekk at kontonummeret ditt er oppdatert</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card bg-yellow-50">
        <h2 className="text-xl font-bold mb-4">💸 Restskatt?</h2>
        <p className="text-gray-700 mb-4">
          Hvis du har restskatt, må du betale innen forfallsdatoen for å unngå renter.
        </p>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Under 1000 kr:</strong> Betales i én termin</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Over 1000 kr:</strong> Deles i to terminer (vanligvis august og oktober)</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span>Du kan betale med nettbank - bruk KID-nummeret fra skatteoppgjøret</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Jeg tror skatteoppgjøret er feil</p>
            <p className="text-gray-600">Du kan klage på skatteoppgjøret innen 6 uker. Gå til "Klage på skatteoppgjøret" på skatteetaten.no.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan jeg endre kontonummer for utbetaling?</p>
            <p className="text-gray-600">Ja, logg inn på skatteetaten.no og oppdater kontonummeret ditt under "Min profil".</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Jeg har ikke råd til å betale restskatten</p>
            <p className="text-gray-600">Du kan søke om betalingsavtale hos Skatteetaten. Kontakt dem så snart som mulig.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
