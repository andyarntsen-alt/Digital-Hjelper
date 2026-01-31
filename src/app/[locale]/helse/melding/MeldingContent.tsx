'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function MeldingPage() {
  const t = useTranslations('guides.helse.melding');
  const tNav = useTranslations('header');
  const locale = useLocale();

  // Build steps array from translations
  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  // Get arrays from translations
  const whenToUseGoodList = t.raw('whenToUseGoodList') as string[];
  const whenToUseBadList = t.raw('whenToUseBadList') as string[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  return (
    <>
      <GuideTracker />
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT5M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: tNav('helse'), href: '/helse' },
            { label: t('title') }
          ]}
        />

        <div className="mb-8">
          <div className="flex items-center gap-2 text-gray-500 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{t('time')}</span>
            <span className="mx-2">•</span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
            <div className="flex items-center gap-2">
              <PrintButton />
              <FavoriteButton guideId="helse-melding" title={t('title')} />
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-3">
            {t('longDescription')}
          </p>
        </div>

        {/* When to use - Good */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">{t('whenToUseGood')}</h2>
          <ul className="space-y-2 text-gray-700">
            {whenToUseGoodList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* When NOT to use */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('whenToUseBad')}</h2>
          <ul className="space-y-2 text-gray-700">
            {whenToUseBadList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <StepGuide title={t('stepsTitle')} steps={steps} />

        {/* FAQ */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">{item.q}</p>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
