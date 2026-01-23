'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function MinsidePage() {
  const t = useTranslations('guides.digital.minside');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

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

      <div className="max-w-4xl mx-auto px-4 py-12">
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
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-800">{t('title')}</h1>
          <PrintButton />
        </div>
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">{t('introTitle')}</h2>
        <p className="text-gray-700">{t('introText')}</p>
      </div>

      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-green-800">{t('servicesTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('serviceNAV')}</p>
            <p className="text-gray-600">{t('serviceNAVDesc')}</p>
            <p className="text-blue-600 text-sm mt-1">{t('serviceNAVUrl')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('serviceSkatt')}</p>
            <p className="text-gray-600">{t('serviceSkattDesc')}</p>
            <p className="text-blue-600 text-sm mt-1">{t('serviceSkattUrl')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('serviceHelse')}</p>
            <p className="text-gray-600">{t('serviceHelseDesc')}</p>
            <p className="text-blue-600 text-sm mt-1">{t('serviceHelseUrl')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('serviceAltinn')}</p>
            <p className="text-gray-600">{t('serviceAltinnDesc')}</p>
            <p className="text-blue-600 text-sm mt-1">{t('serviceAltinnUrl')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('serviceDigipost')}</p>
            <p className="text-gray-600">{t('serviceDigipostDesc')}</p>
            <p className="text-blue-600 text-sm mt-1">{t('serviceDigipostUrl')}</p>
          </div>
        </div>
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
