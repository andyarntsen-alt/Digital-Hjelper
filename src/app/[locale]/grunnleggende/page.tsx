'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const grunnleggendeGuideKeys = [
  { key: 'smarttelefon', href: '/grunnleggende/smarttelefon', difficulty: 'easy', time: 15 },
  { key: 'nettleser', href: '/grunnleggende/nettleser', difficulty: 'easy', time: 10 },
  { key: 'videosamtale', href: '/grunnleggende/videosamtale', difficulty: 'medium', time: 15 },
  { key: 'passordHjelp', href: '/grunnleggende/passord-hjelp', difficulty: 'easy', time: 10 },
  { key: 'faHjelp', href: '/grunnleggende/fa-hjelp', difficulty: 'easy', time: 5 },
];

export default function GrunnleggendePage() {
  const t = useTranslations('services.grunnleggende');
  const tGuides = useTranslations('guides.grunnleggende');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="mb-12">
        <Link href="/" className="text-grunnleggende-purple hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-grunnleggende-purple text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
            <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
          </div>
        </div>
        <div className="bg-purple-50 border-l-4 border-grunnleggende-purple p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
          </p>
        </div>
      </div>

      {/* Veiledninger */}
      <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {grunnleggendeGuideKeys.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-grunnleggende-purple h-full">
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
                <span className="text-grunnleggende-purple font-semibold flex items-center gap-1">
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

      {/* Hjelp */}
      <div className="mt-12 card bg-purple-50">
        <h2 className="text-2xl font-bold mb-4">{t('needMoreHelp')}</h2>
        <p className="text-lg text-gray-700 mb-4">
          {t('needMoreHelpText')}
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-grunnleggende-purple">{t('seniornett')}</p>
            <p className="text-gray-600 text-sm">{t('seniornettDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-grunnleggende-purple">{t('library')}</p>
            <p className="text-gray-600 text-sm">{t('libraryDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-grunnleggende-purple">{t('dataHjelpen')}</p>
            <p className="text-gray-600 text-sm">{t('dataHjelpenDesc')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
