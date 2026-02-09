'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function BankIDPage() {
  const t = useTranslations('guides.sikkerhet.bankid');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const warningSignsRaw = t.raw('warningSigns') as string[];
  const neverShareRaw = t.raw('neverShare') as string[];

  return (
    <GuideLayout
      guideId="sikkerhet-bankid"
      translationNamespace="guides.sikkerhet.bankid"
      parentHref="/sikkerhet"
      parentLabelKey="sikkerhet"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      relatedGuides={{
        currentPath: '/sikkerhet/bankid',
        category: 'sikkerhet',
        crossCategoryLinks: [
          {
            href: '/nav/logg-inn',
            titleKey: 'nav.loggInn.title',
            descriptionKey: 'nav.loggInn.description',
          },
          {
            href: '/skatt/logg-inn',
            titleKey: 'skatt.loggInn.title',
            descriptionKey: 'skatt.loggInn.description',
          },
          {
            href: '/helse/logg-inn',
            titleKey: 'helse.loggInn.title',
            descriptionKey: 'helse.loggInn.description',
          },
        ],
      }}
    >
      {/* BankID Types */}
      <CollapsibleSection title={t('typesTitle')} className="mb-4 -mt-2">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeMobile')}</p>
              <p className="text-gray-600">{t('typeMobileDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeCodeDevice')}</p>
              <p className="text-gray-600">{t('typeCodeDeviceDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeBiometric')}</p>
              <p className="text-gray-600">{t('typeBiometricDesc')}</p>
            </div>
          </div>
      </CollapsibleSection>

      {/* Warning Signs */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('warningTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('warningText')}</p>
        <ul className="space-y-2">
          {warningSignsRaw.map((sign, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">!</span>
              <span className="text-gray-700">{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Never Share */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('neverShareTitle')}</h2>
        <ul className="space-y-2 text-gray-700">
          {neverShareRaw.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* If Suspicious */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('ifSuspiciousTitle')}</h2>
        <div className="space-y-3 text-gray-700">
          <p>{t('ifSuspiciousText')}</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>{t('ifSuspicious1')}</li>
            <li>{t('ifSuspicious2')}</li>
            <li>{t('ifSuspicious3')}</li>
            <li>{t('ifSuspicious4')}</li>
          </ol>
        </div>
      </div>
    </GuideLayout>
  );
}
