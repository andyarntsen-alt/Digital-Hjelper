'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { useTranslations } from 'next-intl';

const journalSteps = [
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
    title: 'Finn "Pasientjournal"',
    description: 'Etter innlogging, finn og klikk på "Pasientjournal" eller "Journal". Du finner dette ofte under "Min helse" eller i hovedmenyen.',
    tip: 'Søk etter "journal" hvis du ikke finner det med en gang.',
  },
  {
    title: 'Velg hvilken journal du vil se',
    description: 'Du kan ha journaler fra flere steder: fastlegen, sykehus, spesialister osv. Velg hvilken du vil lese.',
    warning: 'Ikke alle journaler er tilgjengelige digitalt ennå. Noen sykehus og klinikker har ikke koblet seg til.',
  },
  {
    title: 'Les journalen din',
    description: 'Du ser nå en liste over besøk og notater. Klikk på et besøk for å lese hva legen skrev. Du kan se diagnoser, behandlinger og vurderinger.',
    tip: 'Journalen bruker ofte medisinske uttrykk. Du kan søke opp ord du ikke forstår, eller spørre legen din.',
  },
  {
    title: 'Se prøvesvar',
    description: 'Under "Prøvesvar" eller "Laboratoriesvar" finner du resultater fra blodprøver og andre undersøkelser.',
    warning: 'Hvis du er bekymret for et prøvesvar, kontakt legen din for å få det forklart.',
  },
  {
    title: 'Last ned eller skriv ut',
    description: 'Du kan laste ned journalen som PDF eller skrive den ut hvis du trenger en kopi. Finn knappen "Last ned" eller "Skriv ut".',
    tip: 'Du kan trenge journalopplysninger hvis du skal til ny lege eller forsikringsselskap.',
  },
];

export default function JournalPage() {
  const tNav = useTranslations('header');

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: tNav('helse'), href: '/helse' },
          { label: 'Lese pasientjournalen din' }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 10 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">Enkel</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-800">Lese pasientjournalen din</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Lær hvordan du kan lese din egen helsejournal på nett. Du har rett til å se hva som er skrevet om deg.
        </p>
      </div>

      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">📋 Hva finner du i journalen?</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Notater fra legebesøk og konsultasjoner</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Diagnoser og sykdommer</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Resultater fra blodprøver og undersøkelser</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Resepter og medisiner</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Henvisninger og epikriser</span>
          </li>
        </ul>
      </div>

      <StepGuide title="Slik leser du journalen din" steps={journalSteps} />

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Jeg forstår ikke det som står i journalen</p>
            <p className="text-gray-600">Journaler er skrevet av helsepersonell og kan inneholde medisinske ord. Spør legen din om å forklare.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Noe er feil i journalen min</p>
            <p className="text-gray-600">Du kan be om retting av feil. Kontakt legekontoret eller sykehuset som har skrevet feil.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Jeg finner ikke journal fra sykehuset</p>
            <p className="text-gray-600">Ikke alle sykehus har koblet seg til Helsenorge ennå. Kontakt sykehuset direkte for å få kopi av journalen.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
