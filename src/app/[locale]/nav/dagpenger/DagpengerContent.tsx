'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function DagpengerContent() {
  const t = useTranslations('guides.nav.dagpenger');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get requirements and documents lists
  const requirements = t.raw('requirements') as string[];
  const documents = t.raw('documents') as string[];

  return (
    <GuideLayout
      guideId="nav-dagpenger"
      translationNamespace="guides.nav.dagpenger"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
      relatedGuides={{
        currentPath: '/nav/dagpenger',
        category: 'nav',
        crossCategoryLinks: [
          {
            href: '/skatt/skattemelding',
            titleKey: 'skatt.skattemelding.title',
            descriptionKey: 'skatt.skattemelding.description',
          },
          {
            href: '/sikkerhet/bankid',
            titleKey: 'sikkerhet.bankid.title',
            descriptionKey: 'sikkerhet.bankid.description',
          },
        ],
      }}
    >
      {/* Krav-boks - pre-step section */}
      <CollapsibleSection title={t('whoCanGet')} className="mb-4">
          <p className="text-gray-700 mb-4">{t('whoCanGetIntro')}</p>
          <ul className="space-y-2 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Dokumenter du trenger - pre-step section */}
      <CollapsibleSection title={t('documentsTitle')} className="mb-4">
          <ul className="space-y-3 text-gray-700">
            {documents.map((doc, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="bg-nav-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{index + 1}</span>
                <span>{doc}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Viktig informasjon - post-step section with custom icon layouts */}
      <CollapsibleSection title={t('importantTitle')} className="mt-8">
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantMeldekort')}</p>
                <p>{t('importantMeldekortText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantJobsearch')}</p>
                <p>{t('importantJobsearchText')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <p className="font-semibold">{t('importantAmount')}</p>
                <p>{t('importantAmountText')}</p>
              </div>
            </div>
          </div>
      </CollapsibleSection>
    </GuideLayout>
  );
}
