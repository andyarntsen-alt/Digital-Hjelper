'use client';

import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function SkattemeldingPage() {
  const t = useTranslations('guides.skatt.skattemelding');

  // Build steps array from translations
  const steps = [];
  for (let i = 0; i < 8; i++) {
    const step: { title: string; description: string; tip?: string; warning?: string } = {
      title: t(`steps.${i}.title`),
      description: t(`steps.${i}.description`),
    };
    const tip = t.raw(`steps.${i}.tip`);
    if (tip && typeof tip === 'string') {
      step.tip = tip;
    }
    const warning = t.raw(`steps.${i}.warning`);
    if (warning && typeof warning === 'string') {
      step.warning = warning;
    }
    steps.push(step);
  }

  // Get arrays from translations
  const commonErrors = t.raw('commonErrors') as { title: string; text: string }[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/skatt" className="text-skatt-green hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        {t('backToGuides')}
      </Link>

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('time')}</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600">
          {t('longDescription')}
        </p>
      </div>

      {/* Forklaring */}
      <div className="card bg-green-50 mb-8">
        <h2 className="text-xl font-bold mb-4">🤔 {t('whatIsTitle')}</h2>
        <p className="text-gray-700 mb-4">
          {t('whatIsText1')}
        </p>
        <p className="text-gray-700">
          <strong>{t('whatIsText2')}</strong>
        </p>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Vanlige feil */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">⚠️ {t('commonErrorsTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {commonErrors.map((error, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-500 font-bold">•</span>
              <span><strong>{error.title}:</strong> {error.text}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Frister */}
      <div className="mt-8 warning-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-semibold text-yellow-800">{t('deadlineTitle')}</p>
            <p className="text-yellow-700">
              {t('deadlineText')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
