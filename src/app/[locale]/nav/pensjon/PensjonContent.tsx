'use client';

import { useTranslations } from 'next-intl';
import GuideLayout, { StepData } from '@/components/layouts/GuideLayout';
import { ChevronDownIcon } from '@/components/icons';
import CollapsibleSection from '@/components/CollapsibleSection';

export default function PensjonContent() {
  const t = useTranslations('guides.nav.pensjon');

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps: StepData[] = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  // Get arrays from translations
  const requirements = t.raw('requirements') as string[];
  const documents = t.raw('documents') as string[];
  const importantChoices = t.raw('importantChoices') as { title: string; description: string }[];
  const importantInfo = t.raw('importantInfo') as { title: string; description: string }[];
  const faq = t.raw('faq') as { question: string; answer: string }[];

  return (
    <GuideLayout
      guideId="nav-pensjon"
      translationNamespace="guides.nav.pensjon"
      parentHref="/nav"
      parentLabelKey="nav"
      totalTime="PT15M"
      steps={steps}
      relatedGuides={{
        currentPath: '/nav/pensjon',
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
      {/* Hvem kan få - pre-step section */}
      <CollapsibleSection title={t('whoCanGet')} className="mb-4">
          <p className="text-gray-700 mb-4">{t('whoCanGetIntro')}</p>
          <ul className="space-y-2 text-gray-700">
            {requirements.map((req, index) => (
              <li key={index} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
      </CollapsibleSection>

      {/* Viktige valg - pre-step section */}
      <CollapsibleSection title={t('importantChoicesTitle')} className="mb-4">
          <div className="space-y-4">
            {importantChoices.map((choice, index) => (
              <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
                <p className="font-semibold text-yellow-800">{choice.title}</p>
                <p className="text-yellow-700 mt-1">{choice.description}</p>
              </div>
            ))}
          </div>
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

      {/* Viktig informasjon - post-step section */}
      <CollapsibleSection title={t('importantTitle')} className="mt-8">
          <div className="grid md:grid-cols-2 gap-4">
            {importantInfo.map((info, index) => (
              <div key={index} className="p-4 bg-white rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800">{info.title}</p>
                <p className="text-gray-600 mt-1">{info.description}</p>
              </div>
            ))}
          </div>
      </CollapsibleSection>

      {/* FAQ - post-step section */}
      <CollapsibleSection title={t('faqTitle')} className="mt-8">
          <div className="space-y-4">
            {faq.map((item, index) => (
              <details key={index} className="group border-b border-gray-200 pb-4">
                <summary className="cursor-pointer font-semibold text-gray-800 flex justify-between items-center">
                  {item.question}
                  <ChevronDownIcon className="h-5 w-5 transform group-open:rotate-180 transition-transform" />
                </summary>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
      </CollapsibleSection>

      {/* Kalkulator-lenke */}
      <div className="mt-8 tip-box">
        <div className="flex items-start gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
          <div>
            <p className="font-semibold text-green-800">Bruk pensjonskalkulatoren!</p>
            <p className="text-green-700">
              Gå til nav.no/pensjon og logg inn for å se nøyaktig hvor mye du kan få i pensjon ved ulike aldre. Det hjelper deg å ta det riktige valget.
            </p>
          </div>
        </div>
      </div>
    </GuideLayout>
  );
}
