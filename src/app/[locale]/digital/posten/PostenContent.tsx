'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import Link from 'next/link';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function PostenContent() {
  const t = useTranslations('guides.digital.posten');

  const stepsRaw = t.raw('trackingSteps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const servicesRaw = t.raw('services') as { name: string; description: string }[];
  const customsTipsRaw = t.raw('customsTips') as string[];

  return (
    <GuideLayout
      guideId="digital-posten"
      translationNamespace="guides.digital.posten"
      parentHref="/digital"
      parentLabelKey="digital"
      totalTime="PT10M"
      steps={steps}
      relatedGuides={{
        currentPath: '/digital/posten',
        category: 'digital',
      }}
    >
      {/* What Is */}
      <CollapsibleSection title={t('whatIsTitle')} className="mb-4 -mt-2">
          <p className="text-gray-700 mb-4">{t('whatIsText')}</p>
      </CollapsibleSection>

      {/* Services */}
      <CollapsibleSection title={t('servicesTitle')} className="mb-4">
          <div className="grid gap-4 md:grid-cols-2">
            {servicesRaw.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Customs */}
      <div className="mt-8 bg-amber-50 border border-amber-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('customsTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('customsText')}</p>
        <ul className="space-y-2">
          {customsTipsRaw.map((tip, index) => (
            <li key={index} className="flex items-start gap-3 text-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Digipost Link */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('digipostTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('digipostText')}</p>
        <Link
          href="/digital/digipost"
          className="inline-flex items-center gap-2 text-nav-blue hover:underline font-medium"
        >
          {t('digipostLink')}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* Pickup */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('pickupTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('pickupText')}</p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800 text-sm">
            <strong>{t('pickupRemember')}</strong> {t('pickupRememberText')}
          </p>
        </div>
      </div>
    </GuideLayout>
  );
}
