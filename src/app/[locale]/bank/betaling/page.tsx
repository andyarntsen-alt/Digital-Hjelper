'use client';

import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function BetalingPage() {
  const t = useTranslations('guides.bank.betaling');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const whatYouNeedRaw = t.raw('whatYouNeed') as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Link href="/bank" className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-2">
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
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      <div className="card bg-yellow-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">{t('whatYouNeedTitle')}</h2>
        <ul className="space-y-2">
          {whatYouNeedRaw.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-yellow-600">✓</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">{t('importantTermsTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('termKID')}</p>
            <p className="text-gray-600">{t('termKIDDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('termKonto')}</p>
            <p className="text-gray-600">{t('termKontoDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('termBelop')}</p>
            <p className="text-gray-600">{t('termBelopDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('termFrist')}</p>
            <p className="text-gray-600">{t('termFristDesc')}</p>
          </div>
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4 text-green-800">{t('avtaleGiroTitle')}</h2>
        <p className="text-gray-700">{t('avtaleGiroText')}</p>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('efakturaTitle')}</h2>
        <p className="text-gray-700">{t('efakturaText')}</p>
      </div>
    </div>
  );
}
