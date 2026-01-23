'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { useTranslations } from 'next-intl';

export default function DagpengerPage() {
  const t = useTranslations('guides.nav.dagpenger');
  const tNav = useTranslations('header');

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
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
          <h1 className="text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <FavoriteButton guideId="nav-dagpenger" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Krav-boks */}
      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">{t('whoCanGet')}</h2>
        <p className="text-gray-700 mb-4">{t('whoCanGetIntro')}</p>
        <ul className="space-y-2 text-gray-700">
          {requirements.map((req, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{req}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dokumenter du trenger */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">📄 {t('documentsTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="bg-nav-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{index + 1}</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Viktig informasjon */}
      <div className="mt-8 card border-l-4 border-nav-blue">
        <h2 className="text-xl font-bold mb-4">{t('importantTitle')}</h2>
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

      <RelatedGuides currentPath="/nav/dagpenger" category="nav" />
    </div>
  );
}
