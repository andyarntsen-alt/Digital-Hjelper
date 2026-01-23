'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

const skattekortSteps = [
  {
    title: 'Logg inn på skatteetaten.no',
    description: 'Gå til skatteetaten.no og logg inn med BankID. Klikk på "Logg inn" øverst til høyre.',
  },
  {
    title: 'Finn "Skattekort"',
    description: 'Etter innlogging, se etter "Skattekort" i menyen eller på forsiden. Klikk for å se ditt nåværende skattekort.',
  },
  {
    title: 'Se nåværende skattekort',
    description: 'Du ser nå skattekortet ditt med tabellnummer og prosentsats. Tabellnummeret brukes av arbeidsgiveren din for å trekke riktig skatt.',
    tip: 'Tabellnummer 7100 er standard for de fleste. Lavere nummer = mindre skattetrekk.',
  },
  {
    title: 'Klikk "Endre skattekort"',
    description: 'Hvis du vil endre skattekortet, klikk på "Endre" eller "Bestill nytt skattekort".',
  },
  {
    title: 'Oppgi endringer i inntekt',
    description: 'Fyll inn hva du forventer å tjene i år. Hvis du har fått ny jobb, høyere lønn, eller mistet inntekt, oppdater dette.',
    tip: 'Vær så nøyaktig som mulig. For høyt anslag = for mye skatt. For lavt = restskatt.',
  },
  {
    title: 'Legg til fradrag du vet om',
    description: 'Hvis du vet at du vil ha store fradrag (boliglån, reiseutgifter), kan du legge dette inn nå for å redusere skattetrekket.',
    warning: 'Ikke overdriv fradragene - da risikerer du restskatt til neste år.',
  },
  {
    title: 'Se det nye skattetrekket',
    description: 'Kalkulatoren viser deg hva det nye skattetrekket blir. Sammenlign med dagens for å se endringen.',
  },
  {
    title: 'Bekreft endringen',
    description: 'Hvis du er fornøyd, klikk "Bestill" eller "Bekreft". Det nye skattekortet sendes automatisk til arbeidsgiveren din.',
    tip: 'Arbeidsgiveren får det nye skattekortet elektronisk innen noen dager.',
  },
];

export default function SkattekortPage() {
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = skattekortSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
    <HowToSchema
      name="Endre skattekort"
      description="Skattekortet bestemmer hvor mye skatt som trekkes fra lønnen din hver måned. Hvis livssituasjonen din endrer seg, bør du oppdatere det."
      steps={howToSteps}
      totalTime="PT15M"
      locale={locale}
    />

    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('skatt'), href: '/skatt' },
          { label: 'Endre skattekort' }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 15 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-sm">Middels</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Endre skattekort</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">
          Skattekortet bestemmer hvor mye skatt som trekkes fra lønnen din hver måned.
          Hvis livssituasjonen din endrer seg, bør du oppdatere det.
        </p>
      </div>

      {/* Hva er skattekort */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">💳 Hva er et skattekort?</h2>
        <p className="text-gray-700 mb-4">
          Skattekortet forteller arbeidsgiveren din hvor mye skatt som skal trekkes
          fra lønnen din. Det er basert på forventet inntekt og fradrag.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-skatt-green">Tabellnummer</p>
            <p className="text-gray-600 text-sm">Brukes for fast månedlig trekk. Vanligst for lønnsmottakere.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-skatt-green">Prosentkort</p>
            <p className="text-gray-600 text-sm">Fast prosent trekkes uansett beløp. Vanlig for bijobber.</p>
          </div>
        </div>
      </div>

      {/* Når bør du endre */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">🔄 Når bør du endre skattekort?</h2>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du har fått ny jobb med høyere eller lavere lønn</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du har begynt eller sluttet i bijobb</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du har tatt opp boliglån (store renteutgifter)</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du har blitt enslig forsørger eller fått samboer</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du har fått barn (foreldrefradrag)</span>
          </div>
          <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span>Du betaler for mye eller for lite skatt</span>
          </div>
        </div>
      </div>

      <StepGuide title="Slik endrer du skattekortet" steps={skattekortSteps} />

      {/* For mye/lite skatt */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="card border-l-4 border-green-500">
          <h3 className="text-lg font-bold mb-3">😊 Betaler du for mye skatt?</h3>
          <p className="text-gray-700 mb-3">
            Hvis du får mye penger tilbake på skatten hvert år, betaler du trolig for mye.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Løsning:</strong> Endre skattekortet for å få mer utbetalt hver måned i stedet
            for å vente på skatteoppgjøret.
          </p>
        </div>
        <div className="card border-l-4 border-red-500">
          <h3 className="text-lg font-bold mb-3">😟 Betaler du for lite skatt?</h3>
          <p className="text-gray-700 mb-3">
            Hvis du ofte får restskatt, bør du øke skattetrekket.
          </p>
          <p className="text-gray-600 text-sm">
            <strong>Løsning:</strong> Endre skattekortet for å trekke mer skatt hver måned
            og unngå store regninger i juni.
          </p>
        </div>
      </div>

      {/* Tips */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">Godt å vite!</p>
            <p className="text-green-700">
              Nytt skattekort for neste år kommer automatisk i desember. Du trenger ikke
              bestille det selv med mindre du vil gjøre endringer.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
