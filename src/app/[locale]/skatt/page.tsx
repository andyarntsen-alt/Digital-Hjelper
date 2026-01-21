'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const skattGuideKeys = [
  { key: 'skattemelding', href: '/skatt/skattemelding', difficulty: 'easy', time: 10 },
  { key: 'fradrag', href: '/skatt/fradrag', difficulty: 'medium', time: 15 },
  { key: 'skatteoppgjoer', href: '/skatt/skatteoppgjoer', difficulty: 'easy', time: 10 },
  { key: 'skattekort', href: '/skatt/skattekort', difficulty: 'medium', time: 15 },
  { key: 'skatteattest', href: '/skatt/skatteattest', difficulty: 'easy', time: 5 },
];

export default function SkattPage() {
  const t = useTranslations('services.skatt');
  const tGuides = useTranslations('guides.skatt');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-nav-blue hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-skatt-green text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
            <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
          </div>
        </div>
        <div className="bg-green-50 border-l-4 border-skatt-green p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
          </p>
        </div>
      </div>

      {/* Veiledninger */}
      <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skattGuideKeys.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-skatt-green h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.key}.title`)}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  guide.difficulty === 'easy'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
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
                <span className="text-skatt-green font-semibold flex items-center gap-1">
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

      {/* Viktige datoer */}
      <div className="mt-12 card">
        <h2 className="text-2xl font-bold mb-6">📅 {t('importantDates')}</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-skatt-green text-white px-4 py-2 rounded-lg font-bold">
              {t('datesMarch')}
            </div>
            <div>
              <p className="font-semibold">{t('datesMarchTitle')}</p>
              <p className="text-gray-600">{t('datesMarchDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-skatt-green text-white px-4 py-2 rounded-lg font-bold">
              {t('datesApril')}
            </div>
            <div>
              <p className="font-semibold">{t('datesAprilTitle')}</p>
              <p className="text-gray-600">{t('datesAprilDesc')}</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
            <div className="bg-skatt-green text-white px-4 py-2 rounded-lg font-bold">
              {t('datesJune')}
            </div>
            <div>
              <p className="font-semibold">{t('datesJuneTitle')}</p>
              <p className="text-gray-600">{t('datesJuneDesc')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Kontakt */}
      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">{t('needMoreHelp')}</h2>
        <p className="text-lg text-gray-700 mb-4">
          {t('needMoreHelpText')}
        </p>
        <ul className="space-y-3 text-lg">
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-skatt-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span><strong>{t('phone')}:</strong> {t('phoneNumber')} ({t('phoneHours')})</span>
          </li>
          <li className="flex items-center gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-skatt-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <span><strong>{t('chat')}:</strong> {t('chatAvailable')}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
