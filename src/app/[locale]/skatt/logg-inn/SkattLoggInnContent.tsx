'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function SkattLoggInnContent() {
  const t = useTranslations('guides.skatt.loggInn');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const servicesItems = t.raw('services') as string[];
  const problemsItems = t.raw('problemsList') as string[];

  return (
    <GuideLayout
      guideId="skatt-logg-inn"
      translationNamespace="guides.skatt.loggInn"
      parentHref="/skatt"
      parentLabelKey="skatt"
      totalTime="PT10M"
      steps={steps}
      whatIsSection={{
        titleKey: 'beforeYouStart',
        textKeys: ['beforeYouStartText'],
      }}
      postSections={[
        {
          titleKey: 'servicesTitle',
          items: servicesItems,
        },
        {
          titleKey: 'problemsTitle',
          items: problemsItems,
        },
      ]}
    />
  );
}
