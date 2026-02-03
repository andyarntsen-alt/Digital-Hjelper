'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function BetalingsutsettelsContent() {
  const t = useTranslations('guides.utdanning.betalingsutsettelse');

  // Get steps from translations
  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get requirements from translations
  const requirementsItems = t.raw('requirements') as string[];

  return (
    <GuideLayout
      guideId="utdanning-betalingsutsettelse"
      translationNamespace="guides.utdanning.betalingsutsettelse"
      parentHref="/utdanning"
      parentLabelKey="utdanning"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      preSection={{
        titleKey: 'requirementsTitle',
        items: requirementsItems,
      }}
    />
  );
}
