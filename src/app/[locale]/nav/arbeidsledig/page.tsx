'use client';

import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function ArbeidsledigPage() {
  const t = useTranslations('guides.nav.arbeidsledig');

  // Build steps array from translations
  const steps = [];
  for (let i = 0; i < 10; i++) {
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
  const whyReasons = t.raw('whyReasons') as { icon: string; title: string; text: string }[];
  const prepareItems = t.raw('prepareItems') as string[];
  const afterSteps = t.raw('afterSteps') as { title: string; text: string }[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/nav" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
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

      {/* Hvorfor registrere seg */}
      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4">{t('whyRegister')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {whyReasons.map((reason, index) => (
            <div key={index} className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">
                {reason.icon === 'money' && '💰'}
                {reason.icon === 'search' && '🔍'}
                {reason.icon === 'education' && '📚'}
                {reason.icon === 'support' && '🤝'}
              </div>
              <p className="font-semibold">{reason.title}</p>
              <p className="text-gray-600 text-sm">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Viktig før du starter */}
      <div className="warning-box mb-8">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
          <div>
            <p className="font-semibold text-yellow-800">{t('warningTitle')}</p>
            <p className="text-yellow-700">
              {t('warningText')}
            </p>
          </div>
        </div>
      </div>

      {/* Ha dette klart */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">📋 {t('prepareTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {prepareItems.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Hva skjer etterpå */}
      <div className="mt-8 card border-l-4 border-green-500">
        <h2 className="text-xl font-bold mb-4">✅ {t('afterTitle')}</h2>
        <div className="space-y-4 text-gray-700">
          {afterSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="bg-green-100 text-green-700 rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">{index + 1}</div>
              <div>
                <p className="font-semibold">{step.title}</p>
                <p className="text-gray-600">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
