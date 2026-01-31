'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

const nyINorgeGuideKeys = [
  { key: 'folkeregisteret', href: '/ny-i-norge/folkeregisteret', difficulty: 'medium', time: 15 },
  { key: 'mobilnummer', href: '/ny-i-norge/mobilnummer', difficulty: 'easy', time: 10 },
  { key: 'bankkonto', href: '/ny-i-norge/bankkonto', difficulty: 'medium', time: 15 },
  { key: 'epost', href: '/ny-i-norge/epost', difficulty: 'easy', time: 10 },
];

export default function NyINorgeContent() {
  const t = useTranslations('services.nyINorge');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <div className="mb-8 sm:mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-emerald-600 text-white p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
            {t('title')}
          </h1>
        </div>
        <p className="text-lg sm:text-xl text-gray-600">
          {t('description')}
        </p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-3 text-gray-900">{t('welcomeTitle')}</h2>
        <p className="text-gray-700">{t('welcomeText')}</p>
      </div>

      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('guidesTitle')}</h2>

      <div className="grid sm:grid-cols-2 gap-4">
        {nyINorgeGuideKeys.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline group">
            <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">{t(`guides.${guide.key}.title`)}</h3>
                <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                  guide.difficulty === 'easy'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-amber-100 text-amber-700'
                }`}>
                  {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                </span>
              </div>
              <p className="text-gray-600 text-sm mb-4 line-clamp-2">{t(`guides.${guide.key}.description`)}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500 flex items-center gap-1.5">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {guide.time} {tCommon('minutes')}
                </span>
                <span className="text-emerald-600 font-medium flex items-center gap-1">
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

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
          <div>
            <p className="font-semibold text-gray-900">{t('tipTitle')}</p>
            <p className="text-gray-700">{t('tipText')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
