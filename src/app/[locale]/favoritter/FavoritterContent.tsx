'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';

interface Favorite {
  id: string;
  title: string;
  addedAt: string;
}

// Alle kategorier som brukes i appen (inkludert de med bindestreker)
const CATEGORIES = [
  'ny-i-norge',  // Må sjekkes først (lengre match)
  'nav',
  'skatt',
  'helse',
  'bolig',
  'digital',
  'sikkerhet',
  'grunnleggende',
  'utdanning',
  'id',
  'bank',
  'byer',
];

// Konverterer guideId (f.eks. "nav-logg-inn") til URL (f.eks. "/nav/logg-inn")
function guideIdToHref(guideId: string): string {
  // Finn riktig kategori fra starten av guideId
  for (const category of CATEGORIES) {
    if (guideId.startsWith(category + '-')) {
      const subPath = guideId.substring(category.length + 1);
      return `/${category}/${subPath}`;
    }
  }

  // Fallback: hvis ingen kategori matcher, returner guideId som sti
  return `/${guideId}`;
}

export default function FavoritterContent() {
  const [mounted, setMounted] = useState(false);
  const [favorites, setFavorites] = useState<Favorite[]>([]);
  const t = useTranslations('favorites');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  useEffect(() => {
    setMounted(true);
    const stored = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(stored);
  }, []);

  const removeFavorite = (id: string) => {
    const newFavorites = favorites.filter(f => f.id !== id);
    localStorage.setItem('favorites', JSON.stringify(newFavorites));
    setFavorites(newFavorites);
  };

  // Show loading state until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <div className="animate-pulse">
          <div className="h-6 w-32 bg-gray-200 rounded mb-6"></div>
          <div className="h-10 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-6 w-96 bg-gray-200 rounded mb-8"></div>
        </div>
      </div>
    );
  }

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

      {favorites.length === 0 ? (
        <div className="card text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 text-gray-300 mx-auto mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-gray-600 mb-2">{t('empty')}</h2>
          <p className="text-gray-500 mb-6">
            {t('emptyText')}
          </p>
          <Link href="/" className="btn-primary inline-block no-underline">
            {t('browseGuides')}
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="card flex items-center justify-between">
              <div>
                <Link href={guideIdToHref(favorite.id)} className="text-xl font-semibold text-gray-800 hover:text-nav-blue">
                  {favorite.title}
                </Link>
                <p className="text-gray-500 text-sm">
                  {t('addedOn')} {new Date(favorite.addedAt).toLocaleDateString(locale === 'no' ? 'no-NO' : locale === 'ar' ? 'ar-SA' : locale)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href={guideIdToHref(favorite.id)}
                  className="px-4 py-2 bg-nav-blue text-white rounded-lg hover:bg-nav-dark no-underline"
                >
                  {tCommon('open')}
                </Link>
                <button
                  onClick={() => removeFavorite(favorite.id)}
                  className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                  aria-label={tCommon('removeFromFavorites')}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tips */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('tipTitle')}</p>
            <p className="text-gray-700">
              {t('tipText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
