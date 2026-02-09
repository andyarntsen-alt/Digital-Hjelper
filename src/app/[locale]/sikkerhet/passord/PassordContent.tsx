'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function PassordPage() {
  const t = useTranslations('guides.sikkerhet.passord');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const badPasswordsRaw = t.raw('badPasswords') as string[];
  const tipsRaw = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="sikkerhet-passord"
      translationNamespace="guides.sikkerhet.passord"
      parentHref="/sikkerhet"
      parentLabelKey="sikkerhet"
      totalTime="PT10M"
      steps={steps}
    >
      {/* Why Important - collapsible before steps rendered via children since it's custom */}
      <CollapsibleSection title={t('whyImportantTitle')} className="mb-4 -mt-2">
          <p className="text-gray-700 mb-4">{t('whyImportantText1')}</p>
          <p className="text-gray-700">{t('whyImportantText2')}</p>
      </CollapsibleSection>

      {/* Bad Passwords */}
      <CollapsibleSection title={t('badPasswordsTitle')} className="mb-4">
          <div className="flex flex-wrap gap-2 mb-4">
            {badPasswordsRaw.map((password, index) => (
              <span key={index} className="bg-red-200 text-red-800 px-3 py-1 rounded-full text-sm font-mono">
                {password}
              </span>
            ))}
          </div>
          <p className="text-gray-900 font-semibold">{t('badPasswordsWarning')}</p>
      </CollapsibleSection>

      {/* Tips */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('tipsTitle')}</h2>
        <ul className="space-y-2">
          {tipsRaw.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-gray-500 mt-1">Tip:</span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Tools */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('toolsTitle')}</h2>
        <div className="space-y-4">
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800">{t('toolPasswordManager')}</p>
            <p className="text-gray-600">{t('toolPasswordManagerDesc')}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800">{t('toolHaveIBeenPwned')}</p>
            <p className="text-gray-600">{t('toolHaveIBeenPwnedDesc')}</p>
          </div>
          <div className="p-4 bg-gray-50 rounded-lg">
            <p className="font-semibold text-gray-800">{t('toolPasswordGenerator')}</p>
            <p className="text-gray-600">{t('toolPasswordGeneratorDesc')}</p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
