'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';

const idGuideKeys = [
  { key: 'pass', href: '/id/pass', difficulty: 'easy', time: 15 },
  { key: 'forerkort', href: '/id/forerkort', difficulty: 'easy', time: 15 },
  { key: 'idKort', href: '/id/id-kort', difficulty: 'easy', time: 15 },
];

export default function IDContent() {
  const t = useTranslations('services.id');
  const tGuides = useTranslations('guides.id');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      <BreadcrumbSchema items={[
        { name: 'Hjem', url: `/${locale}` },
        { name: 'ID og legitimasjon', url: `/${locale}/id` }
      ]} />
      <ArticleSchema
        title="ID og Legitimasjon - Guider for pass, førerkort og ID-kort"
        description="Lær hvordan du bestiller pass, fornyer førerkort og skaffer ID-kort. Enkle steg-for-steg guider."
        url={`/${locale}/id`}
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
            <div className="bg-cyan-500 text-white p-3 rounded-xl flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
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
          {idGuideKeys.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-cyan-600 transition-colors">{tGuides(`${guide.key}.title`)}</h3>
                  <span className="bg-green-100 text-green-700 px-2.5 py-1 rounded-full text-xs font-medium">
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
                  <span className="text-cyan-600 font-medium flex items-center gap-1">
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

        {/* Which ID */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('whichIdTitle')}</h2>
          <div className="space-y-3">
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('passInfoTitle')}</p>
              <p className="text-gray-600 text-sm">{t('passInfoDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('forerkortInfoTitle')}</p>
              <p className="text-gray-600 text-sm">{t('forerkortInfoDesc')}</p>
            </div>
            <div className="p-4 bg-white border border-gray-200 rounded-xl">
              <p className="font-medium text-gray-900">{t('idKortInfoTitle')}</p>
              <p className="text-gray-600 text-sm">{t('idKortInfoDesc')}</p>
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
              <span><strong className="text-gray-900">{t('linkPolice')}</strong> - {t('linkPoliceDesc')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
              <span><strong className="text-gray-900">{t('linkVegvesen')}</strong> - {t('linkVegvesenDesc')}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span><strong className="text-gray-900">{t('linkPhones')}</strong></span>
            </div>
          </div>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-gray-400">
          {tCommon('lastUpdatedJan2026')}
        </p>
      </div>
    </>
  );
}
