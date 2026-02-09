'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function PersonvernContent() {
  const t = useTranslations('privacy');
  const tCommon = useTranslations('common');

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {tCommon('backToHome')}
      </Link>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">{t('title')}</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          {t('lastUpdated')}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('whoAreWe.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('whoAreWe.text1')}
          </p>
          <p className="text-gray-700">
            {t('whoAreWe.contact')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('dataCollection.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('dataCollection.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>{t('dataCollection.localSettings')}</li>
            <li>{t('dataCollection.cookieConsent')}</li>
          </ul>
          <p className="text-gray-700 mt-4">
            {t('dataCollection.notCollected')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>{t('dataCollection.personalInfo')}</li>
            <li>{t('dataCollection.ipAddress')}</li>
            <li>{t('dataCollection.serviceUsage')}</li>
            <li>{t('dataCollection.thirdPartyData')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('cookies.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('cookies.intro')}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('cookies.necessaryTitle')}</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.name')}</th>
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.purpose')}</th>
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.duration')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">{t('cookies.cookieConsent.name')}</td>
                  <td className="py-2">{t('cookies.cookieConsent.purpose')}</td>
                  <td className="py-2">{t('cookies.cookieConsent.duration')}</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">{t('cookies.favorites.name')}</td>
                  <td className="py-2">{t('cookies.favorites.purpose')}</td>
                  <td className="py-2">{t('cookies.favorites.duration')}</td>
                </tr>
                <tr>
                  <td className="py-2">{t('cookies.accessibility.name')}</td>
                  <td className="py-2">{t('cookies.accessibility.purpose')}</td>
                  <td className="py-2">{t('cookies.accessibility.duration')}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">{t('cookies.analyticsTitle')}</h3>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.name')}</th>
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.purpose')}</th>
                  <th className="pb-2 font-semibold">{t('cookies.tableHeaders.duration')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">{t('cookies.ga.name')}</td>
                  <td className="py-2">{t('cookies.ga.purpose')}</td>
                  <td className="py-2">{t('cookies.ga.duration')}</td>
                </tr>
                <tr>
                  <td className="py-2">{t('cookies.gid.name')}</td>
                  <td className="py-2">{t('cookies.gid.purpose')}</td>
                  <td className="py-2">{t('cookies.gid.duration')}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            {t('cookies.analyticsInfo')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('thirdParties.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('thirdParties.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
            <li>{t('thirdParties.googleAnalytics')}</li>
            <li>{t('thirdParties.vercelAnalytics')}</li>
            <li>{t('thirdParties.hosting')}</li>
          </ul>
          <p className="text-gray-700 mb-4">
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline">
              {t('thirdParties.vercelLink')}
            </a>
          </p>
          <p className="text-gray-700 font-medium">
            {t('thirdParties.noAds')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('yourRights.title')}</h2>
          <p className="text-gray-700 mb-4">
            {t('yourRights.intro')}
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>{t('yourRights.delete')}</li>
            <li>{t('yourRights.access')}</li>
            <li>{t('yourRights.withdraw')}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('security.title')}</h2>
          <p className="text-gray-700">
            {t('security.text')}
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('contactUs.title')}</h2>
          <p className="text-gray-700">
            {t('contactUs.text')}{' '}
            <a href={`mailto:${t('contactUs.email')}`} className="text-nav-blue hover:underline">
              {t('contactUs.email')}
            </a>
          </p>
        </section>

        <section className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">{t('updates.title')}</h2>
          <p className="text-gray-700">
            {t('updates.text')}
          </p>
        </section>
      </div>
    </div>
  );
}
