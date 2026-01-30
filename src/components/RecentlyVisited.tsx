'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import { getStorageItem, setStorageItem } from '@/utils/storage';
import { getGuideByHref, CATEGORY_COLORS, CATEGORY_ICONS, type GuideData } from '@/data/guides';

const STORAGE_KEY = 'recently-visited';
const MAX_RECENT = 5;

interface RecentVisit {
  href: string;
  timestamp: number;
}

/**
 * Legger til en guide i "sist besøkt"-listen
 * Kall denne funksjonen fra guide-sidene
 */
export function trackGuideVisit(href: string) {
  if (typeof window === 'undefined') return;

  const recent = getStorageItem<RecentVisit[]>(STORAGE_KEY, []);

  // Fjern eksisterende besøk til samme guide
  const filtered = recent.filter(visit => visit.href !== href);

  // Legg til nytt besøk først
  const updated = [{ href, timestamp: Date.now() }, ...filtered].slice(0, MAX_RECENT);

  setStorageItem(STORAGE_KEY, updated);
}

/**
 * Viser de sist besøkte guidene
 */
export default function RecentlyVisited() {
  const t = useTranslations('recentlyVisited');
  const tGuides = useTranslations('guides');
  const tCommon = useTranslations('common');
  const [recentGuides, setRecentGuides] = useState<GuideData[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const recent = getStorageItem<RecentVisit[]>(STORAGE_KEY, []);

    // Konverter til GuideData-objekter
    const guides = recent
      .map(visit => getGuideByHref(visit.href))
      .filter((guide): guide is GuideData => guide !== undefined);

    setRecentGuides(guides);
  }, []);

  const removeGuide = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const recent = getStorageItem<RecentVisit[]>(STORAGE_KEY, []);
    const updated = recent.filter(visit => visit.href !== href);
    setStorageItem(STORAGE_KEY, updated);
    setRecentGuides(prev => prev.filter(g => g.href !== href));
  };

  // Ikke vis noe før mount eller hvis ingen besøk
  if (!mounted || recentGuides.length === 0) return null;

  return (
    <section className="py-8 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {t('title')}
        </h2>

        <div className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap">
          {recentGuides.map((guide) => (
            <div
              key={guide.href}
              className="flex-shrink-0 relative group bg-white border-2 border-gray-200 rounded-lg hover:border-nav-blue active:border-nav-blue hover:shadow-md transition-all duration-200 min-w-[200px] sm:min-w-0 sm:flex-1 sm:max-w-[250px]"
            >
              <Link
                href={guide.href}
                className="block p-3 no-underline"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm ${CATEGORY_COLORS[guide.category]}`}>
                    {CATEGORY_ICONS[guide.category]}
                  </span>
                  <div className="min-w-0 pr-4">
                    <h3 className="text-sm font-semibold text-gray-900 group-hover:text-nav-blue truncate">
                      {tGuides(guide.titleKey)}
                    </h3>
                    <p className="text-xs text-gray-500 truncate">
                      {tGuides(guide.descriptionKey)}
                    </p>
                  </div>
                </div>
              </Link>
              <button
                onClick={(e) => removeGuide(guide.href, e)}
                className="absolute top-1 right-1 p-1 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label={tCommon('remove')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
