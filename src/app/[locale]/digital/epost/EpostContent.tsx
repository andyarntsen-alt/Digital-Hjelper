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

export default function EpostContent() {
  const t = useTranslations('guides.digital.epost');
  const tNav = useTranslations('header');
  const locale = useLocale();

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const sendStepsRaw = t.raw('sendSteps') as string[];
  const replyStepsRaw = t.raw('replySteps') as string[];
  const attachmentStepsRaw = t.raw('attachmentSteps') as string[];

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
            <FavoriteButton guideId="digital-epost" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('whatIsTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('whatIsText1')}</p>
        <p className="text-gray-700">{t('whatIsText2')}</p>
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('providersTitle')}</h2>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('providerGmail')}</p>
            <p className="text-gray-600">{t('providerGmailDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('providerOutlook')}</p>
            <p className="text-gray-600">{t('providerOutlookDesc')}</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-gray-800">{t('providerYahoo')}</p>
            <p className="text-gray-600">{t('providerYahooDesc')}</p>
          </div>
        </div>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4">{t('usingEmailTitle')}</h2>

        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">{t('sendTitle')}</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {sendStepsRaw.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">{t('replyTitle')}</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {replyStepsRaw.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold text-gray-800 mb-2">{t('attachmentTitle')}</h3>
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              {attachmentStepsRaw.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('spamTitle')}</h2>
        <p className="text-gray-700">{t('spamText')}</p>
      </div>

      <RelatedGuides currentPath="/digital/epost" category="digital" />
    </div>
    </>
  );
}
