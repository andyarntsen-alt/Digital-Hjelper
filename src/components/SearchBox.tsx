'use client';

import { useState, useEffect, useRef, useMemo } from 'react';
import { useRouter } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ALL_GUIDES, CATEGORY_COLORS, type GuideCategory } from '@/data/guides';

interface TranslatedGuide {
  title: string;
  description: string;
  href: string;
  category: GuideCategory;
  keywords: string[];
}

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
  const allGuides = useMemo(() => ALL_GUIDES.map(guide => ({
    title: tGuides(guide.titleKey),
    description: tGuides(guide.descriptionKey),
    href: guide.href,
    category: guide.category,
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
          id="search-input"
          name="search"
          role="combobox"
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
          aria-autocomplete="list"
          aria-haspopup="listbox"
          aria-activedescendant={selectedIndex >= 0 ? `search-result-${selectedIndex}` : undefined}
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
          className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-200 max-h-[50vh] sm:max-h-80 md:max-h-96 overflow-y-auto z-50 overscroll-contain"
          role="listbox"
          aria-label="Søkeresultater"
        >
          {results.map((result, index) => (
            <button
              key={result.href}
              id={`search-result-${index}`}
              onClick={() => handleSelect(result.href)}
              className={`w-full text-left p-4 hover:bg-gray-50 active:bg-gray-100 flex items-start gap-3 sm:gap-4 border-b border-gray-100 last:border-b-0 transition-colors ${
                selectedIndex === index ? 'bg-blue-50' : ''
              }`}
              role="option"
              aria-selected={selectedIndex === index}
            >
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                CATEGORY_COLORS[result.category] || 'bg-gray-600 text-white'
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
