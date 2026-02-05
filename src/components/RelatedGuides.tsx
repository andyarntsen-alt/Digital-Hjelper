'use client';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import { getGuidesByCategory, type GuideCategory } from '@/data/guides';

// Cross-category link for SEO
export interface CrossCategoryLink {
  href: string;
  titleKey: string;
  descriptionKey: string;
  reason?: string; // Why this is related (for accessibility/UX)
}

interface RelatedGuidesProps {
  currentPath: string;
  category: GuideCategory;
  crossCategoryLinks?: CrossCategoryLink[];
}

export default function RelatedGuides({ currentPath, category, crossCategoryLinks }: RelatedGuidesProps) {
  const locale = useLocale();
  const t = useTranslations('relatedGuides');
  const tGuides = useTranslations('guides');

  const guides = getGuidesByCategory(category);

  // Helper for locale-aware paths (no prefix for Norwegian)
  const getLocalizedHref = (href: string) => {
    const cleanHref = href.replace(/^\/no/, '');
    return locale === 'no' ? cleanHref : `/${locale}${cleanHref}`;
  };

  // Filtrer ut gjeldende side og vis maks 4 relaterte guider fra samme kategori
  const relatedGuides = guides
    .filter(guide => !currentPath.endsWith(guide.href))
    .slice(0, 4);

  const hasCrossLinks = crossCategoryLinks && crossCategoryLinks.length > 0;

  if (relatedGuides.length === 0 && !hasCrossLinks) return null;

  return (
    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        {t('title')}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {relatedGuides.map((guide) => (
          <Link
            key={guide.href}
            href={getLocalizedHref(guide.href)}
            className="group bg-white border-2 border-gray-200 rounded-lg p-3 sm:p-4 hover:border-nav-blue active:border-nav-blue transition-all duration-200 no-underline"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-nav-blue">
                  {tGuides(guide.titleKey)}
                </h3>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  {tGuides(guide.descriptionKey)}
                </p>
              </div>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-nav-blue group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>

      {/* Cross-category links for SEO */}
      {hasCrossLinks && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {t('relatedServices') || 'Andre relevante tjenester'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {crossCategoryLinks!.map((link) => (
              <Link
                key={link.href}
                href={getLocalizedHref(link.href)}
                className="group bg-gray-50 border border-gray-200 rounded-lg p-3 hover:border-nav-blue hover:bg-white transition-all duration-200 no-underline"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <h4 className="text-base font-medium text-gray-900 group-hover:text-nav-blue">
                      {tGuides(link.titleKey)}
                    </h4>
                    <p className="text-gray-500 text-sm mt-0.5">
                      {tGuides(link.descriptionKey)}
                    </p>
                  </div>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-nav-blue group-hover:translate-x-0.5 transition-transform flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
