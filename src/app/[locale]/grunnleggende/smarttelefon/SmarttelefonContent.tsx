'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function SmarttelefonContent() {
  const t = useTranslations('guides.grunnleggende.smarttelefon');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const tipsItems = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="grunnleggende-smarttelefon"
      translationNamespace="guides.grunnleggende.smarttelefon"
      parentHref="/grunnleggende"
      parentLabelKey="grunnleggende"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'beforeYouStart',
        textKeys: ['beforeYouStartText'],
      }}
      postSections={[{
        titleKey: 'tipsTitle',
        items: tipsItems,
      }]}
    />
  );
}
