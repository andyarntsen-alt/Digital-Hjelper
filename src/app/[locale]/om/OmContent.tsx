'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { PersonSchema, OrganizationSchema } from '@/components/StructuredData';

export default function OmContent() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <>
      {/* E-E-A-T: Person Schema for author */}
      <PersonSchema
        name="Andreas"
        jobTitle={locale === 'no' ? 'Grunnlegger' : locale === 'en' ? 'Founder' : 'Zasnovnyk'}
        description={locale === 'no' ? 'Hjelper nordmenn med a navigere offentlige digitale tjenester' : locale === 'en' ? 'Helps Norwegians navigate public digital services' : 'Dopomahaye norvezhtcyam oriyentuvatysya v derzhavnykh tsyfrovykh posluhakh'}
        url={`/${locale}/om`}
        sameAs={["https://www.linkedin.com/in/andreas-arntsen-85832929a/"]}
      />
      <OrganizationSchema locale={locale} />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-6">{t('title')}</h1>

        <div className="prose prose-lg max-w-none">
          {/* E-E-A-T: Forfatter-profil seksjon */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-nav-blue text-white p-3 rounded-xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{t('whoBehind')}</h2>
                <p className="text-xl font-semibold text-nav-blue mb-1">Andreas</p>
                <p className="text-gray-600 mb-3">{t('founder')}</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('founderBio')}
                </p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://www.linkedin.com/in/andreas-arntsen-85832929a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-nav-blue hover:underline"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Who is this for? */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('whoIsItFor')}</h2>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="bg-amber-100 text-amber-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forElderly')}</h3>
                <p className="text-gray-600 text-sm">{t('forElderlyDesc')}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="bg-emerald-100 text-emerald-600 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forNewcomers')}</h3>
                <p className="text-gray-600 text-sm">{t('forNewcomersDesc')}</p>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                <div className="bg-blue-100 text-nav-blue w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forHelpers')}</h3>
                <p className="text-gray-600 text-sm">{t('forHelpersDesc')}</p>
              </div>
            </div>
          </div>

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

          {/* E-E-A-T: Kilder og troverdighet */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('ourSources')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('sourcesIntro')}
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="https://www.nav.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('sourceNav')}
                </a>
              </li>
              <li>
                <a href="https://www.helsenorge.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('sourceHelsenorge')}
                </a>
              </li>
              <li>
                <a href="https://www.skatteetaten.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  {t('sourceSkatteetaten')}
                </a>
              </li>
            </ul>
          </div>

          {/* Sist oppdatert - E-E-A-T signal */}
          <p className="text-sm text-gray-500 mb-4">
            <strong>{t('lastUpdated')}:</strong> {locale === 'no' ? 'Januar 2026' : locale === 'en' ? 'January 2026' : 'Sichen 2026'}
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">{t('importantInfo')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('importantInfoText')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
