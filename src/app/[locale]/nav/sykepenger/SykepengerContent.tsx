'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function SykepengerContent() {
  const t = useTranslations('guides.nav.sykepenger');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get requirements list
  const requirements = t.raw('requirements') as string[];

  return (
    <GuideLayout
      guideId="nav-sykepenger"
      translationNamespace="guides.nav.sykepenger"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
    >
      {/* Hvem kan fa - pre-step section */}
      <CollapsibleSection title={t('whoCanGet')} className="mb-4">
          <ul className="space-y-2 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Viktig a vite - pre-step section with cards */}
      <CollapsibleSection title={t('importantToKnow')} className="mb-4">
          <div className="space-y-4 text-gray-700">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold">{t('employerPeriod')}</p>
              <p>{t('employerPeriodText')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold">{t('navPeriod')}</p>
              <p>{t('navPeriodText')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold">{t('howMuch')}</p>
              <p>{t('howMuchText')}</p>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold">{t('howLong')}</p>
              <p>{t('howLongText')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Gradert sykemelding - post-step section */}
      <CollapsibleSection title={t('gradedTitle')} className="mt-8">
          <p className="text-gray-700 mb-4">
            {t('gradedIntro')}
          </p>
          <ul className="space-y-2 text-gray-700 mb-4">
            <li>&#x2022; <strong>{t('graded50')}</strong></li>
            <li>&#x2022; <strong>{t('graded80')}</strong></li>
          </ul>
          <p className="text-gray-700">
            {t('gradedBenefit')}
          </p>
      </CollapsibleSection>
    </GuideLayout>
  );
}
