'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function SikkerhetPage() {
  const t = useTranslations('services.sikkerhet');
  const tCommon = useTranslations('common');
  const tGuides = useTranslations('guides.sikkerhet');

  const sikkerhetsGuider = [
    {
      guideKey: 'bankid',
      href: '/sikkerhet/bankid',
      time: '10 min',
    },
    {
      guideKey: 'svindel',
      href: '/sikkerhet/svindel',
      time: '15 min',
    },
    {
      guideKey: 'phishing',
      href: '/sikkerhet/phishing',
      time: '10 min',
    },
    {
      guideKey: 'passord',
      href: '/sikkerhet/passord',
      time: '8 min',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-12">
        <Link href="/" className="text-purple-600 hover:underline mb-4 inline-flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {tCommon('backToHome')}
        </Link>
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-purple-600 text-white p-4 rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('hubTitle')}</h1>
            <p className="text-xl text-gray-600">{t('hubSubtitle')}</p>
          </div>
        </div>
        <div className="bg-purple-50 border-l-4 border-purple-600 p-4 rounded-r-xl">
          <p className="text-lg text-gray-700">
            <strong>{t('didYouKnow')}</strong> {t('didYouKnowText')}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold mb-6">{t('selectGuide')}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {sikkerhetsGuider.map((guide, index) => (
          <Link key={index} href={guide.href} className="no-underline">
            <div className="card hover:shadow-xl transition-all duration-200 hover:border-purple-600 h-full">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-gray-800">{tGuides(`${guide.guideKey}.title`)}</h3>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {tGuides(`${guide.guideKey}.difficulty`)}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{tGuides(`${guide.guideKey}.description`)}</p>
              <div className="flex items-center justify-between">
                <span className="text-gray-500 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {tGuides(`${guide.guideKey}.time`)}
                </span>
                <span className="text-purple-600 font-semibold flex items-center gap-1">
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

      <div className="mt-12 card bg-red-50">
        <h2 className="text-2xl font-bold mb-4 text-red-800">{t('warningSignsTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            t('warningSigns.personalInfo'),
            t('warningSigns.urgent'),
            t('warningSigns.prize'),
            t('warningSigns.tooGood'),
            t('warningSigns.spelling'),
            t('warningSigns.strangeLinks'),
          ].map((sign, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-red-600 font-bold text-xl">!</span>
              <span>{sign}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 card bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">{t('beenScammedTitle')}</h2>
        <p className="text-lg text-gray-700 mb-4">{t('beenScammedText')}</p>
        <ol className="space-y-3 text-lg">
          {[
            t('beenScammedSteps.bank'),
            t('beenScammedSteps.police'),
            t('beenScammedSteps.password'),
            t('beenScammedSteps.idTheft'),
          ].map((step, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{index + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
