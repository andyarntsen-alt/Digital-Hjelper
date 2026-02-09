'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { PersonSchema, OrganizationSchema } from '@/components/StructuredData';
import FeedbackFormLight from '@/components/FeedbackFormLight';

export default function OmContent() {
  const t = useTranslations('about');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      {/* E-E-A-T: Person Schema for author */}
      <PersonSchema
        name="Andreas Arntsen"
        jobTitle={locale === 'no' ? 'Grunnlegger' : locale === 'en' ? 'Founder' : 'Zasnovnyk'}
        description={locale === 'no' ? 'Hjelper nordmenn med a navigere offentlige digitale tjenester' : locale === 'en' ? 'Helps Norwegians navigate public digital services' : 'Dopomahaye norvezhtcyam oriyentuvatysya v derzhavnykh tsyfrovykh posluhakh'}
        url={`/${locale}/om`}
        sameAs={["https://www.linkedin.com/in/andreas-arntsen-85832929a/", "https://www.facebook.com/profile.php?id=61586644786681"]}
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
                <h2 className="text-2xl font-bold mb-2 text-gray-800">{t('founder')}</h2>
                <p className="text-xl font-semibold text-nav-blue mb-3">Andreas Arntsen</p>
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
                  <a
                    href="https://www.facebook.com/profile.php?id=61586644786681"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-nav-blue hover:underline"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Who is this for? */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('whoIsItFor')}</h2>
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto text-gray-500">
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
                </svg>
                <span className="font-medium mb-1">{t('forElderly')}</span>
                <span className="text-sm text-gray-400">{t('forElderlyDesc')}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium mb-1">{t('forNewcomers')}</span>
                <span className="text-sm text-gray-400">{t('forNewcomersDesc')}</span>
              </div>
              <div className="flex flex-col items-center text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-medium mb-1">{t('forHelpers')}</span>
                <span className="text-sm text-gray-400">{t('forHelpersDesc')}</span>
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

          {/* E-E-A-T: Kontaktinformasjon */}
          <div className="bg-nav-blue/5 border border-nav-blue/20 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('contactUs')}</h2>
            <p className="text-gray-700 leading-relaxed mb-4">{t('contactText')}</p>
            <a
              href="mailto:kontakt@lettdigital.no"
              className="inline-flex items-center gap-2 bg-nav-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors no-underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              kontakt@lettdigital.no
            </a>
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

          {/* Tilbakemeldingsskjema */}
          <div className="mb-8">
            <FeedbackFormLight />
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
