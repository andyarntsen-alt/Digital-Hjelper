'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface GuideData {
  titleKey: string;
  descriptionKey: string;
  href: string;
  categoryKey: string;
  keywords: string[];
}

interface TranslatedGuide {
  title: string;
  description: string;
  href: string;
  category: string;
  keywords: string[];
}

const guideData: GuideData[] = [
  // NAV
  { titleKey: 'nav.loggInn.title', descriptionKey: 'nav.loggInn.description', href: '/nav/logg-inn', categoryKey: 'nav', keywords: ['innlogging', 'bankid', 'minid', 'passord', 'login', 'gal'] },
  { titleKey: 'nav.pensjon.title', descriptionKey: 'nav.pensjon.description', href: '/nav/pensjon', categoryKey: 'nav', keywords: ['pensjon', 'alderspensjon', 'pensjonist', 'eldre', 'gammel', '67', '62', 'pension', 'retire', 'retirement'] },
  { titleKey: 'nav.uforetrygd.title', descriptionKey: 'nav.uforetrygd.description', href: '/nav/uforetrygd', categoryKey: 'nav', keywords: ['uføretrygd', 'ufør', 'syk', 'helse', 'disability', 'arbeidsufør', 'trygd'] },
  { titleKey: 'nav.dagpenger.title', descriptionKey: 'nav.dagpenger.description', href: '/nav/dagpenger', categoryKey: 'nav', keywords: ['arbeidsledig', 'mistet jobb', 'oppsigelse', 'permittert', 'penger', 'unemployment', 'shaqo'] },
  { titleKey: 'nav.sykepenger.title', descriptionKey: 'nav.sykepenger.description', href: '/nav/sykepenger', categoryKey: 'nav', keywords: ['syk', 'sykemelding', 'lege', 'sykdom', 'sick', 'xanuun'] },
  { titleKey: 'nav.foreldrepenger.title', descriptionKey: 'nav.foreldrepenger.description', href: '/nav/foreldrepenger', categoryKey: 'nav', keywords: ['barn', 'baby', 'fødsel', 'permisjon', 'mamma', 'pappa', 'fedrekvote', 'parental'] },
  { titleKey: 'nav.arbeidsledig.title', descriptionKey: 'nav.arbeidsledig.description', href: '/nav/arbeidsledig', categoryKey: 'nav', keywords: ['jobb', 'arbeid', 'cv', 'registrering', 'job', 'shaqo'] },
  { titleKey: 'nav.meldekort.title', descriptionKey: 'nav.meldekort.description', href: '/nav/meldekort', categoryKey: 'nav', keywords: ['rapport', 'utbetaling', '14 dager', 'form', 'foom'] },

  // Skatteetaten
  { titleKey: 'skatt.loggInn.title', descriptionKey: 'skatt.loggInn.description', href: '/skatt/logg-inn', categoryKey: 'skatt', keywords: ['skatt', 'innlogging', 'login', 'skatteetaten', 'bankid'] },
  { titleKey: 'skatt.skattemelding.title', descriptionKey: 'skatt.skattemelding.description', href: '/skatt/skattemelding', categoryKey: 'skatt', keywords: ['selvangivelse', 'skatt', 'inntekt', 'tax', 'cashuur'] },
  { titleKey: 'skatt.fradrag.title', descriptionKey: 'skatt.fradrag.description', href: '/skatt/fradrag', categoryKey: 'skatt', keywords: ['spare', 'renter', 'boliglån', 'reise', 'jobb', 'deduction'] },
  { titleKey: 'skatt.skattekort.title', descriptionKey: 'skatt.skattekort.description', href: '/skatt/skattekort', categoryKey: 'skatt', keywords: ['trekk', 'lønn', 'prosent', 'tabell', 'card'] },
  { titleKey: 'skatt.skatteoppgjoer.title', descriptionKey: 'skatt.skatteoppgjoer.description', href: '/skatt/skatteoppgjoer', categoryKey: 'skatt', keywords: ['tilbake', 'restskatt', 'penger', 'settlement'] },

  // Helsenorge
  { titleKey: 'helse.loggInn.title', descriptionKey: 'helse.loggInn.description', href: '/helse/logg-inn', categoryKey: 'helse', keywords: ['helse', 'innlogging', 'helsenorge', 'login', 'bankid'] },
  { titleKey: 'helse.bestilleTime.title', descriptionKey: 'helse.bestilleTime.description', href: '/helse/bestille-time', categoryKey: 'helse', keywords: ['lege', 'time', 'fastlege', 'konsultasjon', 'syk', 'doctor', 'dhakhtar'] },
  { titleKey: 'helse.resepter.title', descriptionKey: 'helse.resepter.description', href: '/helse/resepter', categoryKey: 'helse', keywords: ['medisin', 'apotek', 'piller', 'tabletter', 'prescription', 'dawooyin'] },
  { titleKey: 'helse.bytteFastlege.title', descriptionKey: 'helse.bytteFastlege.description', href: '/helse/bytte-fastlege', categoryKey: 'helse', keywords: ['lege', 'doktor', 'bytte', 'ny', 'gp', 'change'] },
  { titleKey: 'helse.journal.title', descriptionKey: 'helse.journal.description', href: '/helse/journal', categoryKey: 'helse', keywords: ['journal', 'epikrise', 'sykehus', 'diagnose', 'records'] },
  { titleKey: 'helse.melding.title', descriptionKey: 'helse.melding.description', href: '/helse/melding', categoryKey: 'helse', keywords: ['melding', 'spørsmål', 'kontakt', 'message', 'fariin'] },

  // Bank
  { titleKey: 'bank.nettbank.title', descriptionKey: 'bank.nettbank.description', href: '/bank/nettbank', categoryKey: 'bank', keywords: ['nettbank', 'bank', 'betaling', 'konto', 'online', 'banking', 'penger'] },
  { titleKey: 'bank.betaling.title', descriptionKey: 'bank.betaling.description', href: '/bank/betaling', categoryKey: 'bank', keywords: ['betale', 'regning', 'faktura', 'kid', 'payment', 'bill', 'efaktura'] },
  { titleKey: 'bank.vipps.title', descriptionKey: 'bank.vipps.description', href: '/bank/vipps', categoryKey: 'bank', keywords: ['vipps', 'mobil', 'betaling', 'penger', 'sende', 'mobile', 'app'] },
  { titleKey: 'bank.gjeld.title', descriptionKey: 'bank.gjeld.description', href: '/bank/gjeld', categoryKey: 'bank', keywords: ['gjeld', 'lån', 'inkasso', 'hjelp', 'debt', 'loan', 'betale'] },

  // Sikkerhet
  { titleKey: 'sikkerhet.bankid.title', descriptionKey: 'sikkerhet.bankid.description', href: '/sikkerhet/bankid', categoryKey: 'sikkerhet', keywords: ['bankid', 'innlogging', 'sikkerhet', 'svindel', 'kode', 'security', 'id'] },
  { titleKey: 'sikkerhet.phishing.title', descriptionKey: 'sikkerhet.phishing.description', href: '/sikkerhet/phishing', categoryKey: 'sikkerhet', keywords: ['svindel', 'epost', 'falsk', 'spam', 'scam', 'email', 'sms', 'lure'] },
  { titleKey: 'sikkerhet.passord.title', descriptionKey: 'sikkerhet.passord.description', href: '/sikkerhet/passord', categoryKey: 'sikkerhet', keywords: ['passord', 'sikkerhet', 'kode', 'password', 'security', 'trygt'] },

  // Digital
  { titleKey: 'digital.epost.title', descriptionKey: 'digital.epost.description', href: '/digital/epost', categoryKey: 'digital', keywords: ['epost', 'email', 'gmail', 'outlook', 'mail', 'brev'] },
  { titleKey: 'digital.digipost.title', descriptionKey: 'digital.digipost.description', href: '/digital/digipost', categoryKey: 'digital', keywords: ['digipost', 'digital', 'post', 'brev', 'postkasse', 'eboks'] },
  { titleKey: 'digital.altinn.title', descriptionKey: 'digital.altinn.description', href: '/digital/altinn', categoryKey: 'digital', keywords: ['altinn', 'skjema', 'offentlig', 'public', 'form', 'søknad'] },
  { titleKey: 'digital.minside.title', descriptionKey: 'digital.minside.description', href: '/digital/minside', categoryKey: 'digital', keywords: ['minside', 'profil', 'offentlig', 'portal', 'profile', 'kommune'] },

  // Bolig
  { titleKey: 'bolig.bostotte.title', descriptionKey: 'bolig.bostotte.description', href: '/bolig/bostotte', categoryKey: 'bolig', keywords: ['bostøtte', 'husleie', 'støtte', 'husbanken', 'housing', 'support', 'leie'] },
  { titleKey: 'bolig.startlan.title', descriptionKey: 'bolig.startlan.description', href: '/bolig/startlan', categoryKey: 'bolig', keywords: ['startlån', 'lån', 'kjøpe', 'bolig', 'loan', 'house', 'hus', 'leilighet'] },
  { titleKey: 'bolig.kommunalBolig.title', descriptionKey: 'bolig.kommunalBolig.description', href: '/bolig/kommunal-bolig', categoryKey: 'bolig', keywords: ['kommunal', 'leie', 'bolig', 'municipal', 'housing', 'leilighet'] },

  // Utdanning
  { titleKey: 'utdanning.studielan.title', descriptionKey: 'utdanning.studielan.description', href: '/utdanning/studielan', categoryKey: 'utdanning', keywords: ['studielån', 'stipend', 'lånekassen', 'skole', 'student', 'loan', 'utdanning'] },
  { titleKey: 'utdanning.stipend.title', descriptionKey: 'utdanning.stipend.description', href: '/utdanning/stipend', categoryKey: 'utdanning', keywords: ['stipend', 'penger', 'lånekassen', 'gratis', 'student', 'grant'] },
  { titleKey: 'utdanning.tilbakebetaling.title', descriptionKey: 'utdanning.tilbakebetaling.description', href: '/utdanning/tilbakebetaling', categoryKey: 'utdanning', keywords: ['tilbakebetaling', 'lån', 'nedbetaling', 'renter', 'repayment'] },

  // ID
  { titleKey: 'id.pass.title', descriptionKey: 'id.pass.description', href: '/id/pass', categoryKey: 'id', keywords: ['pass', 'reise', 'id', 'passport', 'travel', 'utland'] },
  { titleKey: 'id.forerkort.title', descriptionKey: 'id.forerkort.description', href: '/id/forerkort', categoryKey: 'id', keywords: ['førerkort', 'kjøre', 'bil', 'license', 'driving', 'fornye'] },
  { titleKey: 'id.idKort.title', descriptionKey: 'id.idKort.description', href: '/id/id-kort', categoryKey: 'id', keywords: ['idkort', 'id', 'legitimasjon', 'identity', 'card', 'nasjonalt'] },

  // Grunnleggende teknologi
  { titleKey: 'grunnleggende.smarttelefon.title', descriptionKey: 'grunnleggende.smarttelefon.description', href: '/grunnleggende/smarttelefon', categoryKey: 'grunnleggende', keywords: ['smarttelefon', 'mobil', 'telefon', 'iphone', 'android', 'app', 'apper', 'ringe', 'sms'] },
  { titleKey: 'grunnleggende.nettleser.title', descriptionKey: 'grunnleggende.nettleser.description', href: '/grunnleggende/nettleser', categoryKey: 'grunnleggende', keywords: ['nettleser', 'internett', 'chrome', 'safari', 'edge', 'google', 'søk', 'nettside', 'browser'] },
  { titleKey: 'grunnleggende.videosamtale.title', descriptionKey: 'grunnleggende.videosamtale.description', href: '/grunnleggende/videosamtale', categoryKey: 'grunnleggende', keywords: ['videosamtale', 'zoom', 'teams', 'facetime', 'video', 'møte', 'samtale', 'kamera', 'familie'] },
  { titleKey: 'grunnleggende.passordHjelp.title', descriptionKey: 'grunnleggende.passordHjelp.description', href: '/grunnleggende/passord-hjelp', categoryKey: 'grunnleggende', keywords: ['passord', 'glemt', 'innlogging', 'reset', 'nullstill', 'kode', 'sikkerhet'] },
  { titleKey: 'grunnleggende.faHjelp.title', descriptionKey: 'grunnleggende.faHjelp.description', href: '/grunnleggende/fa-hjelp', categoryKey: 'grunnleggende', keywords: ['hjelp', 'seniornett', 'bibliotek', 'kurs', 'datahjelp', 'frivillig', 'support'] },
];

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<TranslatedGuide[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('search');
  const tGuides = useTranslations('guides');
  const tServices = useTranslations('services');
  const tCommon = useTranslations('common');

  // Build translated guides list - memoized to prevent infinite loop
  const allGuides = useMemo(() => guideData.map(guide => ({
    title: tGuides(guide.titleKey),
    description: tGuides(guide.descriptionKey),
    href: guide.href,
    category: guide.categoryKey,
    keywords: guide.keywords,
  })), [tGuides]);

  // Fuzzy matching funksjon - tillater skrivefeil
  const fuzzyMatch = (text: string, search: string): boolean => {
    if (text.includes(search)) return true;

    // Enkel Levenshtein-lignende fuzzy match for korte ord
    if (search.length >= 3 && text.length >= 3) {
      // Sjekk om minst 70% av bokstavene matcher
      let matches = 0;
      for (const char of search) {
        if (text.includes(char)) matches++;
      }
      return matches / search.length >= 0.7;
    }
    return false;
  };

  useEffect(() => {
    // Start søk fra 1 tegn for bedre respons
    if (query.length < 1) {
      setResults([]);
      return;
    }

    const searchLower = query.toLowerCase().trim();

    // Score-basert sortering for bedre resultater
    const scoredResults = allGuides.map(guide => {
      let score = 0;
      const titleLower = guide.title.toLowerCase();
      const descLower = guide.description.toLowerCase();

      // Eksakt match i tittel = høyest score
      if (titleLower.includes(searchLower)) score += 100;
      // Starter med søkeordet
      if (titleLower.startsWith(searchLower)) score += 50;
      // Match i beskrivelse
      if (descLower.includes(searchLower)) score += 30;
      // Match i kategori
      if (guide.category.toLowerCase().includes(searchLower)) score += 20;
      // Match i keywords (inkludert fuzzy)
      if (guide.keywords.some(k => fuzzyMatch(k, searchLower))) score += 40;
      // Fuzzy match i tittel
      if (fuzzyMatch(titleLower, searchLower)) score += 25;

      return { ...guide, score };
    })
    .filter(guide => guide.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10); // Maks 10 resultater

    setResults(scoredResults);
    setSelectedIndex(-1);
  }, [query, allGuides]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && selectedIndex >= 0) {
      e.preventDefault();
      router.push(results[selectedIndex].href);
      setIsOpen(false);
      setQuery('');
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (href: string) => {
    router.push(href);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={t('placeholder')}
          className="w-full px-5 py-4 pl-12 text-lg border-2 border-gray-300 rounded-xl focus:border-nav-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all bg-white text-gray-900"
          aria-label={tCommon('search')}
          aria-expanded={isOpen && results.length > 0}
          aria-controls="search-results"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {isOpen && results.length > 0 && (
        <div
          ref={resultsRef}
          id="search-results"
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-96 overflow-y-auto z-50"
          role="listbox"
          aria-label="Søkeresultater"
        >
          {results.map((result, index) => (
            <button
              key={result.href}
              onClick={() => handleSelect(result.href)}
              className={`w-full text-left p-4 hover:bg-gray-50 flex items-start gap-4 border-b border-gray-100 last:border-b-0 ${
                selectedIndex === index ? 'bg-blue-50' : ''
              }`}
              role="option"
              aria-selected={selectedIndex === index}
            >
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                result.category === 'nav' ? 'bg-nav-blue text-white'
                : result.category === 'skatt' ? 'bg-skatt-green text-white'
                : result.category === 'helse' ? 'bg-helse-red text-white'
                : result.category === 'bank' ? 'bg-orange-500 text-white'
                : result.category === 'sikkerhet' ? 'bg-rose-600 text-white'
                : result.category === 'digital' ? 'bg-purple-600 text-white'
                : result.category === 'bolig' ? 'bg-teal-600 text-white'
                : result.category === 'utdanning' ? 'bg-indigo-600 text-white'
                : result.category === 'id' ? 'bg-cyan-600 text-white'
                : result.category === 'grunnleggende' ? 'bg-grunnleggende-purple text-white'
                : 'bg-gray-600 text-white'
              }`}>
                {tServices(`${result.category}.title`)}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{result.title}</p>
                <p className="text-gray-600 text-sm">{result.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 p-6 text-center z-50">
          <p className="text-gray-600">{t('noResults')} &quot;{query}&quot;</p>
          <p className="text-gray-500 text-sm mt-2">{t('tryOther')}</p>
        </div>
      )}
    </div>
  );
}
