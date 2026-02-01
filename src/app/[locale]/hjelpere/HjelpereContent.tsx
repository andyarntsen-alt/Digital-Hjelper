'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';
import FeedbackFormLight from '@/components/FeedbackFormLight';

export default function HjelpereContent() {
  const t = useTranslations('services.hjelpere');
  const tCommon = useTranslations('common');

  const popularGuides = [
    { href: '/nav/logg-inn', title: 'Logge inn på NAV', icon: 'login' },
    { href: '/nav/meldekort', title: 'Sende meldekort', icon: 'card' },
    { href: '/skatt/skattemelding', title: 'Levere skattemelding', icon: 'document' },
    { href: '/id/minid', title: 'Opprette MinID', icon: 'id' },
    { href: '/id/bankid', title: 'Sette opp BankID', icon: 'shield' },
    { href: '/helse/resepter', title: 'Fornye resepter', icon: 'health' },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 sm:py-12">
      <Link href="/" className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      {/* Hero */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gray-100 p-3 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">{t('heroTitle')}</h1>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          {t('heroSubtitle')}
        </p>
      </div>

      {/* How to use - 4 cards */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('howToUse')}</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{t('showOnScreen')}</h3>
            <p className="text-sm text-gray-600">{t('showOnScreenDesc')}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{t('print')}</h3>
            <p className="text-sm text-gray-600">{t('printDesc')}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{t('shareLinks')}</h3>
            <p className="text-sm text-gray-600">{t('shareLinksDesc')}</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-xl p-4 text-center">
            <div className="bg-gray-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{t('useSearch')}</h3>
            <p className="text-sm text-gray-600">{t('useSearchDesc')}</p>
          </div>
        </div>
      </section>

      {/* Target groups */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('targetGroups')}</h2>
        <div className="space-y-4">
          {/* Libraries */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forLibraries')}</h3>
                <p className="text-gray-600 mb-3">{t('forLibrariesDesc')}</p>
                <ul className="space-y-1.5">
                  {(t.raw('forLibrariesTips') as string[]).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Municipalities */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forMunicipalities')}</h3>
                <p className="text-gray-600 mb-3">{t('forMunicipalitiesDesc')}</p>
                <ul className="space-y-1.5">
                  {(t.raw('forMunicipalitiesTips') as string[]).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Organizations */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forOrganizations')}</h3>
                <p className="text-gray-600 mb-3">{t('forOrganizationsDesc')}</p>
                <ul className="space-y-1.5">
                  {(t.raw('forOrganizationsTips') as string[]).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Family */}
          <div className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start gap-4">
              <div className="bg-gray-100 p-2.5 rounded-lg flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">{t('forFamily')}</h3>
                <p className="text-gray-600 mb-3">{t('forFamilyDesc')}</p>
                <ul className="space-y-1.5">
                  {(t.raw('forFamilyTips') as string[]).map((tip, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{t('tipsTitle')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{t('tip1Title')}</h3>
              <p className="text-sm text-gray-600">{t('tip1Desc')}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{t('tip2Title')}</h3>
              <p className="text-sm text-gray-600">{t('tip2Desc')}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{t('tip3Title')}</h3>
              <p className="text-sm text-gray-600">{t('tip3Desc')}</p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-xl p-4 flex items-start gap-3">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{t('tip4Title')}</h3>
              <p className="text-sm text-gray-600">{t('tip4Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular guides */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{t('popularGuides')}</h2>
        <p className="text-gray-600 mb-6">{t('popularGuidesDesc')}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {popularGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-nav-blue hover:shadow-sm transition-all no-underline group"
            >
              <div className="bg-gray-100 group-hover:bg-blue-50 p-2 rounded-lg transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500 group-hover:text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <span className="text-gray-900 font-medium group-hover:text-nav-blue">{guide.title}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Feedback */}
      <section className="mb-8">
        <div className="bg-gray-50 border border-gray-100 rounded-xl p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('contactTitle')}</h2>
          <p className="text-gray-600">{t('contactDesc')}</p>
        </div>
        <FeedbackFormLight />
      </section>
    </div>
  );
}
