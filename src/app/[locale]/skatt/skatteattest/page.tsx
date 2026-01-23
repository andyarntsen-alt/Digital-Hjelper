'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

const skatteattestSteps = [
  {
    title: 'Gå til skatteetaten.no',
    description: 'Åpne nettleseren din og skriv inn "skatteetaten.no" i adressefeltet.',
  },
  {
    title: 'Logg inn med BankID',
    description: 'Klikk på "Logg inn" øverst på siden. Velg BankID og følg instruksjonene.',
  },
  {
    title: 'Søk etter "Skatteattest"',
    description: 'Etter innlogging, bruk søkefeltet og skriv "skatteattest". Klikk på resultatet som heter "Bestill skatteattest" eller lignende.',
    tip: 'Du kan også finne dette under "Bestillinger" eller "Attester og bekreftelser".',
  },
  {
    title: 'Velg type skatteattest',
    description: 'Det finnes forskjellige typer skatteattester. Velg den som passer ditt formål: "Skatteattest for offentlige anskaffelser" er den vanligste.',
    warning: 'Sjekk med mottakeren hvilken type attest de trenger.',
  },
  {
    title: 'Fyll ut informasjon',
    description: 'Du kan bli bedt om å oppgi hva attesten skal brukes til. Fyll ut de nødvendige feltene.',
  },
  {
    title: 'Bestill attesten',
    description: 'Klikk på "Bestill" eller "Send bestilling". Attesten lages vanligvis med en gang.',
    tip: 'De fleste skatteattester kan lastes ned umiddelbart som PDF.',
  },
  {
    title: 'Last ned attesten',
    description: 'Når attesten er klar, klikk "Last ned" eller "Åpne". Lagre filen på datamaskinen din.',
    tip: 'Skatteattesten er gyldig i 6 måneder fra utstedelsesdato.',
  },
];

export default function SkatteattestPage() {
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = skatteattestSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
    <HowToSchema
      name="Bestille skatteattest"
      description="Lær hvordan du bestiller skatteattest på nett. Du får den med en gang, helt gratis."
      steps={howToSteps}
      totalTime="PT5M"
      locale={locale}
    />

    <div className="max-w-4xl mx-auto px-4 py-12">
      <Breadcrumbs
        items={[
          { label: tNav('skatt'), href: '/skatt' },
          { label: 'Bestille skatteattest' }
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
          <h1 className="text-4xl font-bold text-gray-800">Bestille skatteattest</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Lær hvordan du bestiller skatteattest på nett. Du får den med en gang, helt gratis.
        </p>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">📋 Hva er en skatteattest?</h2>
        <p className="text-gray-700 mb-4">
          En skatteattest er et dokument som viser at du eller bedriften din ikke skylder skatt eller avgifter til staten.
        </p>
        <p className="text-gray-700 font-medium">Du kan trenge skatteattest for å:</p>
        <ul className="space-y-2 text-gray-700 mt-2">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Levere anbud på offentlige oppdrag</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Søke om serveringsbevilling</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Dokumentere skatteforhold overfor bank eller andre</span>
          </li>
        </ul>
      </div>

      <StepGuide title="Slik bestiller du skatteattest" steps={skatteattestSteps} />

      <div className="mt-8 card bg-yellow-50">
        <h2 className="text-xl font-bold mb-4">⚠️ Viktig å vite</h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Gyldighetstid:</strong> Skatteattesten er gyldig i 6 måneder fra utstedelsesdato</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Gratis:</strong> Det koster ingenting å bestille skatteattest</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-600 font-bold">•</span>
            <span><strong>Skyldig skatt:</strong> Hvis du skylder skatt, får du ikke utstedt skatteattest før gjelden er betalt</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Jeg får ikke skatteattest fordi jeg skylder skatt</p>
            <p className="text-gray-600">Du må betale skattegjelden først. Logg inn på skatteetaten.no for å se hva du skylder og betale.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan jeg bestille skatteattest for min bedrift?</p>
            <p className="text-gray-600">Ja, men du må ha rettigheter i Altinn for bedriften. Logg inn med BankID og velg bedriften din.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hvordan sender jeg skatteattesten til noen?</p>
            <p className="text-gray-600">Last ned PDF-filen og send den som vedlegg i e-post, eller skriv den ut og lever fysisk.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
