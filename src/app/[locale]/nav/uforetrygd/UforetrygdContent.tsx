'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function UforetrygdContent() {
  const t = useTranslations('guides.nav.uforetrygd');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const requirements = t.raw('requirements') as string[];
  const documents = t.raw('documents') as string[];
  const beforeApplying = t.raw('beforeApplying') as string[];
  const afterApplying = t.raw('afterApplying') as { title: string; description: string }[];
  const important = t.raw('important') as string[];

  return (
    <GuideLayout
      guideId="nav-uforetrygd"
      translationNamespace="guides.nav.uforetrygd"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
    >
      {/* Hvem kan fa - pre-step section */}
      <CollapsibleSection title={t('whoCanGet')} className="mb-4">
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
      </CollapsibleSection>

      {/* For du soker - pre-step section */}
      <CollapsibleSection title={t('beforeApplyingTitle')} className="mb-4">
          <p className="text-gray-700 mb-4">{t('beforeApplyingText')}</p>
          <ul className="space-y-2 text-gray-700">
            {beforeApplying.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Dokumenter du trenger - pre-step section */}
      <CollapsibleSection title={t('documentsTitle')} className="mb-4">
          <ul className="space-y-3 text-gray-700">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-nav-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{index + 1}</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Etter du har sokt - post-step section */}
      <CollapsibleSection title={t('afterApplyingTitle')} className="mt-8">
          <div className="space-y-4">
            {afterApplying.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-gray-600 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Hvor mye far du - post-step section */}
      <CollapsibleSection title={t('howMuchTitle')} className="mt-8">
          <p className="text-gray-700">{t('howMuchText')}</p>
      </CollapsibleSection>

      {/* Viktig a vite - post-step section */}
      <CollapsibleSection title={t('importantTitle')} className="mt-8">
          <ul className="space-y-3 text-gray-700">
            {important.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Kontakt NAV - tip box */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">Trenger du hjelp?</p>
            <p className="text-green-700">
              Ring NAV på 55 55 33 33 for å snakke med en veileder om din situasjon. De kan hjelpe deg å vurdere om uføretrygd er riktig for deg.
            </p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
