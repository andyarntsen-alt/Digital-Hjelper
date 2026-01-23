'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function OmPage() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const tFooter = useTranslations('footer');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t('title')}</h1>

      <div className="prose prose-lg max-w-none">
        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('mission')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('missionIntro')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('missionText')}
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('whoAreWe')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('whoAreWeText1')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('whoAreWeText2')}
          </p>
        </div>

        <div className="card mb-8">
          <h2 className="text-2xl font-bold mb-4">{t('accessibility')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('accessibilityIntro')}
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>{t('accessibilityFeatures.fontSize').split(' - ')[0]}</strong> - {t('accessibilityFeatures.fontSize').split(' - ')[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>{t('accessibilityFeatures.contrast').split(' - ')[0]}</strong> - {t('accessibilityFeatures.contrast').split(' - ')[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>{t('accessibilityFeatures.simpleLanguage').split(' - ')[0]}</strong> - {t('accessibilityFeatures.simpleLanguage').split(' - ')[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>{t('accessibilityFeatures.keyboard').split(' - ')[0]}</strong> - {t('accessibilityFeatures.keyboard').split(' - ')[1]}</span>
            </li>
            <li className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span><strong>{t('accessibilityFeatures.screenReader').split(' - ')[0]}</strong> - {t('accessibilityFeatures.screenReader').split(' - ')[1]}</span>
            </li>
          </ul>
        </div>

        <div className="card mb-8 bg-blue-50">
          <h2 className="text-2xl font-bold mb-4">{t('contactUs')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('contactText')}
          </p>
          <a
            href={`mailto:${tFooter('email')}`}
            className="inline-flex items-center gap-2 bg-nav-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-nav-dark transition-colors no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {tFooter('email')}
          </a>
        </div>

        <div className="card border-l-4 border-yellow-500 bg-yellow-50">
          <h2 className="text-xl font-bold mb-3">⚠️ {t('importantInfo')}</h2>
          <p className="text-gray-700 leading-relaxed">
            {t('importantInfoText')}
          </p>
        </div>
      </div>
    </div>
  );
}
