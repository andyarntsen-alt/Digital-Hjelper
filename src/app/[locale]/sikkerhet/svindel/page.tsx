'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const svindelSteps = [
  {
    title: 'Stopp opp og tenk',
    description: 'Svindlere prøver å stresse deg til å handle raskt. Ta deg tid. Ekte banker og myndigheter gir deg alltid tid til å tenke.',
    tip: 'Hvis noen sier "dette haster!" eller "du må handle NÅ!", er det nesten alltid svindel.',
  },
  {
    title: 'Sjekk hvem som kontakter deg',
    description: 'Se nøye på hvem som ringer eller sender meldingen. Svindlere kan forfalske telefonnumre og e-postadresser, men det er ofte små feil.',
    warning: 'Banken din vil ALDRI ringe og be om passord, BankID-kode eller personnummer!',
  },
  {
    title: 'Se etter skrivefeil',
    description: 'Ekte meldinger fra banker og myndigheter er alltid skrevet med korrekt norsk. Svindelmeldinger har ofte skrivefeil, rare formuleringer eller dårlig grammatikk.',
    tip: 'Les meldingen høyt. Høres det rart ut? Da er det trolig svindel.',
  },
  {
    title: 'Ikke klikk på lenker i meldinger',
    description: 'Svindlere sender ofte lenker som ser ekte ut, men som leder til falske nettsider. Gå heller direkte til bankens nettside ved å skrive adressen selv.',
    warning: 'Aldri logg inn via lenker i e-post eller SMS. Skriv alltid adressen selv i nettleseren.',
  },
  {
    title: 'Del aldri personlig informasjon',
    description: 'Passord, BankID-koder, personnummer og kortinformasjon skal du ALDRI dele med noen som kontakter deg. Ekte selskaper ber aldri om dette.',
  },
  {
    title: 'Ring tilbake på offisielt nummer',
    description: 'Hvis noen ringer og sier de er fra banken, legg på og ring bankens offisielle nummer. Finn nummeret på bankens nettside eller på baksiden av bankkortet.',
    tip: 'Ikke ring tilbake på nummeret som ringte deg - det kan også være forfalsket.',
  },
  {
    title: 'Snakk med noen du stoler på',
    description: 'Er du usikker? Snakk med familie, venner eller banken din før du gjør noe. Det er bedre å spørre én gang for mye enn å bli lurt.',
  },
];

