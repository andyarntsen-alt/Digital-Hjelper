'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { useTranslations } from 'next-intl';

const meldingSteps = [
  {
    title: 'Gå til helsenorge.no',
    description: 'Åpne nettleseren din og skriv inn "helsenorge.no" i adressefeltet.',
    tip: 'Du kan også bruke Helsenorge-appen på mobilen.',
  },
  {
    title: 'Logg inn med BankID',
    description: 'Klikk på "Logg inn" øverst til høyre. Velg BankID på mobil eller kodebrikke og følg instruksjonene.',
  },
  {
    title: 'Finn "Meldinger"',
    description: 'Etter innlogging, finn og klikk på "Meldinger" eller "Kontakt legen". Dette finner du ofte i hovedmenyen eller på forsiden.',
    tip: 'Noen kaller det "Digital dialog" eller "Skriv til legen".',
  },
  {
    title: 'Velg "Ny melding"',
    description: 'Klikk på "Ny melding" eller "Skriv melding". Du starter nå en ny samtale med legekontoret.',
  },
  {
    title: 'Velg mottaker',
    description: 'Velg hvem du vil sende til. Vanligvis er det fastlegen din. Du kan også velge legesekretær for praktiske spørsmål.',
    warning: 'Ikke alle legekontor tilbyr digital melding. Hvis du ikke finner legen din, må du ringe.',
  },
  {
    title: 'Velg type henvendelse',
    description: 'Du må ofte velge hva meldingen gjelder: "Reseptfornyelse", "Spørsmål om helse", "Praktisk spørsmål" eller lignende.',
    tip: 'Velg riktig type så meldingen kommer til rett person raskere.',
  },
  {
    title: 'Skriv meldingen din',
    description: 'Skriv kort og tydelig hva du lurer på eller trenger hjelp med. Beskriv symptomer eller spørsmål så godt du kan.',
    tip: 'Vær konkret. I stedet for "jeg føler meg dårlig", skriv "jeg har hatt vondt i hodet og feber i 3 dager".',
  },
  {
    title: 'Send meldingen',
    description: 'Når du er ferdig, klikk på "Send". Du får bekreftelse på at meldingen er sendt.',
    warning: 'Meldinger besvares vanligvis innen 1-3 virkedager. Ved akutt sykdom, ring legekontoret eller legevakten.',
  },
  {
    title: 'Vent på svar',
    description: 'Du får varsel på SMS eller e-post når legen har svart. Logg inn på Helsenorge igjen for å lese svaret.',
    tip: 'Sjekk at du har riktig telefonnummer og e-post registrert på Helsenorge.',
  },
];

export default function MeldingPage() {
  const tNav = useTranslations('header');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: tNav('helse'), href: '/helse' },
          { label: 'Sende melding til legen' }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 5 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">Enkel</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-800">Sende melding til legen</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Lær hvordan du kontakter fastlegen din digitalt. Slipper du å ringe og vente i kø.
        </p>
      </div>

      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">✅ Når bør du bruke digital melding?</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Be om fornyelse av resepter</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Stille spørsmål om prøvesvar</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Følge opp etter en konsultasjon</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Be om henvisning eller attest</span>
          </li>
        </ul>
      </div>

      <div className="card bg-red-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">⚠️ Når skal du IKKE bruke digital melding?</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Ved akutt sykdom eller skade - ring 113 eller legevakten 116 117</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Hvis du trenger svar raskt (innen samme dag)</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Kompliserte helseproblemer som krever undersøkelse</span>
          </li>
        </ul>
      </div>

      <StepGuide title="Slik sender du melding til legen" steps={meldingSteps} />

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hvor lang tid tar det å få svar?</p>
            <p className="text-gray-600">Vanligvis 1-3 virkedager. Ved ferieavvikling kan det ta lenger tid.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Er meldingene mine trygge?</p>
            <p className="text-gray-600">Ja, alt på Helsenorge er kryptert og sikkert. Bare du og legekontoret kan lese meldingene.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan jeg legge ved bilder?</p>
            <p className="text-gray-600">Ja, mange legekontor lar deg legge ved bilder. Dette kan være nyttig for å vise utslett eller sår.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
