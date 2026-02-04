'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import FeedbackFormLight from '@/components/FeedbackFormLight';

export default function OrganisasjonerContent() {
  const t = useTranslations('organizations');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      {/* Hero */}
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('heroTitle')}</h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          {t('heroSubtitle')}
        </p>

        {/* Stats badges */}
        <div className="flex flex-wrap gap-3">
          <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            50+ {t('guides')}
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            6 {t('languages')}
          </div>
          <div className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium text-gray-700">
            {t('alwaysFree')}
          </div>
        </div>
      </div>

      {/* Benefits - consistent gray style */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('benefitsTitle')}</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('benefit1Title')}</h3>
            <p className="text-sm text-gray-400">{t('benefit1Desc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('benefit2Title')}</h3>
            <p className="text-sm text-gray-400">{t('benefit2Desc')}</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('benefit3Title')}</h3>
            <p className="text-sm text-gray-400">{t('benefit3Desc')}</p>
          </div>
        </div>
      </section>

      {/* Use cases - gray icons */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('useCasesTitle')}</h2>
        <div className="grid sm:grid-cols-2 gap-6">
          {/* Libraries */}
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('librariesTitle')}</h3>
            <p className="text-sm text-gray-400">{t('librariesDesc')}</p>
          </div>

          {/* NAV offices */}
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('navTitle')}</h3>
            <p className="text-sm text-gray-400">{t('navDesc')}</p>
          </div>

          {/* Municipalities */}
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('municipalitiesTitle')}</h3>
            <p className="text-sm text-gray-400">{t('municipalitiesDesc')}</p>
          </div>

          {/* Volunteer centers */}
          <div className="flex flex-col items-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3 className="font-medium text-gray-900 mb-1">{t('volunteersTitle')}</h3>
            <p className="text-sm text-gray-400">{t('volunteersDesc')}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('featuresTitle')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature1')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature2')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature3')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature4')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature5')}</span>
          </div>
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-700">{t('feature6')}</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mb-8">
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('ctaTitle')}</h2>
          <p className="text-gray-600 mb-6">{t('ctaDesc')}</p>
          <a
            href="mailto:kontakt@lettdigital.no?subject=Samarbeid%20med%20LettDigital"
            className="inline-flex items-center gap-2 bg-nav-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors no-underline"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {t('ctaButton')}
          </a>
        </div>
      </section>

      {/* Feedback */}
      <section>
        <FeedbackFormLight />
      </section>
    </div>
  );
}
