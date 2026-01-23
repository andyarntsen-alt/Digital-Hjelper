'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

const reseptSteps = [
  {
    title: 'Logg inn på helsenorge.no',
    description: 'Gå til helsenorge.no og logg inn med BankID. Du kan også bruke Helsenorge-appen på mobilen.',
    tip: 'Appen gir deg rask tilgang og påminnelser om reseptene dine.',
  },
  {
    title: 'Gå til "Mine resepter"',
    description: 'Etter innlogging, finn "Resepter" eller "Mine resepter" i menyen. Klikk for å se oversikten.',
  },
  {
    title: 'Se dine aktive resepter',
    description: 'Du ser nå alle reseptene dine. Hver resept viser medisinnavnet, styrke, dosering og hvor mange uttak som gjenstår.',
    tip: 'Grønn = aktiv resept. Rød/grå = utgått eller brukt opp.',
  },
  {
    title: 'Sjekk utløpsdato',
    description: 'Hver resept har en utløpsdato. Vanligvis er resepter gyldige i 1 år, men noen medisiner har kortere gyldighet.',
    warning: 'Utgåtte resepter må fornyes av legen før du kan hente ut medisinen.',
  },
  {
    title: 'For å fornye en resept',
    description: 'Hvis resepten snart går ut eller er tom, kan du be om fornyelse. Klikk på resepten og velg "Be om fornyelse" eller "Send melding til legen".',
  },
  {
    title: 'Skriv en kort melding til legen',
    description: 'Forklar kort hvorfor du trenger fornyelse. For eksempel: "Jeg trenger fornyet resept på blodtrykksmedisinen min. Tar den som før."',
    tip: 'Jo tydeligere du er, jo raskere kan legen behandle forespørselen.',
  },
  {
    title: 'Vent på svar fra legen',
    description: 'Legen vurderer om resepten kan fornyes uten konsultasjon. Du får beskjed via Helsenorge når resepten er klar.',
    warning: 'Noen medisiner krever legetime før fornyelse. Da må du bestille time.',
  },
  {
    title: 'Hent medisinen på apoteket',
    description: 'Når resepten er fornyet, kan du hente medisinen på hvilket som helst apotek. Oppgi navnet ditt og vis legitimasjon.',
    tip: 'Du kan også bestille hjemlevering fra flere apotek.',
  },
];

export default function ResepterPage() {
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = reseptSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      <HowToSchema
        name="Se og fornye resepter"
        description="På Helsenorge kan du se alle reseptene dine og be om fornyelse uten å ringe legen."
        steps={howToSteps}
        totalTime="PT5M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('helse'), href: '/helse' },
          { label: 'Se og fornye resepter' }
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
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Se og fornye resepter</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          På Helsenorge kan du se alle reseptene dine og be om fornyelse uten å ringe legen.
        </p>
      </div>

      {/* Hva ser du */}
      <div className="card bg-red-50 mb-8">
        <h2 className="text-xl font-bold mb-4">💊 Hva finner du på "Mine resepter"?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Medisinens navn</p>
            <p className="text-gray-600 text-sm">Virkestoff og eventuelt merkenavn</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Styrke og form</p>
            <p className="text-gray-600 text-sm">F.eks. "10 mg tabletter"</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Dosering</p>
            <p className="text-gray-600 text-sm">Hvor mye og når du skal ta medisinen</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Uttak igjen</p>
            <p className="text-gray-600 text-sm">Hvor mange ganger du kan hente ut</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Utløpsdato</p>
            <p className="text-gray-600 text-sm">Når resepten må fornyes</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Forskriver</p>
            <p className="text-gray-600 text-sm">Hvilken lege som skrev resepten</p>
          </div>
        </div>
      </div>

      <StepGuide title="Slik ser og fornyer du resepter" steps={reseptSteps} />

      {/* Typer resepter */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">📋 Ulike typer resepter</h2>
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
            <p className="font-semibold">Hvit resept (vanlig)</p>
            <p className="text-gray-600">De fleste medisiner. Du betaler full pris eller egenandel.</p>
          </div>
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="font-semibold">Blå resept</p>
            <p className="text-gray-600">For kroniske sykdommer. Staten dekker det meste, du betaler liten egenandel.</p>
          </div>
          <div className="p-4 bg-purple-50 rounded-lg border-l-4 border-purple-500">
            <p className="font-semibold">H-resept</p>
            <p className="text-gray-600">Spesielle medisiner som kun brukes på sykehus eller poliklinikk.</p>
          </div>
        </div>
      </div>

      {/* Vanlige spørsmål */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ Vanlige spørsmål</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan alle resepter fornyes uten legetime?</p>
            <p className="text-gray-600">Nei, noen medisiner (som sterke smertestillende eller sovemedisin) krever ny vurdering. Da må du bestille time.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hvor lang tid tar fornyelse?</p>
            <p className="text-gray-600">Vanligvis 1-3 virkedager, men det kan variere. Be om fornyelse i god tid før medisinen går tom!</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Kan jeg hente medisinen på et annet apotek?</p>
            <p className="text-gray-600">Ja! Reseptene dine ligger elektronisk og kan hentes på hvilket som helst apotek i Norge.</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold mb-1">Hva gjør jeg hvis resepten er utgått?</p>
            <p className="text-gray-600">Kontakt legen din for å få en ny resept. Bruk Helsenorge eller ring legekontoret.</p>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">Tips: Bruk legemiddelsøk!</p>
            <p className="text-green-700">
              På felleskatalogen.no kan du søke opp medisinen din og lese om bivirkninger,
              dosering og hva du bør vite.
            </p>
          </div>
        </div>
      </div>

      <RelatedGuides currentPath="/helse/resepter" category="helse" />
    </div>
    </>
  );
}
