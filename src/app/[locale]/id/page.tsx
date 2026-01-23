'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const idGuideKeys = [
  { key: 'pass', href: '/id/pass', difficulty: 'easy', time: 15 },
  { key: 'forerkort', href: '/id/forerkort', difficulty: 'easy', time: 15 },
  { key: 'idKort', href: '/id/id-kort', difficulty: 'easy', time: 15 },
];

export default function IDPage() {
  const t = useTranslations('services.id');
  const tGuides = useTranslations('guides.id');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-cyan-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-cyan-500 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
            <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
          </div>
        </div>
        <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {idGuideKeys.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-cyan-500 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.key}.title`)}</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tGuides(`${guide.key}.description`)}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {guide.time} {tCommon('minutes')}
                </span>
                <span className="text-cyan-600 font-semibold flex items-center gap-1">
                  {tCommon('startGuide')}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 card bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">{t('whichIdTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('passInfoTitle')}</p>
            <p className="text-gray-600">{t('passInfoDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('forerkortInfoTitle')}</p>
            <p className="text-gray-600">{t('forerkortInfoDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('idKortInfoTitle')}</p>
            <p className="text-gray-600">{t('idKortInfoDesc')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">{t('usefulLinksTitle')}</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>{t('linkPolice')}</strong> - {t('linkPoliceDesc')}</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>{t('linkVegvesen')}</strong> - {t('linkVegvesenDesc')}</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>{t('linkPhones')}</strong></span>
          </li>
        </ul>
      </div>
    </div>
  );
}
