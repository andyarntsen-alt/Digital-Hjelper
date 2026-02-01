'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function HelseLoggInnContent() {
  const t = useTranslations('guides.helse.loggInn');
  const tNav = useTranslations('header');
  const locale = useLocale();

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

  const servicesRaw = t.raw('services') as string[];
  const problemsListRaw = t.raw('problemsList') as string[];

  return (
    <>
      <GuideTracker />
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
            <ShareButton />
            <FavoriteButton guideId="helse-logg-inn" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('beforeYouStart')}</h2>
        <p className="text-gray-700">{t('beforeYouStartText')}</p>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('servicesTitle')}</h2>
        <ul className="space-y-2">
          {servicesRaw.map((service, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('problemsTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('problemsText')}</p>
        <ul className="space-y-2">
          {problemsListRaw.map((problem, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-red-600 mt-1">•</span>
              <span>{problem}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
