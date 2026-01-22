'use client';

import { useState } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface OrdDefinisjon {
  ord: string;
  forklaring: string;
  eksempel?: string;
  kategori: string;
}

const ordliste: OrdDefinisjon[] = [
  // NAV-ord
  { ord: 'Arbeidsavklaringspenger (AAP)', forklaring: 'Penger du kan få fra NAV hvis du ikke kan jobbe på grunn av sykdom eller skade, og trenger hjelp til å komme tilbake i jobb.', eksempel: 'Etter 1 år på sykepenger kan du søke AAP.', kategori: 'NAV' },
  { ord: 'Barnetrygd', forklaring: 'Penger alle foreldre får automatisk fra NAV for barn under 18 år.', eksempel: 'Barnetrygd utbetales den 10. hver måned.', kategori: 'NAV' },
  { ord: 'Dagpenger', forklaring: 'Penger du kan få fra NAV når du har mistet jobben eller er permittert.', eksempel: 'Dagpenger er ca. 62% av lønnen din.', kategori: 'NAV' },
  { ord: 'Fedrekvote', forklaring: 'Den delen av foreldrepermisjonen som er forbeholdt far eller medmor. Kan ikke overføres til mor.', eksempel: 'Fedrekvoten er 15 uker.', kategori: 'NAV' },
  { ord: 'Grunnbeløpet (G)', forklaring: 'Et beløp som brukes til å beregne mange ytelser fra NAV. Justeres hvert år.', eksempel: 'I 2024 er G ca. 118 620 kr.', kategori: 'NAV' },
  { ord: 'Kontantstøtte', forklaring: 'Støtte til foreldre som passer barn hjemme i stedet for å bruke barnehage.', eksempel: 'Du kan få kontantstøtte for barn mellom 1-2 år.', kategori: 'NAV' },
  { ord: 'Meldekort', forklaring: 'Et skjema du sender til NAV hver 14. dag for å rapportere om du har jobbet, vært syk eller søkt jobber.', eksempel: 'Send meldekort for å få utbetalt dagpenger.', kategori: 'NAV' },
  { ord: 'Mødrekvote', forklaring: 'Den delen av foreldrepermisjonen som er forbeholdt mor. Kan ikke overføres til far.', eksempel: 'Mødrekvoten er 15 uker.', kategori: 'NAV' },
  { ord: 'Permittert', forklaring: 'Midlertidig fritatt fra jobb fordi arbeidsgiveren ikke har arbeid til deg, men du er fortsatt ansatt.', eksempel: 'Mange ble permittert under koronapandemien.', kategori: 'NAV' },
  { ord: 'Sykepenger', forklaring: 'Penger som erstatter inntekten din når du er syk og ikke kan jobbe.', eksempel: 'Du kan få sykepenger i opptil 1 år.', kategori: 'NAV' },
  { ord: 'Uføretrygd', forklaring: 'Varig ytelse for deg som har nedsatt arbeidsevne på grunn av sykdom eller skade.', eksempel: 'Uføretrygd kan være hel eller delvis.', kategori: 'NAV' },
  { ord: 'Ytelse', forklaring: 'Penger eller tjenester du kan få fra NAV eller andre offentlige etater.', eksempel: 'Dagpenger er en ytelse fra NAV.', kategori: 'NAV' },

  // Skatt-ord
  { ord: 'Fradrag', forklaring: 'Utgifter som trekkes fra inntekten din før skatten beregnes. Reduserer skatten.', eksempel: 'Renteutgifter på boliglån er et vanlig fradrag.', kategori: 'Skatt' },
  { ord: 'Restskatt', forklaring: 'Skatt du må betale ekstra fordi du betalte for lite gjennom året.', eksempel: 'Restskatt over 1000 kr deles opp i to terminer.', kategori: 'Skatt' },
  { ord: 'Skattekort', forklaring: 'Et dokument som forteller arbeidsgiveren hvor mye skatt som skal trekkes fra lønnen din.', eksempel: 'Du får nytt skattekort i desember hvert år.', kategori: 'Skatt' },
  { ord: 'Skattemelding', forklaring: 'Oversikt over inntekter og fradrag du må levere til Skatteetaten hvert år. Tidligere kalt selvangivelse.', eksempel: 'Fristen for skattemeldingen er 30. april.', kategori: 'Skatt' },
  { ord: 'Skatteoppgjør', forklaring: 'Beregningen som viser om du får penger tilbake eller må betale restskatt.', eksempel: 'Skatteoppgjøret kommer vanligvis i juni.', kategori: 'Skatt' },
  { ord: 'Tabellnummer', forklaring: 'Koden på skattekortet som bestemmer hvor mye skatt som trekkes fra lønnen.', eksempel: 'Tabellnummer 7100 er standard for de fleste.', kategori: 'Skatt' },
  { ord: 'Forskuddsskatt', forklaring: 'Skatt som selvstendig næringsdrivende betaler på forskudd fire ganger i året.', eksempel: 'Forskuddsskatten forfaller 15. mars, juni, september og desember.', kategori: 'Skatt' },
  { ord: 'Formuesskatt', forklaring: 'Skatt på verdier du eier over et visst beløp (bolig, aksjer, bankinnskudd minus gjeld).', eksempel: 'Formuesskatt starter på formue over ca. 1,7 millioner kr.', kategori: 'Skatt' },

  // Helse-ord
  { ord: 'Blå resept', forklaring: 'Resept for medisiner til kroniske sykdommer der staten dekker det meste av kostnaden.', eksempel: 'Diabetesmedisin får du på blå resept.', kategori: 'Helse' },
  { ord: 'Egenandel', forklaring: 'Den delen av utgiften du må betale selv, for eksempel hos legen.', eksempel: 'Egenandelen hos fastlegen er ca. 160 kr.', kategori: 'Helse' },
  { ord: 'Epikrise', forklaring: 'Oppsummering som legen skriver etter at behandlingen er ferdig.', eksempel: 'Epikrisen sendes til fastlegen din.', kategori: 'Helse' },
  { ord: 'Fastlege', forklaring: 'Legen du er tildelt og som skal være din faste lege for vanlige helseproblemer.', eksempel: 'Du kan bytte fastlege opptil to ganger per år.', kategori: 'Helse' },
  { ord: 'Frikort', forklaring: 'Kort som gir deg gratis helsetjenester når du har betalt nok i egenandeler (frikortgrensen).', eksempel: 'Frikortgrensen er ca. 3 040 kr (2024).', kategori: 'Helse' },
  { ord: 'Henvisning', forklaring: 'Et brev fra fastlegen din som gir deg rett til behandling hos spesialist eller sykehus.', eksempel: 'Du trenger henvisning for å gå til spesialist.', kategori: 'Helse' },
  { ord: 'Hvit resept', forklaring: 'Vanlig resept der du betaler hele eller deler av kostnaden selv.', eksempel: 'Antibiotika får du ofte på hvit resept.', kategori: 'Helse' },
  { ord: 'Kjernejournal', forklaring: 'Digital oversikt over viktig helseinformasjon som deles mellom helsetjenester.', eksempel: 'Kjernejournalen viser legemidler og allergier.', kategori: 'Helse' },
  { ord: 'Legevakt', forklaring: 'Akutt legehjelp når fastlegen er stengt. Ring 116 117.', eksempel: 'Legevakten er åpen hele døgnet.', kategori: 'Helse' },
  { ord: 'Pasientjournal', forklaring: 'Dokumentasjon av all helsehjelp du har fått. Du har rett til å lese din egen journal.', eksempel: 'Du kan lese journalen din på Helsenorge.', kategori: 'Helse' },
  { ord: 'Sykemelding', forklaring: 'Dokument fra legen som bekrefter at du er syk og ikke kan jobbe.', eksempel: 'Legen sender sykemeldingen elektronisk til NAV.', kategori: 'Helse' },

  // Generelle digitale ord
  { ord: 'Altinn', forklaring: 'Nettsted der du kan sende inn skjemaer og dokumenter til det offentlige.', eksempel: 'Du finner skattemeldingen din på Altinn.', kategori: 'Digital' },
  { ord: 'App', forklaring: 'Et program du laster ned på telefonen din.', eksempel: 'Last ned NAV-appen fra App Store eller Google Play.', kategori: 'Digital' },
  { ord: 'BankID', forklaring: 'En digital identitet du bruker til å logge inn på nettsider og signere dokumenter. Du får BankID fra banken din.', eksempel: 'Logg inn med BankID på mobilen.', kategori: 'Digital' },
  { ord: 'Digipost/e-Boks', forklaring: 'Digital postkasse der du kan motta brev fra offentlige etater og bedrifter.', eksempel: 'Skatteoppgjøret kommer i Digipost.', kategori: 'Digital' },
  { ord: 'ID-porten', forklaring: 'Systemet som håndterer innlogging til offentlige nettsider som NAV, Skatteetaten og Helsenorge.', eksempel: 'ID-porten er felles for alle offentlige tjenester.', kategori: 'Digital' },
  { ord: 'MinID', forklaring: 'En enklere innloggingsløsning enn BankID, men gir ikke tilgang til alle tjenester.', eksempel: 'MinID fungerer ikke for skattemeldingen.', kategori: 'Digital' },
  { ord: 'Nettleser', forklaring: 'Program for å se på nettsider, som Google Chrome, Safari eller Edge.', eksempel: 'Åpne nettleseren for å gå til nav.no.', kategori: 'Digital' },

  // Bank-ord
  { ord: 'AvtaleGiro', forklaring: 'Automatisk betaling av faste regninger som strøm, forsikring og husleie.', eksempel: 'Med AvtaleGiro betales regningen automatisk på forfallsdato.', kategori: 'Bank' },
  { ord: 'eFaktura', forklaring: 'Digital faktura som kommer rett inn i nettbanken din, så du slipper å taste inn tall.', eksempel: 'Slå på eFaktura for å få regninger automatisk i nettbanken.', kategori: 'Bank' },
  { ord: 'Forfallsdato', forklaring: 'Siste dag en regning må betales uten ekstra gebyr.', eksempel: 'Forfallsdatoen står øverst på regningen.', kategori: 'Bank' },
  { ord: 'Inkasso', forklaring: 'Når et firma sender regningen din til et inkassoselskap fordi du ikke har betalt.', eksempel: 'Betal før inkasso for å unngå ekstra gebyrer og betalingsanmerkning.', kategori: 'Bank' },
  { ord: 'KID-nummer', forklaring: 'En tallrekke på regninger som identifiserer betalingen din. Viktig å taste riktig.', eksempel: 'KID-nummeret står på fakturaen, ofte 15-25 siffer.', kategori: 'Bank' },
  { ord: 'Nettbank', forklaring: 'Bankens tjeneste på internett der du kan betale regninger, se saldo og overføre penger.', eksempel: 'Du logger inn i nettbanken med BankID.', kategori: 'Bank' },
  { ord: 'Saldo', forklaring: 'Hvor mye penger du har på kontoen din akkurat nå.', eksempel: 'Sjekk saldoen i nettbanken før du betaler en stor regning.', kategori: 'Bank' },
  { ord: 'Vipps', forklaring: 'Norsk betalingsapp for å sende penger til venner, betale i butikker og dele regninger.', eksempel: 'Over 4 millioner nordmenn bruker Vipps.', kategori: 'Bank' },

  // Sikkerhet-ord
  { ord: 'Passordbehandler', forklaring: 'Et program som lagrer alle passordene dine trygt, så du bare trenger å huske ett hovedpassord.', eksempel: 'Bitwarden og 1Password er populære passordbehandlere.', kategori: 'Sikkerhet' },
  { ord: 'Phishing', forklaring: 'Svindelforsøk via falske e-poster eller meldinger som prøver å lure deg til å gi fra deg personlig informasjon.', eksempel: 'En e-post som later som den er fra banken kan være phishing. Klikk aldri på lenker du er usikker på.', kategori: 'Sikkerhet' },
  { ord: 'Svindel', forklaring: 'Når noen prøver å lure deg for penger eller personlig informasjon.', eksempel: 'Ring aldri tilbake til ukjente numre som ber om personlige opplysninger - det kan være svindel.', kategori: 'Sikkerhet' },
  { ord: 'To-faktor (2FA)', forklaring: 'Ekstra sikkerhet der du trenger både passord og en kode fra telefonen for å logge inn.', eksempel: 'Slå på to-faktor for ekstra beskyttelse av e-posten din.', kategori: 'Sikkerhet' },

  // Bolig-ord
  { ord: 'Bostøtte', forklaring: 'Økonomisk støtte fra Husbanken til å betale husleie eller boutgifter for de med lav inntekt.', eksempel: 'Bostøtte utbetales rundt den 10. hver måned.', kategori: 'Bolig' },
  { ord: 'Husbanken', forklaring: 'Statlig bank som gir lån og tilskudd til boliger, og forvalter bostøtteordningen.', eksempel: 'Søk bostøtte gjennom Husbanken på husbanken.no.', kategori: 'Bolig' },
  { ord: 'Kommunal bolig', forklaring: 'Bolig eid av kommunen som leies ut til de som har vanskelig for å skaffe bolig selv.', eksempel: 'Kommunal bolig har ofte lavere husleie enn private utleiere.', kategori: 'Bolig' },
  { ord: 'Startlån', forklaring: 'Lån fra kommunen til deg som ikke får vanlig boliglån i banken.', eksempel: 'Startlån kan hjelpe førstegangskjøpere som ikke har nok egenkapital.', kategori: 'Bolig' },

  // Utdanning-ord
  { ord: 'Lånekassen', forklaring: 'Statlig organ som gir studielån og stipend til utdanning i Norge og utlandet.', eksempel: 'Søk stipend og lån hos Lånekassen på lanekassen.no.', kategori: 'Utdanning' },
  { ord: 'Stipend', forklaring: 'Penger til utdanning som du ikke trenger å betale tilbake.', eksempel: 'Du kan få opptil 40% av støtten som stipend hvis du fullfører studiene.', kategori: 'Utdanning' },
  { ord: 'Studielån', forklaring: 'Lån fra Lånekassen til å dekke utgifter under utdanning. Må betales tilbake etter studiene.', eksempel: 'Tilbakebetalingen av studielånet starter vanligvis 7 måneder etter fullført utdanning.', kategori: 'Utdanning' },

  // ID-ord
  { ord: 'Folkeregisteret', forklaring: 'Offentlig register over alle som bor i Norge med adresse og personopplysninger.', eksempel: 'Meld flytting til Folkeregisteret innen 8 dager.', kategori: 'ID' },
  { ord: 'Nasjonalt ID-kort', forklaring: 'Norsk ID-kort med bilde som kan brukes som legitimasjon i Norge og til reiser i EU/EØS.', eksempel: 'Nasjonalt ID-kort er ikke gyldig reisedokument utenfor EU/EØS.', kategori: 'ID' },
  { ord: 'Pass', forklaring: 'Offisielt reisedokument som bekrefter identitet og norsk statsborgerskap.', eksempel: 'Du må ha gyldig pass for å reise utenfor Europa.', kategori: 'ID' },
  { ord: 'Personnummer', forklaring: 'De 11 sifrene som unikt identifiserer deg i Norge (fødselsdato + 5 siffer).', eksempel: 'Personnummeret brukes ved innlogging med BankID og hos legen.', kategori: 'ID' },
];

