'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function ForerkortContent() {
  const t = useTranslations('guides.id.forerkort');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const requirementsItems = t.raw('requirements') as string[];
  const tipsItems = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="id-forerkort"
      translationNamespace="guides.id.forerkort"
      parentHref="/id"
      parentLabelKey="id"
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
      postSections={[{
        titleKey: 'tipsTitle',
        items: tipsItems,
      }]}
    />
  );
}
