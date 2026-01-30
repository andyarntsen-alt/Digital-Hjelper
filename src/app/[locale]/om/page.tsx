'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { PersonSchema, OrganizationSchema } from '@/components/StructuredData';

export default function OmPage() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <>
      {/* E-E-A-T: Person Schema for author */}
      <PersonSchema
        name="Andreas"
        jobTitle="Grunnlegger"
        description="Hjelper nordmenn med å navigere offentlige digitale tjenester"
        url={`/${locale}/om`}
        sameAs={["https://www.linkedin.com/in/andreas-arntsen-85832929a/"]}
      />
      <OrganizationSchema locale={locale} />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6">{t('title')}</h1>

        <div className="prose prose-lg max-w-none">
          {/* E-E-A-T: Forfatter-profil seksjon */}
          <div className="card mb-8 bg-gradient-to-r from-blue-50 to-white border-l-4 border-nav-blue">
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              <div className="bg-nav-blue text-white p-4 rounded-full flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2 text-gray-800">Hvem står bak?</h2>
                <p className="text-xl font-semibold text-nav-blue mb-1">Andreas</p>
                <p className="text-gray-600 mb-3">Grunnlegger</p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Jeg brenner for at alle skal kunne delta i det digitale samfunnet,
                  uavhengig av alder eller teknisk bakgrunn.
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
          <div className="card mb-8">
            <h2 className="text-2xl font-bold mb-4">📚 Våre kilder</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All informasjon på LettDigital er basert på offisielle kilder:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a href="https://www.nav.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  nav.no - Arbeids- og velferdsetaten
                </a>
              </li>
              <li>
                <a href="https://www.helsenorge.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  helsenorge.no - Helsedirektoratet
                </a>
              </li>
              <li>
                <a href="https://www.skatteetaten.no" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  skatteetaten.no - Skatteetaten
                </a>
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

          {/* Sist oppdatert - E-E-A-T signal */}
          <p className="text-sm text-gray-500 mb-4">
            <strong>Sist oppdatert:</strong> Januar 2026
          </p>

          <div className="card border-l-4 border-yellow-500 bg-yellow-50">
            <h2 className="text-xl font-bold mb-3">⚠️ {t('importantInfo')}</h2>
            <p className="text-gray-700 leading-relaxed">
              {t('importantInfoText')}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
