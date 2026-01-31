'use client';

import { useState, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

type OrdbokTerm = {
  term: string;
  definition: string;
  example?: string;
  category: string;
};

export default function OrdbokContent() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKategori, setSelectedKategori] = useState<string | null>(null);
  const t = useTranslations('ordbok');
  const tCommon = useTranslations('common');

  // Get ordbok terms from translations
  const ordbokTerms = t.raw('terms') as OrdbokTerm[];

  // Translate category names
  const getCategoryTranslation = (category: string) => {
    try {
      return t(`categories.${category}`);
    } catch {
      return category;
    }
  };

  const kategorier = Array.from(new Set(ordbokTerms.map(term => term.category)));

  const filtrerteOrd = ordbokTerms.filter(term => {
    const matcherSok = searchQuery === '' ||
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase());
    const matcherKategori = selectedKategori === null || term.category === selectedKategori;
    return matcherSok && matcherKategori;
  });

  // Sorter alfabetisk og grupper per bokstav
  const gruppertPerBokstav = useMemo(() => {
    const sortert = [...filtrerteOrd].sort((a, b) =>
      a.term.localeCompare(b.term, 'no')
    );
    return sortert.reduce((acc, term) => {
      const bokstav = term.term[0].toUpperCase();
      if (!acc[bokstav]) acc[bokstav] = [];
      acc[bokstav].push(term);
      return acc;
    }, {} as Record<string, OrdbokTerm[]>);
  }, [filtrerteOrd]);

  const tilgjengeligeBokstaver = Object.keys(gruppertPerBokstav).sort((a, b) =>
    a.localeCompare(b, 'no')
  );

  const getKategoriBadgeFarge = (category: string) => {
    switch (category) {
      case 'NAV': return 'bg-blue-100 text-nav-blue';
      case 'Skatt': return 'bg-green-100 text-skatt-green';
      case 'Helse': return 'bg-red-100 text-helse-red';
      case 'Digital': return 'bg-purple-100 text-purple-700';
      case 'Bank': return 'bg-orange-100 text-orange-700';
      case 'Sikkerhet': return 'bg-rose-100 text-rose-700';
      case 'Bolig': return 'bg-teal-100 text-teal-700';
      case 'Utdanning': return 'bg-indigo-100 text-indigo-700';
      case 'ID': return 'bg-cyan-100 text-cyan-700';
      case 'Pensjon': return 'bg-amber-100 text-amber-700';
      case 'Teknologi': return 'bg-sky-100 text-sky-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
      <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t('title')}</h1>
      <p className="text-xl text-gray-600 mb-8">
        {t('subtitle')}
      </p>

      {/* Sok og filter */}
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
                <option key={k} value={k}>{getCategoryTranslation(k)}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Kategori-filter (kompakt) */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setSelectedKategori(null)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            selectedKategori === null
              ? 'bg-nav-blue text-white'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
          }`}
        >
          {t('all')} ({ordbokTerms.length})
        </button>
        {kategorier.map(k => (
          <button
            key={k}
            onClick={() => setSelectedKategori(k)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
              selectedKategori === k
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {getCategoryTranslation(k)}
          </button>
        ))}
      </div>

      {/* Alfabetisk navigasjon (sticky) */}
      {tilgjengeligeBokstaver.length > 0 && (
        <div className="sticky top-0 bg-white py-3 border-b border-gray-200 z-10 -mx-4 px-4 mb-6">
          <div className="flex flex-wrap gap-1.5 justify-center">
            {tilgjengeligeBokstaver.map(bokstav => (
              <a
                key={bokstav}
                href={`#bokstav-${bokstav}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-nav-blue hover:text-white font-semibold text-gray-700 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(`bokstav-${bokstav}`)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {bokstav}
              </a>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-2">
            {t('clickLetter')} ({filtrerteOrd.length} {t('words')})
          </p>
        </div>
      )}

      {/* Ordliste gruppert per bokstav */}
      <div className="space-y-2">
        {tilgjengeligeBokstaver.map(bokstav => (
          <div key={bokstav}>
            <h2
              id={`bokstav-${bokstav}`}
              className="text-3xl font-bold text-gray-300 border-b-2 border-gray-200 py-3 mt-6 mb-4 scroll-mt-28"
            >
              {bokstav}
            </h2>
            <div className="space-y-3">
              {gruppertPerBokstav[bokstav].map((term, index) => (
                <div key={index} className="card">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{term.term}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium flex-shrink-0 ml-2 ${getKategoriBadgeFarge(term.category)}`}>
                      {getCategoryTranslation(term.category)}
                    </span>
                  </div>
                  <p className="text-gray-700 text-lg mb-2">{term.definition}</p>
                  {term.example && (
                    <p className="text-gray-500 italic bg-gray-50 p-3 rounded-lg">
                      {term.example}
                    </p>
                  )}
                </div>
              ))}
            </div>
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
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('missingWord')}</p>
            <p className="text-gray-700">
              {t('missingWordText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
