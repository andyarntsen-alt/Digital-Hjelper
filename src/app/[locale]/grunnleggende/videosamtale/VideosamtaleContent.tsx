'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function VideosamtalePage() {
  const t = useTranslations('guides.grunnleggende.videosamtale');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whyUseList = t.raw('whyUseList') as string[];
  const apps = t.raw('apps') as { name: string; desc: string }[];
  const troubleshooting = t.raw('troubleshooting') as { problem: string; solution: string }[];

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
          { label: tNav('grunnleggende'), href: '/grunnleggende' },
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
            <FavoriteButton guideId="grunnleggende-videosamtale" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">{t('longDescription')}</p>
      </div>

      {/* Hvorfor */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">{t('whyUseTitle')}</h2>
        <ul className="space-y-2 text-gray-700">
          {whyUseList.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Apper */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">{t('appsTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {apps.map((app, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-grunnleggende-purple">{app.name}</p>
              <p className="text-gray-600 text-sm">{app.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Feilsøking */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('troubleshootingTitle')}</h2>
        <div className="space-y-4">
          {troubleshooting.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">{item.problem}</p>
              <p className="text-gray-600 mt-1">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
}
