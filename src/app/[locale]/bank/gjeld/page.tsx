'use client';

import StepGuide from '@/components/StepGuide';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function GjeldPage() {
  const t = useTranslations('guides.bank.gjeld');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const signsRaw = t.raw('signs') as string[];
  const avoidItemsRaw = t.raw('avoidItems') as string[];

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

      <div className="card bg-blue-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-blue-800">{t('importantTitle')}</h2>
        <p className="text-gray-700">{t('importantText')}</p>
      </div>

      <div className="card bg-yellow-50 mb-8">
        <h2 className="text-xl font-bold mb-4 text-yellow-800">{t('signsTitle')}</h2>
        <ul className="space-y-2">
          {signsRaw.map((sign, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <span className="text-yellow-600 mt-1">⚠</span>
              <span>{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4 text-green-800">{t('helpTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpNAV')}</p>
            <p className="text-gray-600">{t('helpNAVDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpKommune')}</p>
            <p className="text-gray-600">{t('helpKommuneDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpOkonomirad')}</p>
            <p className="text-gray-600">{t('helpOkonomiradDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('helpGjeldsofre')}</p>
            <p className="text-gray-600">{t('helpGjeldsofferDesc')}</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-red-50">
        <h2 className="text-xl font-bold mb-4 text-red-800">{t('avoidTitle')}</h2>
        <ul className="space-y-2">
          {avoidItemsRaw.map((item, index) => (
            <li key={index} className="flex items-center gap-3 text-gray-700">
              <span className="text-red-600 font-bold">✕</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