// Eldresvindel-typer
const eldresvindelTyper = [
  {
    title: 'Oldebarnssvindel (Barnebarnsvindel)',
    description: 'Noen ringer og later som de er barnebarnet ditt. De sier de er i trøbbel og trenger penger raskt - ofte til advokat, kausjon eller sykehusregning.',
    howItWorks: 'Svindleren ringer og sier "Hei bestemor/bestefar, det er meg!" og håper du sier navnet på barnebarnet ditt. Da later de som de er den personen.',
    redFlags: [
      'De ber deg IKKE fortelle foreldrene deres',
      'De trenger pengene VELDIG fort',
      'De vil ha kontanter eller gavekort',
      'Stemmen høres "annerledes" ut - de sier de er forkjølet'
    ],
    whatToDo: 'Legg på og ring barnebarnet ditt på nummeret du har lagret. Spør om noe bare dere to vet.',
    icon: '👴'
  },
  {
    title: 'Microsoft/Apple-svindel',
    description: 'Noen ringer og sier de er fra Microsoft, Apple eller "datasupport". De påstår at datamaskinen din har virus og at de må hjelpe deg fjerne det.',
    howItWorks: 'De får deg til å installere et program som gir dem kontroll over datamaskinen din. Så "finner" de problemer og krever betaling.',
    redFlags: [
      'Microsoft og Apple ringer ALDRI uoppfordret',
      'De ber om fjerntilgang til datamaskinen',
      'De vil ha betaling i gavekort eller kryptovaluta',
      'De truer med at datamaskinen vil slutte å virke'
    ],
    whatToDo: 'Legg på med en gang. Ekte teknisk support ringer aldri deg først.',
    icon: '💻'
  },
  {
    title: 'Romantikksvindel',
    description: 'Noen du har møtt på nettet (ofte på Facebook eller datingsider) sier de er forelsket i deg. Etter hvert ber de om penger.',
    howItWorks: 'De bygger opp et forhold over uker eller måneder. Så oppstår det en "krise" - de trenger penger til flybillett, medisinsk behandling eller toll.',
    redFlags: [
      'De kan aldri møtes ansikt til ansikt',
      'De erklærer kjærlighet veldig raskt',
      'De har alltid unnskyldninger for å ikke ringe med video',
      'De ber om penger - uansett grunn'
    ],
    whatToDo: 'Aldri send penger til noen du bare kjenner fra nettet. Snakk med familie eller venner om forholdet.',
    icon: '💔'
  },
  {
    title: 'Lotterisvindel',
    description: 'Du får beskjed om at du har vunnet i et lotteri du aldri har deltatt i. Men du må betale "gebyr" eller "skatt" for å få gevinsten.',
    howItWorks: 'De sender e-post eller ringer med "gode nyheter". For å få milliongevinsten må du bare betale et lite beløp først.',
    redFlags: [
      'Du har ikke kjøpt lodd eller deltatt i konkurransen',
      'Du må betale for å motta gevinsten',
      'De ber om bankinformasjon for å "overføre gevinsten"',
      'Gevinsten er i utenlandsk valuta'
    ],
    whatToDo: 'Ignorer det. Du kan ikke vinne i lotterier du ikke har deltatt i.',
    icon: '🎰'
  },
  {
    title: 'Investeringssvindel',
    description: 'Noen lover deg fantastisk avkastning på investeringer i aksjer, kryptovaluta eller andre "muligheter".',
    howItWorks: 'De kontakter deg med en "unik mulighet". Ofte viser de falske nettsider som ser ut som investeringene dine vokser.',
    redFlags: [
      'Avkastningen er for god til å være sann (20-50% eller mer)',
      'De presser deg til å investere raskt',
      'Du har aldri hørt om selskapet før',
      'De ringer fra utlandet eller har utenlandsk aksent'
    ],
    whatToDo: 'Snakk med banken din før du investerer. Sjekk Finanstilsynets liste over advarsler.',
    icon: '📈'
  },
  {
    title: 'Håndverkersvindel',
    description: 'Noen banker på døren og tilbyr å fikse taket, oppkjørselen eller noe annet "de tilfeldigvis så trengte reparasjon".',
    howItWorks: 'De gjør en dårlig eller unødvendig jobb og krever høy betaling kontant. Noen ganger forsvinner de med forskuddsbetalingen.',
    redFlags: [
      'De "tilfeldigvis" var i nabolaget',
      'De vil ha betaling på forskudd eller kontant',
      'De har ikke skriftlig tilbud eller kontrakt',
      'De presser deg til å bestemme deg med en gang'
    ],
    whatToDo: 'Si nei til uoppfordrede tilbud. Bruk håndverkere du kjenner eller som er anbefalt av noen du stoler på.',
    icon: '🔧'
  }
];

// "Er dette ekte?" sjekkliste
const sjekklisteItems = [
  { question: 'Kontaktet de DEG først?', warning: 'Ekte banker og myndigheter kontakter deg sjelden uoppfordret.' },
  { question: 'Ber de om passord, BankID eller personnummer?', warning: 'ALDRI gi ut dette - ekte avsendere ber aldri om det!' },
  { question: 'Haster det veldig?', warning: 'Svindlere skaper alltid hastverk. Ekte saker kan vente til i morgen.' },
  { question: 'Må du betale for å motta noe?', warning: 'Ekte premier og arv krever aldri at du betaler først.' },
  { question: 'Virker det for godt til å være sant?', warning: 'Da er det nesten alltid for godt til å være sant.' },
  { question: 'Skal du holde det hemmelig?', warning: 'Svindlere vil ikke at du snakker med andre som kan avsløre dem.' },
  { question: 'Vil de ha kontanter eller gavekort?', warning: 'Ekte selskaper tar aldri betaling i gavekort.' },
];

