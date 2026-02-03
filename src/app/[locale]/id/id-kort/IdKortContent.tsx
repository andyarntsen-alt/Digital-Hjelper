'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function IdKortContent() {
  const t = useTranslations('guides.id.idKort');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const typesItems = t.raw('types') as string[];
  const tipsItems = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="id-id-kort"
      translationNamespace="guides.id.idKort"
      parentHref="/id"
      parentLabelKey="id"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      preSection={{
        titleKey: 'typesTitle',
        items: typesItems,
      }}
      postSections={[{
        titleKey: 'tipsTitle',
        items: tipsItems,
      }]}
    />
  );
}