export default function OrdbokPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null);
  const t = useTranslations('ordbok');
  const tCommon = useTranslations('common');

  const kategorier = Array.from(new Set(ordliste.map(o => o.kategori)));

  const filtrerteOrd = ordliste.filter(ord => {
    const matcherSok = searchQuery === '' ||
      ord.ord.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ord.forklaring.toLowerCase().includes(searchQuery.toLowerCase());
    const matcherKategori = selectedKategori === null || ord.kategori === selectedKategori;
    return matcherSok && matcherKategori;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-4xl font-bold text-gray-800 mb-4">📖 {t('title')}</h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('subtitle')}
      </p>

      {/* Søk og filter */}
      <div className="card mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
              {t('searchLabel')}
            </label>
            <input
              id="search"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('searchPlaceholder')}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-nav-blue focus:ring-2 focus:ring-blue-100 outline-none"
            />
          </div>
          <div>
            <label htmlFor="kategori" className="block text-sm font-medium text-gray-700 mb-1">
              {t('category')}
            </label>
            <select
              id="kategori"
              value={selectedKategori || ''}
              onChange={(e) => setSelectedKategori(e.target.value || null)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-nav-blue focus:ring-2 focus:ring-blue-100 outline-none"
            >
              <option value="">{t('allCategories')}</option>
              {kategorier.map(k => (
                <option key={k} value={k}>{k}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Kategori-knapper */}
      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedKategori(null)}
          className={`px-4 py-2 rounded-full font-medium transition-colors ${
            selectedKategori === null
              ? 'bg-nav-blue text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t('all')} ({ordliste.length})
        </button>
        {kategorier.map(k => {
          const getKategoriFarge = (kategori: string, isSelected: boolean) => {
            if (!isSelected) return 'bg-gray-100 text-gray-700 hover:bg-gray-200';
            switch (kategori) {
              case 'NAV': return 'bg-nav-blue text-white';
              case 'Skatt': return 'bg-skatt-green text-white';
              case 'Helse': return 'bg-helse-red text-white';
              case 'Digital': return 'bg-purple-600 text-white';
              case 'Bank': return 'bg-orange-500 text-white';
              case 'Sikkerhet': return 'bg-rose-600 text-white';
              case 'Bolig': return 'bg-teal-600 text-white';
              case 'Utdanning': return 'bg-indigo-600 text-white';
              case 'ID': return 'bg-cyan-600 text-white';
              default: return 'bg-gray-600 text-white';
            }
          };
          return (
            <button
              key={k}
              onClick={() => setSelectedKategori(k)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${getKategoriFarge(k, selectedKategori === k)}`}
            >
              {k} ({ordliste.filter(o => o.kategori === k).length})
            </button>
          );
        })}
      </div>

      {/* Ordliste */}
      <div className="space-y-4">
        {filtrerteOrd.map((ord, index) => (
          <div key={index} className="card">
            <div className="flex items-start justify-between mb-2">
              <h2 className="text-xl font-bold text-gray-800">{ord.ord}</h2>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                ord.kategori === 'NAV' ? 'bg-blue-100 text-nav-blue'
                : ord.kategori === 'Skatt' ? 'bg-green-100 text-skatt-green'
                : ord.kategori === 'Helse' ? 'bg-red-100 text-helse-red'
                : ord.kategori === 'Digital' ? 'bg-purple-100 text-purple-700'
                : ord.kategori === 'Bank' ? 'bg-orange-100 text-orange-700'
                : ord.kategori === 'Sikkerhet' ? 'bg-rose-100 text-rose-700'
                : ord.kategori === 'Bolig' ? 'bg-teal-100 text-teal-700'
                : ord.kategori === 'Utdanning' ? 'bg-indigo-100 text-indigo-700'
                : ord.kategori === 'ID' ? 'bg-cyan-100 text-cyan-700'
                : 'bg-gray-100 text-gray-700'
              }`}>
                {ord.kategori}
              </span>
            </div>
            <p className="text-gray-700 text-lg mb-2">{ord.forklaring}</p>
            {ord.eksempel && (
              <p className="text-gray-500 italic bg-gray-50 p-3 rounded-lg">
                💡 {ord.eksempel}
              </p>
            )}
          </div>
        ))}
      </div>

      {filtrerteOrd.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">{t('noResults')} &quot;{searchQuery}&quot;</p>
          <p className="text-gray-500 mt-2">{t('tryAnother')}</p>
        </div>
      )}

      {/* Tips */}
      <div className="mt-12 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">{t('missingWord')}</p>
            <p className="text-green-700">
              {t('missingWordText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
