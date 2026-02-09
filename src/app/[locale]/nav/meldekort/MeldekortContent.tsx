'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function MeldekortContent() {
  const t = useTranslations('guides.nav.meldekort');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const calendarSteps = t.raw('calendarSteps') as { label: string; text: string; color: string }[];
  const faq = t.raw('faq') as { question: string; answer: string }[];

  const colorClasses: { [key: string]: string } = {
    blue: 'bg-nav-blue text-white',
    green: 'bg-green-600 text-white',
    yellow: 'bg-yellow-500 text-white',
    purple: 'bg-purple-600 text-white',
  };

  return (
    <GuideLayout
      guideId="nav-meldekort"
      translationNamespace="guides.nav.meldekort"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
      relatedGuides={{
        currentPath: '/nav/meldekort',
        category: 'nav',
        crossCategoryLinks: [
          {
            href: '/skatt/skattemelding',
            titleKey: 'skatt.skattemelding.title',
            descriptionKey: 'skatt.skattemelding.description',
          },
          {
            href: '/bank/nettbank',
            titleKey: 'bank.nettbank.title',
            descriptionKey: 'bank.nettbank.description',
          },
        ],
      }}
    >
      {/* Viktig advarsel - pre-step section */}
      <CollapsibleSection title={t('deadlineTitle')} className="mb-4">
          <p className="text-gray-700">
            {t('deadlineText')}
          </p>
      </CollapsibleSection>

      {/* Kalender-oversikt - pre-step section with color mapping */}
      <CollapsibleSection title={t('calendarTitle')} className="mb-4">
          <div className="space-y-3 text-gray-700">
            {calendarSteps.map((step, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`${colorClasses[step.color]} px-3 py-1 rounded font-bold text-sm`}>{step.label}</div>
                <span>{step.text}</span>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* Vanlige sporsmal - post-step section */}
      <CollapsibleSection title={t('faqTitle')} className="mt-8">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold mb-1">{item.question}</p>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>
    </GuideLayout>
  );
}
