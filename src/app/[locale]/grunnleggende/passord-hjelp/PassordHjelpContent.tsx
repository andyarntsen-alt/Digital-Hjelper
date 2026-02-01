'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

export default function PassordHjelpPage() {
  const t = useTranslations('guides.grunnleggende.passordHjelp');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('forgotPasswordSteps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const goodPasswordTips = t.raw('goodPasswordTips') as string[];

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
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <ShareButton />
            <FavoriteButton guideId="grunnleggende-passord" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">{t('longDescription')}</p>
      </div>

      {/* Hvorfor viktig */}
      <div className="card bg-gray-50 border border-gray-200 mb-8">
        <h2 className="text-xl font-bold mb-2">{t('whyImportantTitle')}</h2>
        <p className="text-gray-700">{t('whyImportantText')}</p>
      </div>

      {/* Gode passord */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">{t('goodPasswordTitle')}</h2>
        <ul className="space-y-2 text-gray-700">
          {goodPasswordTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('forgotPasswordTitle')} steps={steps} />

      {/* BankID merknad */}
      <div className="mt-8 card border border-gray-200 rounded-xl">
        <h2 className="text-xl font-bold mb-2">{t('bankidNoteTitle')}</h2>
        <p className="text-gray-700">{t('bankidNoteText')}</p>
      </div>
    </div>
    </>
  );
}
