'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function PostenContent() {
  const t = useTranslations('guides.digital.posten');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('trackingSteps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const servicesRaw = t.raw('services') as { name: string; description: string }[];
  const customsTipsRaw = t.raw('customsTips') as string[];

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
            { label: tNav('digital'), href: '/digital' },
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
              <FavoriteButton guideId="digital-posten" title={t('title')} />
            </div>
          </div>
          <p className="text-xl text-gray-600">{t('longDescription')}</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('whatIsTitle')}</h2>
          <p className="text-gray-700 mb-4">{t('whatIsText')}</p>
        </div>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('servicesTitle')}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {servicesRaw.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-800 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <StepGuide title={t('trackingTitle')} steps={steps} />

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

        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('pickupTitle')}</h2>
          <p className="text-gray-700 mb-4">{t('pickupText')}</p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-blue-800 text-sm">
              <strong>{t('pickupRemember')}</strong> {t('pickupRememberText')}
            </p>
          </div>
        </div>

        <RelatedGuides currentPath="/digital/posten" category="digital" />
      </div>
    </>
  );
}
