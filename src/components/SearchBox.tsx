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
  { titleKey: 'nav.dagpenger.title', descriptionKey: 'nav.dagpenger.description', href: '/nav/dagpenger', categoryKey: 'nav', keywords: ['arbeidsledig', 'mistet jobb', 'oppsigelse', 'permittert', 'penger', 'unemployment', 'shaqo'] },
  { titleKey: 'nav.sykepenger.title', descriptionKey: 'nav.sykepenger.description', href: '/nav/sykepenger', categoryKey: 'nav', keywords: ['syk', 'sykemelding', 'lege', 'sykdom', 'sick', 'xanuun'] },
  { titleKey: 'nav.foreldrepenger.title', descriptionKey: 'nav.foreldrepenger.description', href: '/nav/foreldrepenger', categoryKey: 'nav', keywords: ['barn', 'baby', 'fødsel', 'permisjon', 'mamma', 'pappa', 'fedrekvote', 'parental'] },
  { titleKey: 'nav.arbeidsledig.title', descriptionKey: 'nav.arbeidsledig.description', href: '/nav/arbeidsledig', categoryKey: 'nav', keywords: ['jobb', 'arbeid', 'cv', 'registrering', 'job', 'shaqo'] },
  { titleKey: 'nav.meldekort.title', descriptionKey: 'nav.meldekort.description', href: '/nav/meldekort', categoryKey: 'nav', keywords: ['rapport', 'utbetaling', '14 dager', 'form', 'foom'] },

  // Skatteetaten
  { titleKey: 'skatt.skattemelding.title', descriptionKey: 'skatt.skattemelding.description', href: '/skatt/skattemelding', categoryKey: 'skatt', keywords: ['selvangivelse', 'skatt', 'inntekt', 'tax', 'cashuur'] },
  { titleKey: 'skatt.fradrag.title', descriptionKey: 'skatt.fradrag.description', href: '/skatt/fradrag', categoryKey: 'skatt', keywords: ['spare', 'renter', 'boliglån', 'reise', 'jobb', 'deduction'] },
  { titleKey: 'skatt.skattekort.title', descriptionKey: 'skatt.skattekort.description', href: '/skatt/skattekort', categoryKey: 'skatt', keywords: ['trekk', 'lønn', 'prosent', 'tabell', 'card'] },
  { titleKey: 'skatt.skatteoppgjoer.title', descriptionKey: 'skatt.skatteoppgjoer.description', href: '/skatt/skatteoppgjoer', categoryKey: 'skatt', keywords: ['tilbake', 'restskatt', 'penger', 'settlement'] },

  // Helsenorge
  { titleKey: 'helse.bestilleTime.title', descriptionKey: 'helse.bestilleTime.description', href: '/helse/bestille-time', categoryKey: 'helse', keywords: ['lege', 'time', 'fastlege', 'konsultasjon', 'syk', 'doctor', 'dhakhtar'] },
  { titleKey: 'helse.resepter.title', descriptionKey: 'helse.resepter.description', href: '/helse/resepter', categoryKey: 'helse', keywords: ['medisin', 'apotek', 'piller', 'tabletter', 'prescription', 'dawooyin'] },
  { titleKey: 'helse.bytteFastlege.title', descriptionKey: 'helse.bytteFastlege.description', href: '/helse/bytte-fastlege', categoryKey: 'helse', keywords: ['lege', 'doktor', 'bytte', 'ny', 'gp', 'change'] },
  { titleKey: 'helse.journal.title', descriptionKey: 'helse.journal.description', href: '/helse/journal', categoryKey: 'helse', keywords: ['journal', 'epikrise', 'sykehus', 'diagnose', 'records'] },
  { titleKey: 'helse.melding.title', descriptionKey: 'helse.melding.description', href: '/helse/melding', categoryKey: 'helse', keywords: ['melding', 'spørsmål', 'kontakt', 'message', 'fariin'] },
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

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    const searchLower = query.toLowerCase();
    const filtered = allGuides.filter(guide =>
      guide.title.toLowerCase().includes(searchLower) ||
      guide.description.toLowerCase().includes(searchLower) ||
      guide.keywords.some(k => k.includes(searchLower)) ||
      guide.category.toLowerCase().includes(searchLower)
    );

    setResults(filtered);
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
                result.category === 'nav'
                  ? 'bg-nav-blue text-white'
                  : result.category === 'skatt'
                  ? 'bg-skatt-green text-white'
                  : 'bg-helse-red text-white'
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
