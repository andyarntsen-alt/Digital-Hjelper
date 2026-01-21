'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface FAQItem {
  sporsmal: string;
  svar: string;
  kategori: string;
}

const faqListe: FAQItem[] = [
  // NAV
  {
    sporsmal: 'Hva gjør jeg hvis jeg har mistet jobben?',
    svar: 'Først må du registrere deg som arbeidssøker på nav.no. Deretter kan du søke om dagpenger hvis du oppfyller kravene. Du må ha tjent minst 186 042 kr siste år eller 372 084 kr siste 3 år. Se våre veiledninger for steg-for-steg hjelp.',
    kategori: 'NAV'
  },
  {
    sporsmal: 'Hvor lang tid tar det å få svar på NAV-søknad?',
    svar: 'Behandlingstiden varierer: Dagpenger tar vanligvis 3-4 uker. Sykepenger tar 2-4 uker. Foreldrepenger tar 4-6 uker. Du kan sjekke status på søknaden din under "Mine saker" på nav.no.',
    kategori: 'NAV'
  },
  {
    sporsmal: 'Hva skjer hvis jeg glemmer å sende meldekort?',
    svar: 'Da får du ikke utbetaling for den perioden. Du kan sende meldekort inntil 8 dager for sent, men får trekk i utbetalingen. Etter 8 dager mister du pengene for den perioden. Sett påminnelse i telefonen!',
    kategori: 'NAV'
  },
  {
    sporsmal: 'Kan jeg reise til utlandet mens jeg får dagpenger?',
    svar: 'Du kan ta ferie i opptil 4 uker per år, men du får ikke dagpenger for feriedagene. Du må søke NAV om godkjenning FØR du reiser, og du må fortsatt sende meldekort.',
    kategori: 'NAV'
  },
  {
    sporsmal: 'Hva er forskjellen på sykepenger og AAP?',
    svar: 'Sykepenger får du når du er midlertidig syk (opptil 1 år). AAP (arbeidsavklaringspenger) er for deg som fortsatt er syk etter sykepengene, og trenger hjelp til å komme tilbake i jobb eller avklare arbeidsevnen.',
    kategori: 'NAV'
  },

  // Skatteetaten
  {
    sporsmal: 'Når kommer skattemeldingen?',
    svar: 'Skattemeldingen blir vanligvis tilgjengelig i mars. Du får beskjed på SMS eller e-post. Fristen for å sjekke og levere endringer er 30. april.',
    kategori: 'Skatt'
  },
  {
    sporsmal: 'Hva gjør jeg hvis jeg har feil i skattemeldingen?',
    svar: 'Logg inn på skatteetaten.no, åpne skattemeldingen og klikk "Endre" ved posten du vil rette. Du kan endre så mange ganger du vil før fristen. Etter fristen kan du sende endringsmelding.',
    kategori: 'Skatt'
  },
  {
    sporsmal: 'Når får jeg skatteoppgjøret?',
    svar: 'De fleste får skatteoppgjøret i juni. Noen må vente til høsten. Du får beskjed når det er klart. Penger tilbake utbetales automatisk til kontoen din.',
    kategori: 'Skatt'
  },
  {
    sporsmal: 'Hva er forskjellen på skattekort og skattemelding?',
    svar: 'Skattekortet bestemmer hvor mye skatt som trekkes fra lønnen din GJENNOM ÅRET. Skattemeldingen er oppgjøret for det som ALLEREDE ER BETALT - den viser om du betalte for mye eller for lite.',
    kategori: 'Skatt'
  },
  {
    sporsmal: 'Hvilke fradrag glemmer folk oftest?',
    svar: 'De vanligste glemte fradragene er: Reiseutgifter til jobb (hvis over 37 km), renteutgifter på lån, fagforeningskontingent, gaver til frivillige organisasjoner, og foreldrefradrag for barnehage/SFO.',
    kategori: 'Skatt'
  },

  // Helsenorge
  {
    sporsmal: 'Hvordan bytter jeg fastlege?',
    svar: 'Logg inn på helsenorge.no, gå til "Fastlege" og velg "Bytt fastlege". Du kan søke på navn eller sted. Du kan bytte opptil 2 ganger per år. Byttet trer i kraft fra første dag i neste måned.',
    kategori: 'Helse'
  },
  {
    sporsmal: 'Hva gjør jeg hvis fastlegen min har full liste?',
    svar: 'Du kan sette deg på venteliste, velge en annen lege, eller kontakte kommunen din. Alle har rett på fastlege, og kommunen må hjelpe deg hvis det ikke er ledige plasser.',
    kategori: 'Helse'
  },
  {
    sporsmal: 'Kan legen nekte å fornye resepten min?',
    svar: 'Ja, hvis legen mener det er nødvendig med en ny vurdering først. Noen medisiner krever regelmessig oppfølging. Da må du bestille time for å få resepten fornyet.',
    kategori: 'Helse'
  },
  {
    sporsmal: 'Hva er frikortgrensen og hvordan fungerer det?',
    svar: 'Frikortgrensen er ca. 3 040 kr (2024). Når du har betalt dette i egenandeler (legetime, medisin osv.), får du automatisk frikort. Da slipper du egenandeler resten av året.',
    kategori: 'Helse'
  },
  {
    sporsmal: 'Kan jeg lese journalen min fra sykehus?',
    svar: 'Ja, de fleste sykehus sender journalen til Helsenorge. Noe dokumentasjon kan være forsinket eller sperret av legen. Du kan be om innsyn direkte fra sykehuset hvis du ikke finner det.',
    kategori: 'Helse'
  },

  // Digital/Innlogging
  {
    sporsmal: 'Jeg har ikke BankID - hva gjør jeg?',
    svar: 'Kontakt banken din for å få BankID. Du kan også bruke MinID for noen tjenester. Uten BankID/MinID kan du møte opp personlig på NAV-kontor eller bruke fullmakt via pårørende.',
    kategori: 'Digital'
  },
  {
    sporsmal: 'Hvorfor fungerer ikke BankID?',
    svar: 'Vanlige årsaker: Appen må oppdateres, du har skrevet feil kode 3 ganger (sperret), eller banken har sperret BankID-en. Prøv å oppdatere appen eller kontakt banken din.',
    kategori: 'Digital'
  },
  {
    sporsmal: 'Kan noen andre logge inn for meg?',
    svar: 'Du skal ALDRI dele BankID-koden din med andre. Hvis du trenger hjelp, kan pårørende få fullmakt. Kontakt den aktuelle etaten (NAV, Skatteetaten) for å ordne fullmakt.',
    kategori: 'Digital'
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null);
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');

  const kategorier = Array.from(new Set(faqListe.map(f => f.kategori)));

  const filtrerteFAQ = selectedKategori
    ? faqListe.filter(f => f.kategori === selectedKategori)
    : faqListe;

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">❓ {t('title')}</h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('subtitle')}
      </p>

      {/* Kategori-filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedKategori(null)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            selectedKategori === null
              ? 'bg-nav-blue text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t('categories.all')}
        </button>
        {kategorier.map(k => (
          <button
            key={k}
            onClick={() => setSelectedKategori(k)}
            className={`px-4 py-2 rounded-full font-medium transition-colors ${
              selectedKategori === k
                ? k === 'NAV' ? 'bg-nav-blue text-white'
                : k === 'Skatt' ? 'bg-skatt-green text-white'
                : k === 'Helse' ? 'bg-helse-red text-white'
                : 'bg-purple-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {k}
          </button>
        ))}
      </div>

      {/* FAQ-liste */}
      <div className="space-y-4">
        {filtrerteFAQ.map((faq, index) => {
          const globalIndex = faqListe.indexOf(faq);
          return (
            <div key={index} className="card">
              <button
                onClick={() => setActiveIndex(activeIndex === globalIndex ? null : globalIndex)}
                className="w-full flex items-start justify-between text-left"
                aria-expanded={activeIndex === globalIndex}
              >
                <div className="flex items-start gap-3 pr-4">
                  <span className={`px-2 py-0.5 rounded text-xs font-medium mt-1 ${
                    faq.kategori === 'NAV' ? 'bg-blue-100 text-nav-blue'
                    : faq.kategori === 'Skatt' ? 'bg-green-100 text-skatt-green'
                    : faq.kategori === 'Helse' ? 'bg-red-100 text-helse-red'
                    : 'bg-purple-100 text-purple-700'
                  }`}>
                    {faq.kategori}
                  </span>
                  <h2 className="text-lg font-semibold text-gray-800">{faq.sporsmal}</h2>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-400 transition-transform flex-shrink-0 ${
                    activeIndex === globalIndex ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeIndex === globalIndex && (
                <div className="mt-4 pl-16 pr-4">
                  <p className="text-gray-700 leading-relaxed">{faq.svar}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Fant du ikke svar? */}
      <div className="mt-12 card bg-blue-50">
        <h2 className="text-xl font-bold mb-4">{t('noAnswer')}</h2>
        <p className="text-gray-700 mb-4">
          {t('contactAgencies')}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-nav-blue">NAV</p>
            <p className="text-gray-600">55 55 33 33</p>
            <p className="text-gray-500 text-sm">{t('weekdays')} 09-15</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-skatt-green">Skatteetaten</p>
            <p className="text-gray-600">800 80 000</p>
            <p className="text-gray-500 text-sm">{t('weekdays')} 08-15:30</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-helse-red">Helsenorge</p>
            <p className="text-gray-600">23 32 70 00</p>
            <p className="text-gray-500 text-sm">{t('weekdays')} 08-15:30</p>
          </div>
        </div>
      </div>
    </div>
  );
}
