'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function TilbakebetalingContent() {
  const t = useTranslations('guides.utdanning.tilbakebetaling');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const optionsItems = t.raw('options') as string[];
  const tipsItems = t.raw('tips') as string[];

  return (
    <GuideLayout
      guideId="utdanning-tilbakebetaling"
      translationNamespace="guides.utdanning.tilbakebetaling"
      parentHref="/utdanning"
      parentLabelKey="utdanning"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'whatIsTitle',
        textKeys: ['whatIsText1', 'whatIsText2'],
      }}
      preSection={{
        titleKey: 'optionsTitle',
        items: optionsItems,
      }}
      postSections={[{
        titleKey: 'tipsTitle',
        items: tipsItems,
      }]}
    />
  );
}
