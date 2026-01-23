'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function AltinnPage() {
  const t = useTranslations('guides.digital.altinn');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const commonUsesRaw = t.raw('commonUses') as string[];
  const tipsRaw = t.raw('tips') as string[];

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
          { label: tNav('digital'), href: '/digital' },
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
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">{t('whatIsTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('whatIsText1')}</p>
        <p className="text-gray-700">{t('whatIsText2')}</p>
      </div>

      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-green-800">{t('commonUsesTitle')}</h2>
        <ul className="space-y-2">
          {commonUsesRaw.map((use, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-green-600">✓</span>
              <span>{use}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      <div className="mt-8 card bg-yellow-50">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">{t('tipsTitle')}</h2>
        <ul className="space-y-2">
          {tipsRaw.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-yellow-600 mt-1">💡</span>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}
