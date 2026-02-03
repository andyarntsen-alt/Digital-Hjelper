'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';

export default function NavLoggInnContent() {
  const t = useTranslations('guides.nav.loggInn');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const problemsList = t.raw('problemsList') as string[];

  return (
    <GuideLayout
      guideId="nav-logg-inn"
      translationNamespace="guides.nav.loggInn"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
      whatIsSection={{
        titleKey: 'beforeYouStart',
        textKeys: ['beforeYouStartText'],
      }}
      postSections={[{
        titleKey: 'problemsTitle',
        items: problemsList,
      }]}
    />
  );
}
