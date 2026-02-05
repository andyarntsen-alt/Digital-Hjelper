'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { ChevronDownIcon } from '@/components/icons';
import { useTranslations, useLocale } from 'next-intl';

export default function SkattemeldingPage() {
  const t = useTranslations('guides.skatt.skattemelding');
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

  // Get arrays from translations
  const commonErrors = t.raw('commonErrors') as { title: string; text: string }[];

  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
    <HowToSchema
      name={t('title')}
      description={t('longDescription')}
      steps={howToSteps}
      totalTime="PT10M"
      locale={locale}
    />

    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('skatt'), href: '/skatt' },
          { label: t('title') }
        ]}
      />

      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2 text-sm sm:text-base">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('time')}</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs sm:text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-3 sm:gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <ShareButton />
            <FavoriteButton guideId="skatt-skattemelding" title={t('title')} />
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
          className="inline-flex items-center gap-3 bg-skatt-green text-white px-6 py-4 rounded-xl hover:bg-green-700 transition-colors no-underline text-lg font-semibold shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tCommon('startGuideNow')}
        </a>
      </div>

      {/* Forklaring */}
      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('whatIsTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-gray-700 mb-3 sm:mb-4 text-sm sm:text-base">
            {t('whatIsText1')}
          </p>
          <p className="text-gray-700 text-sm sm:text-base">
            <strong>{t('whatIsText2')}</strong>
          </p>
        </div>
      </details>

      <div id="guide-steps" className="scroll-mt-4">
        <StepGuide title={t('stepsTitle')} steps={steps} />
      </div>

      {/* Vanlige feil */}
      <details className="mt-6 sm:mt-8 bg-white border border-gray-200 rounded-xl group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-6 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('commonErrorsTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-6 pb-6">
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            {commonErrors.map((error, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>{error.title}:</strong> {error.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      {/* Frister */}
      <details className="mt-6 sm:mt-8 bg-gray-50 border border-gray-200 rounded-xl group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('deadlineTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-gray-700 text-sm sm:text-base">
            {t('deadlineText')}
          </p>
        </div>
      </details>

      <RelatedGuides
        currentPath="/skatt/skattemelding"
        category="skatt"
        crossCategoryLinks={[
          {
            href: '/nav/dagpenger',
            titleKey: 'nav.dagpenger.title',
            descriptionKey: 'nav.dagpenger.description',
          },
          {
            href: '/nav/sykepenger',
            titleKey: 'nav.sykepenger.title',
            descriptionKey: 'nav.sykepenger.description',
          },
        ]}
      />
    </div>
    </>
  );
}
