'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

const bestilleTimeSteps = [
  {
    title: 'Gå til helsenorge.no',
    description: 'Åpne nettleseren din og skriv inn "helsenorge.no" i adressefeltet. Du kan også søke etter "Helsenorge" på Google.',
    tip: 'Helsenorge finnes også som app for mobil. Last ned "Helsenorge" fra App Store eller Google Play.',
  },
  {
    title: 'Logg inn med BankID',
    description: 'Klikk på "Logg inn" øverst til høyre. Velg BankID på mobil eller kodebrikke og følg instruksjonene.',
    warning: 'Første gang du logger inn kan det ta litt tid mens systemet henter informasjonen din.',
  },
  {
    title: 'Gå til "Timeavtaler"',
    description: 'Etter innlogging ser du forsiden med mange valg. Finn og klikk på "Timeavtaler" eller "Bestill time". Dette kan også finnes under en meny kalt "Tjenester".',
  },
  {
    title: 'Velg "Bestill ny time"',
    description: 'Klikk på knappen som sier "Bestill time" eller "Ny timebestilling". Du vil nå se en liste over helsetjenester du kan bestille time hos.',
    tip: 'Hvis fastlegen din ikke tilbyr nettbestilling, må du ringe legekontoret direkte.',
  },
  {
    title: 'Velg type time',
    description: 'Velg hva slags time du trenger. Dette kan være "Vanlig legetime", "Telefonkonsultasjon", "Videokonsultasjon", eller mer spesifikke alternativer som "Blodprøve" eller "Vaksine".',
    tip: 'Videokonsultasjon kan være et godt alternativ hvis du har vanskelig for å komme deg til legekontoret.',
  },
  {
    title: 'Beskriv kort hvorfor du trenger time',
    description: 'Du kan bli bedt om å skrive kort hva timen gjelder. Skriv med enkle ord, for eksempel "vondt i halsen" eller "fornyelse av resept". Dette hjelper legen å forberede seg.',
    warning: 'Ved akutt sykdom, ring heller legekontoret eller legevakten (116 117).',
  },
  {
    title: 'Velg dato og tid',
    description: 'Du ser nå en kalender med ledige timer. Grønne felt betyr at det er ledig. Klikk på en dag, og deretter på et klokkeslett som passer for deg.',
    tip: 'Morgen- og ettermiddagstimer går ofte raskest. Vær fleksibel hvis mulig.',
  },
  {
    title: 'Bekreft timebestillingen',
    description: 'Se over informasjonen: riktig dato, tid og type konsultasjon. Hvis alt er riktig, klikk på "Bekreft" eller "Bestill time".',
  },
  {
    title: 'Ferdig! Husk å møte opp',
    description: 'Du får bekreftelse på skjermen og vanligvis også på SMS. Husk å møte opp til avtalt tid! Hvis du må avbestille, gjør det minst 24 timer før.',
    warning: 'Hvis du ikke møter opp uten å avbestille, kan du bli belastet for timen.',
    tip: 'Legg timen inn i kalenderen din med en gang så du ikke glemmer den.',
  },
];

export default function BestilleTimePage() {
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = bestilleTimeSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      <HowToSchema
        name="Bestille time hos fastlegen"
        description="Lær hvordan du bestiller legetime på nett, uten å ringe. Det er enkelt og du kan gjøre det når som helst på døgnet."
        steps={howToSteps}
        totalTime="PT10M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('helse'), href: '/helse' },
          { label: 'Bestille time hos fastlegen' }
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Bestille time hos fastlegen</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Lær hvordan du bestiller legetime på nett, uten å ringe.
          Det er enkelt og du kan gjøre det når som helst på døgnet.
        </p>
      </div>

      {/* Fordeler */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">✅ Fordeler med å bestille på nett</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Åpent 24 timer i døgnet, 7 dager i uken</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Slipper å vente i telefonkø</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Du ser alle ledige timer og velger selv</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Du får bekreftelse med en gang</span>
          </li>
        </ul>
      </div>

      <StepGuide title="Slik bestiller du legetime på nett" steps={bestilleTimeSteps} />

      {/* Hva gjør jeg hvis... */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Hva gjør jeg hvis...</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">...det ikke er ledige timer?</p>
            <p className="text-gray-600">Ring legekontoret direkte. De kan ofte finne løsninger for akutte behov.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">...fastlegen min ikke har nettbestilling?</p>
            <p className="text-gray-600">Noen legekontor har ikke aktivert nettbestilling. Da må du ringe for å bestille time.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">...jeg må avbestille timen?</p>
            <p className="text-gray-600">Logg inn på Helsenorge, gå til "Mine timeavtaler" og klikk "Avbestill". Gjør dette minst 24 timer før timen.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">...jeg er akutt syk?</p>
            <p className="text-gray-600">Ring legekontoret eller legevakten på 116 117. Bruk ikke nettbestilling ved akutt sykdom.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
