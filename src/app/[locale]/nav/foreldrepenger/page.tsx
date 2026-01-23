'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function ForeldrepengerPage() {
  const t = useTranslations('guides.nav.foreldrepenger');
  const tNav = useTranslations('header');
  const locale = useLocale();

  // Build steps array from translations
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

  // Get conditions list
  const rightConditions = t.raw('rightConditions') as string[];

  return (
    <>
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT15M"
        locale={locale}
      />

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
            <FavoriteButton guideId="nav-foreldrepenger" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Oversikt */}
      <div className="card bg-pink-50 mb-8">
        <h2 className="text-xl font-bold mb-4">👶 {t('overview')}</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-nav-blue">49</p>
            <p className="text-gray-600">{t('weeksWithFull')}</p>
            <p className="text-sm text-gray-500">{t('weeksWithReduced')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-nav-blue">15</p>
            <p className="text-gray-600">{t('weeksFather')}</p>
            <p className="text-sm text-gray-500">{t('fatherQuota')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg text-center">
            <p className="text-3xl font-bold text-nav-blue">15</p>
            <p className="text-gray-600">{t('weeksMother')}</p>
            <p className="text-sm text-gray-500">{t('motherQuota')}</p>
          </div>
        </div>
        <p className="text-gray-700 mt-4 text-center">
          {t('remainingWeeks')}
        </p>
      </div>

      {/* Hvem kan få */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">{t('whoCanGet')}</h2>
        <div className="space-y-4">
          <div className="p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
            <p className="font-semibold text-green-800">{t('youHaveRight')}</p>
            <ul className="mt-2 space-y-1 text-green-700">
              {rightConditions.map((condition, index) => (
                <li key={index}>✓ {condition}</li>
              ))}
            </ul>
          </div>
          <div className="p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
            <p className="font-semibold text-yellow-800">{t('noRightTitle')}</p>
            <p className="text-yellow-700 mt-1">
              {t('noRightText')}
            </p>
          </div>
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Viktige datoer */}
      <div className="mt-8 card border-l-4 border-nav-blue">
        <h2 className="text-xl font-bold mb-4">📅 {t('importantDates')}</h2>
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
      </div>

      {/* Kalkulator-lenke */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">{t('calculatorTitle')}</p>
            <p className="text-green-700">
              {t('calculatorText')}
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
