'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const boligGuideKeys = [
  { key: 'bostotte', href: '/bolig/bostotte', difficulty: 'medium', time: 20 },
  { key: 'startlan', href: '/bolig/startlan', difficulty: 'medium', time: 25 },
  { key: 'kommunalBolig', href: '/bolig/kommunal-bolig', difficulty: 'medium', time: 20 },
];

export default function BoligPage() {
  const t = useTranslations('services.bolig');
  const tGuides = useTranslations('guides.bolig');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-teal-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-teal-500 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
            <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
          </div>
        </div>
        <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {boligGuideKeys.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-teal-500 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.key}.title`)}</h3>
                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-medium">
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
                <span className="text-teal-600 font-semibold flex items-center gap-1">
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
        <h2 className="text-2xl font-bold mb-4">{t('whoCanGetHelpTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('bostotteTitle')}</p>
            <p className="text-gray-600">{t('bostotteDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('startlanTitle')}</p>
            <p className="text-gray-600">{t('startlanDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('kommunalBoligTitle')}</p>
            <p className="text-gray-600">{t('kommunalBoligDesc')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">{t('usefulLinksTitle')}</h2>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>{t('linkHusbanken')}</strong> - {t('linkHusbankenDesc')}</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            <span><strong>{t('linkKommune')}</strong> - {t('linkKommuneDesc')}</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>{t('linkPhone')}</strong> {t('linkPhoneHours')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
