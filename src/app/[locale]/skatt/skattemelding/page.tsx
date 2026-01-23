'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { useTranslations } from 'next-intl';

export default function SkattemeldingPage() {
  const t = useTranslations('guides.skatt.skattemelding');
  const tNav = useTranslations('header');

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

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
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
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <FavoriteButton guideId="skatt-skattemelding" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Forklaring */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">🤔 {t('whatIsTitle')}</h2>
        <p className="text-gray-700 mb-4">
          {t('whatIsText1')}
        </p>
        <p className="text-gray-700">
          <strong>{t('whatIsText2')}</strong>
        </p>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Vanlige feil */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">⚠️ {t('commonErrorsTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {commonErrors.map((error, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>{error.title}:</strong> {error.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Frister */}
      <div className="mt-8 warning-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold text-yellow-800">{t('deadlineTitle')}</p>
            <p className="text-yellow-700">
              {t('deadlineText')}
            </p>
          </div>
        </div>
      </div>

      <RelatedGuides currentPath="/skatt/skattemelding" category="skatt" />
    </div>
  );
}
