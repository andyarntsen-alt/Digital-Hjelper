'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { ChevronDownIcon } from '@/components/icons';
import { useTranslations, useLocale } from 'next-intl';

export default function ForeldrepengerPage() {
  const t = useTranslations('guides.nav.foreldrepenger');
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

  // Get conditions list
  const rightConditions = t.raw('rightConditions') as string[];

  return (
    <>
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
          { label: tNav('nav'), href: '/nav' },
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
            <FavoriteButton guideId="nav-foreldrepenger" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Quick Start Button */}
      <div className="print:hidden mb-6">
        <a
          href="#guide-steps"
          className="inline-flex items-center gap-3 bg-nav-blue text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors no-underline text-lg font-semibold shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tCommon('startGuideNow')}
        </a>
      </div>

      {/* Oversikt */}
      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('overview')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">49</p>
              <p className="text-gray-600">{t('weeksWithFull')}</p>
              <p className="text-sm text-gray-500">{t('weeksWithReduced')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">15</p>
              <p className="text-gray-600">{t('weeksFather')}</p>
              <p className="text-sm text-gray-500">{t('fatherQuota')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">15</p>
              <p className="text-gray-600">{t('weeksMother')}</p>
              <p className="text-sm text-gray-500">{t('motherQuota')}</p>
            </div>
          </div>
          <p className="text-gray-700 text-center">
            {t('remainingWeeks')}
          </p>
        </div>
      </details>

      {/* Hvem kan få */}
      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('whoCanGet')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900">{t('youHaveRight')}</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                {rightConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900">{t('noRightTitle')}</p>
              <p className="text-gray-700 mt-1">
                {t('noRightText')}
              </p>
            </div>
          </div>
        </div>
      </details>

      <div id="guide-steps" className="scroll-mt-4">
        <StepGuide title={t('stepsTitle')} steps={steps} />
      </div>

      {/* Viktige datoer */}
      <details className="mt-8 bg-gray-50 border border-gray-200 rounded-xl group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('importantDates')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">4</div>
              <p>{t('date4WeeksBefore')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">3</div>
              <p>{t('date3WeeksBefore')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">T</div>
              <p>{t('dateTermin')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">6</div>
              <p>{t('date6WeeksAfter')}</p>
            </div>
          </div>
        </div>
      </details>

      {/* Kalkulator-lenke */}
      <details className="mt-8 bg-gray-50 border border-gray-200 rounded-xl group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('calculatorTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-gray-700">
                {t('calculatorText')}
              </p>
            </div>
          </div>
        </div>
      </details>
      </div>
    </>
  );
}
