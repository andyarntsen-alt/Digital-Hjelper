'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function NettleserContent() {
  const t = useTranslations('guides.grunnleggende.nettleser');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const safetyTipsItems = t.raw('safetyTips') as string[];

  return (
    <GuideLayout
      guideId="grunnleggende-nettleser"
      translationNamespace="guides.grunnleggende.nettleser"
      parentHref="/grunnleggende"
      parentLabelKey="grunnleggende"
      categoryColor="bg-grunnleggende-purple hover:bg-purple-700"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText'],
      }}
      postSections={[{
        titleKey: 'safetyTitle',
        items: safetyTipsItems,
      }]}
    />
  );
}
