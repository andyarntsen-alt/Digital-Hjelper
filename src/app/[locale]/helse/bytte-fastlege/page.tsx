'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

const bytteFastlegeSteps = [
  {
    title: 'Gå til helsenorge.no',
    description: 'Åpne nettleseren din og skriv inn "helsenorge.no" i adressefeltet. Du kan også søke etter "Helsenorge" på Google.',
    tip: 'Du kan også bruke Helsenorge-appen på mobilen din.',
  },
  {
    title: 'Logg inn med BankID',
    description: 'Klikk på "Logg inn" øverst til høyre. Velg BankID på mobil eller kodebrikke og følg instruksjonene.',
  },
  {
    title: 'Finn "Bytt fastlege"',
    description: 'Etter innlogging, finn menyen eller søk etter "Bytt fastlege". Du kan også gå til "Min helse" og deretter "Fastlege".',
    tip: 'På forsiden finnes ofte en snarvei til fastlegebyttet.',
  },
  {
    title: 'Se din nåværende fastlege',
    description: 'Du får se informasjon om hvem som er din fastlege nå. Sjekk at informasjonen stemmer.',
  },
  {
    title: 'Søk etter ny fastlege',
    description: 'Klikk på "Bytt fastlege" eller "Finn ny fastlege". Du kan søke på navn, sted eller postnummer. Du ser en liste over leger som har ledige plasser.',
    warning: 'Leger med fullt antall pasienter vises ikke som tilgjengelige. Du kan sette deg på venteliste hos noen.',
  },
  {
    title: 'Velg ny fastlege',
    description: 'Klikk på legen du ønsker. Du får se mer informasjon som adresse, åpningstider og om de tilbyr videokonsultasjon.',
    tip: 'Les om legens praksis og se om det passer dine behov.',
  },
  {
    title: 'Bekreft byttet',
    description: 'Når du har valgt en lege, klikk på "Velg denne legen" eller "Bekreft bytte". Du må bekrefte at du vil bytte.',
  },
  {
    title: 'Ferdig!',
    description: 'Byttet er registrert. Den nye fastlegen blir aktiv fra neste måned. Du får bekreftelse på skjermen og vanligvis også SMS.',
    warning: 'Du kan kun bytte fastlege to ganger per kalenderår, så tenk nøye før du bytter.',
  },
];

export default function BytteFastlegePage() {
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = bytteFastlegeSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      <HowToSchema
        name="Bytte fastlege"
        description="Lær hvordan du bytter til en ny fastlege på nett. Du trenger bare BankID og noen minutter."
        steps={howToSteps}
        totalTime="PT10M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: tNav('helse'), href: '/helse' },
          { label: 'Bytte fastlege' }
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
          <h1 className="text-4xl font-bold text-gray-800">Bytte fastlege</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Lær hvordan du bytter til en ny fastlege på nett. Du trenger bare BankID og noen minutter.
        </p>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">ℹ️ Viktig å vite</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Du kan bytte fastlege opptil 2 ganger per kalenderår</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Byttet trer i kraft fra 1. i neste måned</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Du kan velge hvilken som helst lege med ledig plass i hele Norge</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-blue-600 font-bold">•</span>
            <span>Journalen din overføres automatisk til den nye legen</span>
          </li>
        </ul>
      </div>

      <StepGuide title="Slik bytter du fastlege" steps={bytteFastlegeSteps} />

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hva om jeg ikke finner en lege med ledig plass?</p>
            <p className="text-gray-600">Du kan sette deg på venteliste hos leger som er fulle. Kommunen må sikre at du har en fastlege.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan jeg gå til gammel lege mens jeg venter?</p>
            <p className="text-gray-600">Ja, du kan fortsatt bruke din nåværende fastlege frem til byttet trer i kraft.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hva skjer med journalen min?</p>
            <p className="text-gray-600">Den nye fastlegen får tilgang til journalen din automatisk. Du trenger ikke gjøre noe.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
