'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const boligGuideKeys = [
  { key: 'bostotte', href: '/bolig/bostotte', difficulty: 'medium', time: 20 },
  { key: 'startlan', href: '/bolig/startlan', difficulty: 'medium', time: 25 },
  { key: 'kommunalBolig', href: '/bolig/kommunal-bolig', difficulty: 'medium', time: 20 },
];

export default function BoligPage() {
  const t = useTranslations('services.bolig');
  const tGuides = useTranslations('guides.bolig');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'Bolig', url: `/${locale}/bolig` }
      ]} />
      <ArticleSchema
        title="Bolig - Guider for bostøtte, startlån og kommunal bolig"
        description="Lær hvordan du søker bostøtte, startlån og kommunal bolig. Enkle steg-for-steg guider for boligstøtte i Norge."
        url={`/${locale}/bolig`}
        datePublished="2024-01-01"
        dateModified="2026-01-30"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            {tCommon('backToHome')}
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="bg-teal-500 text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">{t('hubTitle')}</h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              <strong className="text-gray-900">{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        {/* Guides */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('selectGuide')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {boligGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">{tGuides(`${guide.key}.title`)}</h3>
                  <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium">
                    {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{tGuides(`${guide.key}.description`)}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {guide.time} {tCommon('minutes')}
                  </span>
                  <span className="text-teal-600 font-medium flex items-center gap-1">
                    {tCommon('startGuide')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Who can get help */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('whoCanGetHelpTitle')}</h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('bostotteTitle')}</p>
              <p className="text-gray-600 text-sm">{t('bostotteDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('startlanTitle')}</p>
              <p className="text-gray-600 text-sm">{t('startlanDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('kommunalBoligTitle')}</p>
              <p className="text-gray-600 text-sm">{t('kommunalBoligDesc')}</p>
            </div>
          </div>
        </div>

        {/* Useful links */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{t('usefulLinksTitle')}</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span><strong className="text-gray-900">{t('linkHusbanken')}</strong> - {t('linkHusbankenDesc')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span><strong className="text-gray-900">{t('linkKommune')}</strong> - {t('linkKommuneDesc')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong className="text-gray-900">{t('linkPhone')}</strong> {t('linkPhoneHours')}</span>
            </div>
          </div>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-gray-400">
          Sist oppdatert: Januar 2026
        </p>
      </div>
    </>
  );
}
