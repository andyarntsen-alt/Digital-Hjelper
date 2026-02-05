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

export default function DagpengerContent() {
  const t = useTranslations('guides.nav.dagpenger');
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

  // Get requirements and documents lists
  const requirements = t.raw('requirements') as string[];
  const documents = t.raw('documents') as string[];

  // Prepare HowTo schema for Google rich snippets
  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      {/* HowTo Structured Data for Google Rich Snippets */}
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
            <FavoriteButton guideId="nav-dagpenger" title={t('title')} />
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

      {/* Krav-boks */}
      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('whoCanGet')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-gray-700 mb-4">{t('whoCanGetIntro')}</p>
          <ul className="space-y-2 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      {/* Dokumenter du trenger */}
      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('documentsTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <ul className="space-y-3 text-gray-700">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-nav-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{index + 1}</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
        </div>
      </details>

      <div id="guide-steps" className="scroll-mt-4">
        <StepGuide title={t('stepsTitle')} steps={steps} />
      </div>

      {/* Viktig informasjon */}
      <details className="mt-8 bg-gray-50 border border-gray-200 rounded-xl group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('importantTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantMeldekort')}</p>
                <p>{t('importantMeldekortText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantJobsearch')}</p>
                <p>{t('importantJobsearchText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantAmount')}</p>
                <p>{t('importantAmountText')}</p>
              </div>
            </div>
          </div>
        </div>
      </details>

        <RelatedGuides
          currentPath="/nav/dagpenger"
          category="nav"
          crossCategoryLinks={[
            {
              href: '/skatt/skattemelding',
              titleKey: 'skatt.skattemelding.title',
              descriptionKey: 'skatt.skattemelding.description',
            },
            {
              href: '/sikkerhet/bankid',
              titleKey: 'sikkerhet.bankid.title',
              descriptionKey: 'sikkerhet.bankid.description',
            },
          ]}
        />
      </div>
    </>
  );
}
