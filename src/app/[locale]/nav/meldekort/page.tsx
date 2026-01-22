'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import StepGuide from '@/components/StepGuide';
import { useTranslations } from 'next-intl';

export default function MeldekortPage() {
  const t = useTranslations('guides.nav.meldekort');
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
  const calendarSteps = t.raw('calendarSteps') as { label: string; text: string; color: string }[];
  const faq = t.raw('faq') as { question: string; answer: string }[];

  const colorClasses: { [key: string]: string } = {
    blue: 'bg-nav-blue text-white',
    green: 'bg-green-600 text-white',
    yellow: 'bg-yellow-500 text-white',
    purple: 'bg-purple-600 text-white',
  };

  return (
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
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <FavoriteButton guideId="nav-meldekort" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600 mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Viktig advarsel */}
      <div className="warning-box mb-8">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="font-semibold text-yellow-800">{t('deadlineTitle')}</p>
            <p className="text-yellow-700">
              {t('deadlineText')}
            </p>
          </div>
        </div>
      </div>

      {/* Kalender-oversikt */}
      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">📅 {t('calendarTitle')}</h2>
        <div className="space-y-3 text-gray-700">
          {calendarSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className={`${colorClasses[step.color]} px-3 py-1 rounded font-bold text-sm`}>{step.label}</div>
              <span>{step.text}</span>
            </div>
          ))}
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Vanlige spørsmål */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">❓ {t('faqTitle')}</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold mb-1">{item.question}</p>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
