'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import RelatedGuides from '@/components/RelatedGuides';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import { ChevronDownIcon } from '@/components/icons';

export default function BankIDPage() {
  const t = useTranslations('guides.sikkerhet.bankid');
  const tNav = useTranslations('header');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const steps = stepsRaw.map(step => ({
    title: step.title,
    description: step.description,
    ...(step.tip && { tip: step.tip }),
    ...(step.warning && { warning: step.warning }),
  }));

  const warningSignsRaw = t.raw('warningSigns') as string[];
  const neverShareRaw = t.raw('neverShare') as string[];

  const howToSteps = stepsRaw.map(step => ({
    name: step.title,
    text: step.description
  }));

  return (
    <>
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime="PT10M"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('sikkerhet'), href: '/sikkerhet' },
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
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <ShareButton />
            <FavoriteButton guideId="sikkerhet-bankid" title={t('title')} />
          </div>
        </div>
        <p className="text-xl text-gray-600">{t('longDescription')}</p>
      </div>

      {/* Quick Start Button */}
      <div className="print:hidden mb-6">
        <a
          href="#guide-steps"
          className="inline-flex items-center gap-3 bg-nav-blue text-white px-6 py-4 rounded-xl hover:bg-blue-700 transition-colors no-underline text-lg font-semibold shadow-md hover:shadow-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {tCommon('startGuideNow')}
        </a>
      </div>

      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('whatIsTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <p className="text-gray-700 mb-4">{t('whatIsText1')}</p>
          <p className="text-gray-700">{t('whatIsText2')}</p>
        </div>
      </details>

      <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
        <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
          <h2 className="text-lg font-semibold text-gray-900">{t('typesTitle')}</h2>
          <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
        </summary>
        <div className="px-4 sm:px-5 pb-4 sm:pb-5">
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeMobile')}</p>
              <p className="text-gray-600">{t('typeMobileDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeCodeDevice')}</p>
              <p className="text-gray-600">{t('typeCodeDeviceDesc')}</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-semibold">{t('typeBiometric')}</p>
              <p className="text-gray-600">{t('typeBiometricDesc')}</p>
            </div>
          </div>
        </div>
      </details>

      <div id="guide-steps" className="scroll-mt-4">
        <StepGuide title={t('stepsTitle')} steps={steps} />
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('warningTitle')}</h2>
        <p className="text-gray-700 mb-4">{t('warningText')}</p>
        <ul className="space-y-2">
          {warningSignsRaw.map((sign, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-600 font-bold mt-1">!</span>
              <span className="text-gray-700">{sign}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-xl font-bold mb-4 text-gray-900">{t('neverShareTitle')}</h2>
        <ul className="space-y-2 text-gray-700">
          {neverShareRaw.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8 card">
        <h2 className="text-xl font-bold mb-4">{t('ifSuspiciousTitle')}</h2>
        <div className="space-y-3 text-gray-700">
          <p>{t('ifSuspiciousText')}</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>{t('ifSuspicious1')}</li>
            <li>{t('ifSuspicious2')}</li>
            <li>{t('ifSuspicious3')}</li>
            <li>{t('ifSuspicious4')}</li>
          </ol>
        </div>
      </div>

      <RelatedGuides
        currentPath="/sikkerhet/bankid"
        category="sikkerhet"
        crossCategoryLinks={[
          {
            href: '/nav/logg-inn',
            titleKey: 'nav.loggInn.title',
            descriptionKey: 'nav.loggInn.description',
          },
          {
            href: '/skatt/logg-inn',
            titleKey: 'skatt.loggInn.title',
            descriptionKey: 'skatt.loggInn.description',
          },
          {
            href: '/helse/logg-inn',
            titleKey: 'helse.loggInn.title',
            descriptionKey: 'helse.loggInn.description',
          },
        ]}
      />
    </div>
    </>
  );
}
