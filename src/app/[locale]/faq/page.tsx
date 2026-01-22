'use client';

import { useState, useMemo } from 'react';
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

  // Pensjon
  {
    sporsmal: 'Når kan jeg ta ut alderspensjon?',
    svar: 'Du kan ta ut alderspensjon fra du fyller 62 år, men jo tidligere du starter, jo lavere blir månedlig utbetaling. Venter du til 67 år eller lenger, får du mer per måned. Du kan sjekke din pensjon på nav.no/pensjon.',
    kategori: 'Pensjon'
  },
  {
    sporsmal: 'Kan jeg jobbe mens jeg får pensjon?',
    svar: 'Ja! Du kan jobbe så mye du vil uten at pensjonen reduseres. Fra 2011 ble reglene endret slik at arbeid og pensjon kan kombineres fritt. Du betaler fortsatt skatt av arbeidsinntekt.',
    kategori: 'Pensjon'
  },
  {
    sporsmal: 'Hva er AFP (avtalefestet pensjon)?',
    svar: 'AFP er en tilleggspensjon for deg som jobber i privat sektor med tariffavtale eller i offentlig sektor. Du må søke om AFP før du fyller 62 år. AFP gir et livsvarig tillegg til alderspensjonen.',
    kategori: 'Pensjon'
  },
  {
    sporsmal: 'Får jeg pensjon hvis jeg har jobbet lite?',
    svar: 'Alle som bor i Norge får garantipensjon (minstepensjon) fra 67 år, selv om du har jobbet lite eller ingenting. Størrelsen avhenger av hvor lenge du har bodd i Norge (krever minst 5 år). Full garantipensjon krever 40 års botid.',
    kategori: 'Pensjon'
  },
  {
    sporsmal: 'Hvordan søker jeg om alderspensjon?',
    svar: 'Logg inn på nav.no/pensjon med BankID. Velg "Søk pensjon" og følg stegene. Du bør søke 3-4 måneder før du vil starte uttaket. NAV hjelper deg også på telefon 55 55 33 34.',
    kategori: 'Pensjon'
  },
  {
    sporsmal: 'Hva skjer med pensjonen min hvis ektefellen dør?',
    svar: 'Du kan ha rett på gjenlevendepensjon hvis du var gift eller samboer med felles barn. Denne ytelsen er behovsprøvd. Kontakt NAV så snart som mulig etter dødsfallet for å sjekke dine rettigheter.',
    kategori: 'Pensjon'
  },

  // Sikkerhet
  {
    sporsmal: 'Hvordan vet jeg om en SMS fra NAV/banken er ekte?',
    svar: 'Ekte SMS fra NAV/bank ber ALDRI om passord, BankID eller kontonummer. De inneholder ikke lenker til innlogging. Er du usikker? Ikke klikk på lenken - logg inn direkte på nav.no eller bankens nettside i stedet.',
    kategori: 'Sikkerhet'
  },
  {
    sporsmal: 'Noen ringte og sa de var fra Microsoft - er det svindel?',
    svar: 'JA, dette er nesten alltid svindel! Microsoft ringer ALDRI uoppfordret. Hvis du ga tilgang til PC-en: Skru av PC-en, kontakt banken, og få hjelp til å sjekke PC-en for skadevare. Ring politiet på 02800.',
    kategori: 'Sikkerhet'
  },
  {
    sporsmal: 'Jeg tror jeg har blitt svindlet - hva gjør jeg?',
    svar: 'Handler RASKT: 1) Kontakt banken din umiddelbart for å sperre kort/konto. 2) Bytt passord på e-post og viktige tjenester. 3) Anmeld til politiet på nett eller ring 02800. 4) Kontakt ID-tyverihjelpen på 21 05 32 80.',
    kategori: 'Sikkerhet'
  },
  {
    sporsmal: 'Barnebarnet mitt ringer og trenger penger akutt - hva gjør jeg?',
    svar: 'STOPP! Dette kan være "oldebarnssvindel". Svindlere later som de er familie i nød. Sjekk ALLTID ved å ringe tilbake på nummeret du HAR fra før. Spør om noe bare dere vet. Ekte familie forstår at du må sjekke.',
    kategori: 'Sikkerhet'
  },
  {
    sporsmal: 'Er det trygt å handle på nett?',
    svar: 'Ja, hvis du følger noen regler: Se etter hengelås i adressefeltet. Bruk kjente butikker. Betal med kort eller Vipps (ikke bankoverføring). Virker prisen for god? Da er det ofte svindel. Sjekk anmeldelser på Trustpilot.',
    kategori: 'Sikkerhet'
  },
  {
    sporsmal: 'Hva er et trygt passord?',
    svar: 'Et godt passord er LANGT (minst 12 tegn) og unikt for hver tjeneste. Bruk gjerne en setning: "MinKattHeter3Ull!" er bedre enn "K@tt123". Skriv aldri passord i e-post eller SMS. Vurder en passordbok (på papir) eller passordbehandler.',
    kategori: 'Sikkerhet'
  },

  // Teknologi
  {
    sporsmal: 'Hvordan oppdaterer jeg telefonen min?',
    svar: 'iPhone: Innstillinger → Generelt → Programvareoppdatering. Android: Innstillinger → System → Programvareoppdatering. Koble til Wi-Fi og lader før du oppdaterer. Oppdateringer gir bedre sikkerhet!',
    kategori: 'Teknologi'
  },
  {
    sporsmal: 'Jeg har glemt passordet mitt - hva gjør jeg?',
    svar: 'De fleste nettsider har en "Glemt passord"-lenke på innloggingssiden. Klikk der og følg instruksjonene - du får vanligvis en e-post med lenke for å lage nytt passord. For BankID: Kontakt banken din.',
    kategori: 'Teknologi'
  },
  {
    sporsmal: 'Hva er forskjellen på Wi-Fi og mobildata?',
    svar: 'Wi-Fi er trådløst internett fra en ruter (hjemme, kafé, bibliotek) - ofte gratis og raskere. Mobildata bruker telefonabonnementet ditt og koster penger. Bruk Wi-Fi hjemme for å spare mobildata.',
    kategori: 'Teknologi'
  },
  {
    sporsmal: 'Hvordan tar jeg et skjermbilde på telefonen?',
    svar: 'iPhone: Trykk sideknappen + volum opp samtidig. Android: Trykk av/på-knappen + volum ned samtidig. Bildet lagres i bildegalleriet ditt. Nyttig for å vise feilmeldinger til noen som kan hjelpe!',
    kategori: 'Teknologi'
  },
  {
    sporsmal: 'Hvor kan jeg få hjelp med data og teknologi?',
    svar: 'Biblioteket ditt har ofte gratis datahjelp. Seniornett Norge (seniornett.no) har kurs og telefonstøtte. Frivillighetssentralen kan også hjelpe. Mange kommuner har også digital hjelpetjeneste for eldre.',
    kategori: 'Teknologi'
  },
  {
    sporsmal: 'Hva er en app og hvordan laster jeg ned apper?',
    svar: 'En app er et program på telefonen (f.eks. BankID, Vipps). For å laste ned: Åpne App Store (iPhone) eller Google Play (Android), søk etter appen og trykk "Hent" eller "Installer". Noen apper krever at du lager konto.',
    kategori: 'Teknologi'
  },
];

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');

  // Fast rekkefølge på kategorier
  const kategoriRekkefølge = ['NAV', 'Pensjon', 'Skatt', 'Helse', 'Digital', 'Sikkerhet', 'Teknologi'];
  const kategorier = kategoriRekkefølge.filter(k =>
    faqListe.some(f => f.kategori === k)
  );

  // Filtrer basert på søk
  const filtrerteFAQ = useMemo(() => {
    if (!searchQuery) return faqListe;
    const query = searchQuery.toLowerCase();
    return faqListe.filter(f =>
      f.sporsmal.toLowerCase().includes(query) ||
      f.svar.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // Grupper FAQ per kategori
  const gruppertPerKategori = useMemo(() => {
    return kategorier.reduce((acc, kategori) => {
      acc[kategori] = filtrerteFAQ.filter(f => f.kategori === kategori);
      return acc;
    }, {} as Record<string, FAQItem[]>);
  }, [filtrerteFAQ, kategorier]);

  const getKategoriFarge = (kategori: string) => {
    switch (kategori) {
      case 'NAV': return 'bg-nav-blue';
      case 'Skatt': return 'bg-skatt-green';
      case 'Helse': return 'bg-helse-red';
      case 'Digital': return 'bg-purple-600';
      case 'Pensjon': return 'bg-orange-500';
      case 'Sikkerhet': return 'bg-amber-600';
      case 'Teknologi': return 'bg-teal-600';
      default: return 'bg-gray-600';
    }
  };

  const getKategoriBadgeFarge = (kategori: string) => {
    switch (kategori) {
      case 'NAV': return 'bg-blue-100 text-nav-blue';
      case 'Skatt': return 'bg-green-100 text-skatt-green';
      case 'Helse': return 'bg-red-100 text-helse-red';
      case 'Digital': return 'bg-purple-100 text-purple-700';
      case 'Pensjon': return 'bg-orange-100 text-orange-700';
      case 'Sikkerhet': return 'bg-amber-100 text-amber-700';
      case 'Teknologi': return 'bg-teal-100 text-teal-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">❓ {t('title')}</h1>
      <p className="text-xl text-gray-600 mb-6">
        {t('subtitle')}
      </p>

      {/* Søkefelt */}
      <div className="card mb-6">
        <label htmlFor="faq-search" className="block text-sm font-medium text-gray-700 mb-1">
          Søk i spørsmål
        </label>
        <input
          id="faq-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Skriv for å søke... (f.eks. pensjon, passord, svindel)"
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-nav-blue focus:ring-2 focus:ring-blue-100 outline-none"
        />
      </div>

      {/* Sticky kategori-navigasjon */}
      <div className="sticky top-0 bg-white py-3 border-b border-gray-200 z-10 -mx-4 px-4 mb-6">
        <div className="flex flex-wrap gap-2 justify-center">
          {kategorier.map(kategori => {
            const antall = gruppertPerKategori[kategori]?.length || 0;
            if (antall === 0) return null;
            return (
              <a
                key={kategori}
                href={`#faq-${kategori}`}
                className={`px-4 py-2 rounded-full font-medium transition-colors hover:opacity-80 text-white ${getKategoriFarge(kategori)}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`faq-${kategori}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {kategori} ({antall})
              </a>
            );
          })}
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
          Klikk på en kategori for å hoppe dit ({filtrerteFAQ.length} spørsmål)
        </p>
      </div>

      {/* FAQ gruppert per kategori */}
      <div className="space-y-2">
        {kategorier.map(kategori => {
          const sporsmalIKategori = gruppertPerKategori[kategori];
          if (!sporsmalIKategori || sporsmalIKategori.length === 0) return null;

          return (
            <section key={kategori}>
              <h2
                id={`faq-${kategori}`}
                className="text-2xl font-bold text-gray-700 border-b-2 border-gray-200 py-3 mt-8 mb-4 scroll-mt-28 flex items-center gap-3"
              >
                <span className={`w-4 h-4 rounded-full ${getKategoriFarge(kategori)}`}></span>
                {kategori}
                <span className="text-gray-400 font-normal text-lg">({sporsmalIKategori.length})</span>
              </h2>
              <div className="space-y-3">
                {sporsmalIKategori.map((faq, index) => {
                  const globalIndex = faqListe.indexOf(faq);
                  return (
                    <div key={index} className="card">
                      <button
                        onClick={() => setActiveIndex(activeIndex === globalIndex ? null : globalIndex)}
                        className="w-full flex items-start justify-between text-left"
                        aria-expanded={activeIndex === globalIndex}
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.sporsmal}</h3>
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
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed">{faq.svar}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>

      {filtrerteFAQ.length === 0 && searchQuery && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">Ingen spørsmål funnet for &quot;{searchQuery}&quot;</p>
          <p className="text-gray-500 mt-2">Prøv et annet søkeord</p>
        </div>
      )}

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
