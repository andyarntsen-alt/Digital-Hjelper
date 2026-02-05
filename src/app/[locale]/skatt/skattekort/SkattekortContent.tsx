'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { ChevronDownIcon } from '@/components/icons';
import { useTranslations, useLocale } from 'next-intl';

export default function SkattekortPage() {
  const t = useTranslations('guides.skatt.skattekort');
  const tNav = useTranslations('header');
  const tCommon = useTranslations('common');
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
  const cardTypes = t.raw('cardTypes') as { type: string; desc: string }[];
  const whenToChangeList = t.raw('whenToChangeList') as string[];

  return (
    <>
      <GuideTracker />
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT15M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: tNav('skatt'), href: '/skatt' },
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
            <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
            <div className="flex items-center gap-2">
              <PrintButton />
              <ShareButton />
              <FavoriteButton guideId="skatt-skattekort" title={t('title')} />
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-3">
            {t('longDescription')}
          </p>
        </div>

        {/* Quick Start Button */}
        <div className="print:hidden mb-6">
          <a
            href="#guide-steps"
            className="inline-flex items-center gap-3 bg-skatt-green text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-colors no-underline text-lg font-semibold shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tCommon('startGuideNow')}
          </a>
        </div>

        {/* What is a tax card */}
        <details className="card bg-green-50 mb-8 group">
          <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
            <h2 className="text-lg font-semibold text-gray-900">{t('whatIsTitle')}</h2>
            <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
          </summary>
          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <p className="text-gray-700 mb-4">
              {t('whatIsText')}
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {cardTypes.map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <p className="font-semibold text-skatt-green">{item.type}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </details>

        {/* When to change */}
        <details className="card mb-8 group">
          <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
            <h2 className="text-lg font-semibold text-gray-900">{t('whenToChangeTitle')}</h2>
            <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
          </summary>
          <div className="px-4 sm:px-5 pb-4 sm:pb-5">
            <div className="space-y-3">
              {whenToChangeList.map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </details>

        <div id="guide-steps" className="scroll-mt-4">
          <StepGuide title={t('stepsTitle')} steps={steps} />
        </div>

        {/* Too much/little tax */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="card border border-gray-200 rounded-xl">
            <h3 className="text-lg font-bold mb-3">{t('tooMuchTaxTitle')}</h3>
            <p className="text-gray-700 mb-3">
              {t('tooMuchTaxText')}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Løsning:</strong> {t('tooMuchTaxSolution')}
            </p>
          </div>
          <div className="card border border-gray-200 rounded-xl">
            <h3 className="text-lg font-bold mb-3">{t('tooLittleTaxTitle')}</h3>
            <p className="text-gray-700 mb-3">
              {t('tooLittleTaxText')}
            </p>
            <p className="text-gray-600 text-sm">
              <strong>Løsning:</strong> {t('tooLittleTaxSolution')}
            </p>
          </div>
        </div>

        {/* Tip */}
        <div className="mt-8 tip-box">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div>
              <p className="font-semibold text-green-800">{t('tipTitle')}</p>
              <p className="text-green-700">
                {t('tipText')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
