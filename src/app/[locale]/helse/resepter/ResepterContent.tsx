'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function ResepterPage() {
  const t = useTranslations('guides.helse.resepter');
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

  // Get arrays from translations
  const whatYouFind = t.raw('whatYouFind') as { label: string; desc: string }[];
  const prescriptionTypes = t.raw('prescriptionTypes') as { type: string; desc: string; color: string }[];
  const faq = t.raw('faq') as { q: string; a: string }[];

  const colorMap: Record<string, string> = {
    blue: 'bg-blue-50 border-blue-500',
    green: 'bg-green-50 border-green-500',
    purple: 'bg-purple-50 border-purple-500'
  };

  return (
    <>
      <GuideTracker />
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT5M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <Breadcrumbs
          items={[
            { label: tNav('helse'), href: '/helse' },
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
              <FavoriteButton guideId="helse-resepter" title={t('title')} />
            </div>
          </div>
          <p className="text-xl text-gray-600 mt-3">
            {t('longDescription')}
          </p>
        </div>

        {/* What you'll find */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4">{t('whatYouFindTitle')}</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {whatYouFind.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="font-semibold">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <StepGuide title={t('stepsTitle')} steps={steps} />

        {/* Prescription types */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{t('prescriptionTypesTitle')}</h2>
          <div className="space-y-4">
            {prescriptionTypes.map((item, index) => (
              <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                <p className="font-semibold">{item.type}</p>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4">{t('faqTitle')}</h2>
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <p className="font-semibold mb-1">{item.q}</p>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tip box */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <div>
              <p className="font-semibold text-gray-900">{t('tipBoxTitle')}</p>
              <p className="text-gray-700">
                {t('tipBoxText')}
              </p>
            </div>
          </div>
        </div>

        <RelatedGuides currentPath="/helse/resepter" category="helse" />
      </div>
    </>
  );
}
