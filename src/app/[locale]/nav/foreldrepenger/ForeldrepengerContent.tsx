'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function ForeldrepengerContent() {
  const t = useTranslations('guides.nav.foreldrepenger');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get conditions list
  const rightConditions = t.raw('rightConditions') as string[];

  return (
    <GuideLayout
      guideId="nav-foreldrepenger"
      translationNamespace="guides.nav.foreldrepenger"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
    >
      {/* Oversikt - pre-step section with stats grid */}
      <CollapsibleSection title={t('overview')} className="mb-4">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">49</p>
              <p className="text-gray-600">{t('weeksWithFull')}</p>
              <p className="text-sm text-gray-500">{t('weeksWithReduced')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">15</p>
              <p className="text-gray-600">{t('weeksFather')}</p>
              <p className="text-sm text-gray-500">{t('fatherQuota')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg text-center border border-gray-200">
              <p className="text-3xl font-bold text-nav-blue">15</p>
              <p className="text-gray-600">{t('weeksMother')}</p>
              <p className="text-sm text-gray-500">{t('motherQuota')}</p>
            </div>
          </div>
          <p className="text-gray-700 text-center">
            {t('remainingWeeks')}
          </p>
      </CollapsibleSection>

      {/* Hvem kan fa - pre-step section */}
      <CollapsibleSection title={t('whoCanGet')} className="mb-4">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900">{t('youHaveRight')}</p>
              <ul className="mt-2 space-y-1 text-gray-700">
                {rightConditions.map((condition, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    <span>{condition}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg border border-gray-200">
              <p className="font-semibold text-gray-900">{t('noRightTitle')}</p>
              <p className="text-gray-700 mt-1">
                {t('noRightText')}
              </p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Viktige datoer - post-step section */}
      <CollapsibleSection title={t('importantDates')} className="mt-8">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">4</div>
              <p>{t('date4WeeksBefore')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">3</div>
              <p>{t('date3WeeksBefore')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">T</div>
              <p>{t('dateTermin')}</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="bg-nav-blue text-white px-3 py-1 rounded text-sm font-bold">6</div>
              <p>{t('date6WeeksAfter')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Kalkulator-lenke - post-step section */}
      <CollapsibleSection title={t('calculatorTitle')} className="mt-8">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-gray-700">
                {t('calculatorText')}
              </p>
            </div>
          </div>
      </CollapsibleSection>
    </GuideLayout>
  );
}
