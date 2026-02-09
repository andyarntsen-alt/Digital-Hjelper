'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function EpostContent() {
  const t = useTranslations('guides.digital.epost');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const sendStepsRaw = t.raw('sendSteps') as string[];
  const replyStepsRaw = t.raw('replySteps') as string[];
  const attachmentStepsRaw = t.raw('attachmentSteps') as string[];

  return (
    <GuideLayout
      guideId="digital-epost"
      translationNamespace="guides.digital.epost"
      parentHref="/digital"
      parentLabelKey="digital"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      relatedGuides={{
        currentPath: '/digital/epost',
        category: 'digital',
      }}
    >
      {/* Providers */}
      <CollapsibleSection title={t('providersTitle')} className="mb-4 -mt-2">
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
      </CollapsibleSection>

      {/* Using Email */}
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

      {/* Spam */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('spamTitle')}</h2>
        <p className="text-gray-700">{t('spamText')}</p>
      </div>
    </GuideLayout>
  );
}
