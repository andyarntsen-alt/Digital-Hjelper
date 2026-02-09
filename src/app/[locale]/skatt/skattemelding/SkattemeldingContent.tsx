'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function SkattemeldingContent() {
  const t = useTranslations('guides.skatt.skattemelding');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const commonErrors = t.raw('commonErrors') as { title: string; text: string }[];

  return (
    <GuideLayout
      guideId="skatt-skattemelding"
      translationNamespace="guides.skatt.skattemelding"
      parentHref="/skatt"
      parentLabelKey="skatt"
      categoryColor="bg-skatt-green hover:bg-green-700"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      relatedGuides={{
        currentPath: '/skatt/skattemelding',
        category: 'skatt',
        crossCategoryLinks: [
          {
            href: '/nav/dagpenger',
            titleKey: 'nav.dagpenger.title',
            descriptionKey: 'nav.dagpenger.description',
          },
          {
            href: '/nav/sykepenger',
            titleKey: 'nav.sykepenger.title',
            descriptionKey: 'nav.sykepenger.description',
          },
        ],
      }}
    >
      {/* Vanlige feil */}
      <CollapsibleSection title={t('commonErrorsTitle')} className="mt-6 sm:mt-8">
          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base">
            {commonErrors.map((error, index) => (
              <li key={index} className="flex items-start gap-2 sm:gap-3">
                <span className="text-red-500 font-bold">•</span>
                <span><strong>{error.title}:</strong> {error.text}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Frister */}
      <CollapsibleSection title={t('deadlineTitle')} className="mt-6 sm:mt-8">
          <p className="text-gray-700 text-sm sm:text-base">
            {t('deadlineText')}
          </p>
      </CollapsibleSection>
    </GuideLayout>
  );
}