export default function SvindelPage() {
  const tNav = useTranslations('header');
  const locale = useLocale();
  const [expandedType, setExpandedType] = useState<number | null>(null);
  const [sjekklisteAnswers, setSjekklisteAnswers] = useState<boolean[]>(new Array(sjekklisteItems.length).fill(false));

  const warningCount = sjekklisteAnswers.filter(a => a).length;

  const howToSteps = svindelSteps.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      <HowToSchema
        name="Unngå svindel"
        description="Lær å gjenkjenne og unngå svindelforsøk på telefon, SMS og e-post. Spesielt viktig for eldre."
        steps={howToSteps}
        totalTime="PT15M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('sikkerhet'), href: '/sikkerhet' },
          { label: 'Unngå svindel' }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Ca. 15 minutter</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">Enkel</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">Unngå svindel</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <FavoriteButton guideId="sikkerhet-svindel" title="Unngå svindel" />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">
          Lær å gjenkjenne og unngå svindelforsøk på telefon, SMS og e-post. Spesielt viktig for eldre.
        </p>
      </div>

      {/* "Er dette ekte?" sjekkliste */}
      <div className="card bg-yellow-50 border-2 border-yellow-400 mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-3xl">🤔</span> Er dette ekte? - Sjekkliste
        </h2>
        <p className="text-gray-700 mb-4">Har du fått en telefon, SMS eller e-post du er usikker på? Svar på spørsmålene under:</p>

        <div className="space-y-3">
          {sjekklisteItems.map((item, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg border-2 transition-all ${
                sjekklisteAnswers[index]
                  ? 'bg-red-100 border-red-400'
                  : 'bg-white border-gray-200'
              }`}
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={sjekklisteAnswers[index]}
                  onChange={() => {
                    const newAnswers = [...sjekklisteAnswers];
                    newAnswers[index] = !newAnswers[index];
                    setSjekklisteAnswers(newAnswers);
                  }}
                  className="mt-1 h-5 w-5 rounded border-gray-300 text-red-600 focus:ring-red-500"
                />
                <div>
                  <p className="font-semibold text-gray-800">{item.question}</p>
                  {sjekklisteAnswers[index] && (
                    <p className="text-red-700 text-sm mt-1">{item.warning}</p>
                  )}
                </div>
              </label>
            </div>
          ))}
        </div>

        {/* Resultat */}
        <div className={`mt-4 p-4 rounded-lg ${
          warningCount === 0
            ? 'bg-green-100 border border-green-400'
            : warningCount <= 2
            ? 'bg-yellow-100 border border-yellow-400'
            : 'bg-red-100 border border-red-400'
        }`}>
          {warningCount === 0 ? (
            <p className="text-green-800 font-semibold">Ser trygt ut, men vær alltid på vakt!</p>
          ) : warningCount <= 2 ? (
            <p className="text-yellow-800 font-semibold">Vær forsiktig! {warningCount} varseltegn. Snakk med noen du stoler på før du gjør noe.</p>
          ) : (
            <p className="text-red-800 font-semibold text-lg">STOPP! {warningCount} varseltegn. Dette er sannsynligvis svindel. Ikke gjør noe!</p>
          )}
        </div>
      </div>

      {/* Svindeltyper rettet mot eldre */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-3xl">⚠️</span> Svindel rettet mot eldre
        </h2>
        <p className="text-gray-600 mb-6">Svindlere retter seg ofte mot eldre fordi de kan være mer tillitsfulle og ha sparepenger. Her er de vanligste typene:</p>

        <div className="space-y-4">
          {eldresvindelTyper.map((type, index) => (
            <div key={index} className="card border-l-4 border-red-500">
              <button
                onClick={() => setExpandedType(expandedType === index ? null : index)}
                className="w-full text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{type.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800">{type.title}</h3>
                    <p className="text-gray-600">{type.description}</p>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 text-gray-400 transition-transform ${expandedType === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {expandedType === index && (
                <div className="mt-4 pt-4 border-t border-gray-200 space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Slik fungerer det:</p>
                    <p className="text-gray-700">{type.howItWorks}</p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="font-semibold text-red-800 mb-2">Varseltegn:</p>
                    <ul className="space-y-2">
                      {type.redFlags.map((flag, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-600 font-bold">!</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-800 mb-2">Hva du skal gjøre:</p>
                    <p className="text-gray-700">{type.whatToDo}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="card bg-red-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-red-800">Andre vanlige svindeltyper</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">Telefonsvindel</p>
            <p className="text-gray-600">Noen ringer og utgir seg for å være fra banken, politiet eller Microsoft. De vil ha tilgang til kontoen din.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">SMS-svindel</p>
            <p className="text-gray-600">&quot;Din pakke venter&quot; eller &quot;Du har vunnet!&quot; - meldinger med lenker som leder til falske nettsider.</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold">E-postsvindel (phishing)</p>
            <p className="text-gray-600">E-poster som ser ut som de kommer fra banken eller andre du stoler på, men som vil lure deg.</p>
          </div>
        </div>
      </div>

      <StepGuide title="Slik beskytter du deg mot svindel" steps={svindelSteps} />

      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4">Husk: Ekte avsendere vil ALDRI be deg om...</h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Passord eller PIN-kode</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>BankID-kode på telefon</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Personnummer</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Å installere programmer på datamaskinen</span>
          </li>
          <li className="flex items-center gap-3">
            <span className="text-red-600 font-bold">✕</span>
            <span>Å overføre penger til en "sikker konto"</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">Eksempler på ekte svindelmeldinger</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">SMS</p>
            <p className="italic">&quot;Din pakke venter på levering. Betal 29 kr frakt her: [lenke]&quot;</p>
            <p className="text-red-600 text-sm mt-2">Posten sender aldri SMS om betaling via lenker!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">Telefon</p>
            <p className="italic">&quot;Hei, dette er fra bankens sikkerhetsavdeling. Vi har oppdaget mistenkelig aktivitet og må verifisere BankID-en din.&quot;</p>
            <p className="text-red-600 text-sm mt-2">Banken ringer ALDRI om BankID!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">E-post</p>
            <p className="italic">&quot;Kjære kunde, din konto vil bli stengt hvis du ikke oppdaterer informasjonen din innen 24 timer.&quot;</p>
            <p className="text-red-600 text-sm mt-2">Ekte banker truer aldri med kontostengning via e-post!</p>
          </div>
          <div className="p-4 bg-gray-100 rounded-lg border-l-4 border-red-500">
            <p className="text-sm text-gray-500 mb-1">Telefon (Oldebarnssvindel)</p>
            <p className="italic">&quot;Hei bestemor, det er meg! Jeg har vært i en ulykke og trenger 50 000 kr til advokat. Kan du hjelpe? Men ikke fortell mamma!&quot;</p>
            <p className="text-red-600 text-sm mt-2">Ekte barnebarn ber deg ikke holde ting hemmelig for foreldrene!</p>
          </div>
        </div>
      </div>

      {/* Nødnumre og kontakter */}
      <div className="mt-8 card bg-blue-50 border-2 border-blue-400">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="text-3xl">📞</span> Viktige telefonnumre
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-bold text-xl text-red-600">112</p>
            <p className="font-semibold">Nødnummer - Politi</p>
            <p className="text-gray-600 text-sm">Ved akutt fare eller pågående kriminalitet</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-bold text-xl text-blue-600">02800</p>
            <p className="font-semibold">Politiets servicenummer</p>
            <p className="text-gray-600 text-sm">For å anmelde svindel eller få råd</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-bold text-xl text-green-600">21 05 32 00</p>
            <p className="font-semibold">ID-tyverihjelpen</p>
            <p className="text-gray-600 text-sm">Hvis noen har misbrukt identiteten din</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-bold text-xl text-purple-600">Bankens nummer</p>
            <p className="font-semibold">Finn det på baksiden av kortet</p>
            <p className="text-gray-600 text-sm">Sperre kort og konto ved svindel</p>
          </div>
        </div>
        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          <p className="text-gray-800 text-sm"><strong>Tips:</strong> Skriv ned disse numrene og legg lappen ved telefonen!</p>
        </div>
      </div>
    </div>
    </>
  );
}
