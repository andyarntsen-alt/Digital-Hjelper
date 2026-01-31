'use client';

import { useState, useMemo } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { FAQSchema } from '@/components/StructuredData';

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');

  // Get FAQ items from translations
  const faqItems = t.raw('items') as Array<{question: string, answer: string, category: string}>;

  // Prepare FAQ data for structured data (Google rich snippets)
  const faqSchemaData = faqItems.map(item => ({
    question: item.question,
    answer: item.answer
  }));

  // Fixed order of categories
  const kategoriRekkefølge = ['NAV', 'Pensjon', 'Skatt', 'Helse', 'Digital', 'Sikkerhet', 'Teknologi'];
  const kategorier = kategoriRekkefølge.filter(k =>
    faqItems.some(f => f.category === k)
  );

  // Filter based on search
  const filtrerteFAQ = useMemo(() => {
    if (!searchQuery) return faqItems;
    const query = searchQuery.toLowerCase();
    return faqItems.filter(f =>
      f.question.toLowerCase().includes(query) ||
      f.answer.toLowerCase().includes(query)
    );
  }, [searchQuery, faqItems]);

  // Group FAQ per category
  const gruppertPerKategori = useMemo(() => {
    return kategorier.reduce((acc, kategori) => {
      acc[kategori] = filtrerteFAQ.filter(f => f.category === kategori);
      return acc;
    }, {} as Record<string, Array<{question: string, answer: string, category: string}>>);
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

  return (
    <>
      {/* FAQ Structured Data for Google Rich Snippets */}
      <FAQSchema questions={faqSchemaData} />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">{t('title')}</h1>
      <p className="text-xl text-gray-600 mb-6">
        {t('subtitle')}
      </p>

      {/* Search field */}
      <div className="card mb-6">
        <label htmlFor="faq-search" className="block text-sm font-medium text-gray-700 mb-1">
          {tCommon('search')}
        </label>
        <input
          id="faq-search"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={tCommon('searchPlaceholder')}
          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-nav-blue focus:ring-2 focus:ring-blue-100 outline-none"
        />
      </div>

      {/* Sticky category navigation */}
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
          {filtrerteFAQ.length} {filtrerteFAQ.length === 1 ? 'question' : 'questions'}
        </p>
      </div>

      {/* FAQ grouped per category */}
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
                  const globalIndex = faqItems.indexOf(faq);
                  return (
                    <div key={index} className="card">
                      <button
                        onClick={() => setActiveIndex(activeIndex === globalIndex ? null : globalIndex)}
                        className="w-full flex items-start justify-between text-left"
                        aria-expanded={activeIndex === globalIndex}
                      >
                        <h3 className="text-lg font-semibold text-gray-800 pr-4">{faq.question}</h3>
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
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
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
          <p className="text-gray-600 text-lg">&quot;{searchQuery}&quot;</p>
        </div>
      )}

      {/* Didn't find an answer? */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">{t('noAnswer')}</h2>
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
            <p className="font-semibold text-skatt-green">{t('categories.skatt')}</p>
            <p className="text-gray-600">800 80 000</p>
            <p className="text-gray-500 text-sm">{t('weekdays')} 08-15:30</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-helse-red">{t('categories.helse')}</p>
            <p className="text-gray-600">23 32 70 00</p>
            <p className="text-gray-500 text-sm">{t('weekdays')} 08-15:30</p>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}
