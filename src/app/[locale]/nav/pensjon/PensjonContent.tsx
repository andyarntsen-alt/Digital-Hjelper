'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';

export default function PensjonPage() {
  const t = useTranslations('guides.nav.pensjon');
  const tNav = useTranslations('header');
  const locale = useLocale();

  // Build steps array from translations
  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  // Get arrays from translations
  const requirements = t.raw('requirements') as string[];
  const documents = t.raw('documents') as string[];
  const importantChoices = t.raw('importantChoices') as { title: string; description: string }[];
  const importantInfo = t.raw('importantInfo') as { title: string; description: string }[];
  const faq = t.raw('faq') as { question: string; answer: string }[];

  return (
    <>
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT15M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        <Breadcrumbs
        items={[
          { label: tNav('nav'), href: '/nav' },
          { label: t('title') }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('time')}</span>
          <span className="mx-2">•</span>
          <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <ShareButton />
            <FavoriteButton guideId="nav-pensjon" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">
          {t('longDescription')}
        </p>
      </div>

      {/* Hvem kan få */}
      <div className="card bg-gray-50 border border-gray-200 mb-8">
        <h2 className="text-xl font-bold mb-4">{t('whoCanGet')}</h2>
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
      </div>

      {/* Viktige valg */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">{t('importantChoicesTitle')}</h2>
        <div className="space-y-4">
          {importantChoices.map((choice, index) => (
            <div key={index} className="p-4 bg-gray-50 border border-gray-200 rounded-xl">
              <p className="font-semibold text-yellow-800">{choice.title}</p>
              <p className="text-yellow-700 mt-1">{choice.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dokumenter du trenger */}
      <div className="card mb-8">
        <h2 className="text-xl font-bold mb-4">{t('documentsTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {documents.map((doc, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="bg-nav-blue text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 text-sm">{index + 1}</span>
              <span>{doc}</span>
            </li>
          ))}
        </ul>
      </div>

      <StepGuide title={t('stepsTitle')} steps={steps} />

      {/* Viktig informasjon */}
      <div className="mt-8 card border border-gray-200 rounded-xl">
        <h2 className="text-xl font-bold mb-4">{t('importantTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {importantInfo.map((info, index) => (
            <div key={index} className="p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-gray-800">{info.title}</p>
              <p className="text-gray-600 mt-1">{info.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('faqTitle')}</h2>
        <div className="space-y-4">
          {faq.map((item, index) => (
            <details key={index} className="group border-b border-gray-200 pb-4">
              <summary className="cursor-pointer font-semibold text-gray-800 flex justify-between items-center">
                {item.question}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-2 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>

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

      <RelatedGuides currentPath="/nav/pensjon" category="nav" />
      </div>
    </>
  );
}
