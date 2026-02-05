'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';
import { ChevronDownIcon } from '@/components/icons';
import { useState } from 'react';

interface ChecklistItem {
  question: string;
  warning: string;
}

interface ElderScamType {
  title: string;
  description: string;
  howItWorks: string;
  redFlags: string[];
  whatToDo: string;
  icon: string;
}

interface OtherScamType {
  title: string;
  description: string;
}

interface ScamExample {
  type: string;
  message: string;
  warning: string;
}

interface Contact {
  number: string;
  title: string;
  description: string;
  color: string;
}

export default function SvindelPage() {
  const t = useTranslations('guides.sikkerhet.svindel');
  const tNav = useTranslations('header');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  // Get arrays from translations
  const checklistItems = t.raw('checklistItems') as ChecklistItem[];
  const elderScamTypes = t.raw('elderScamTypes') as ElderScamType[];
  const otherScamTypes = t.raw('otherScamTypes') as OtherScamType[];
  const stepsRaw = t.raw('steps') as { title: string; description: string; tip?: string; warning?: string }[];
  const neverAskList = t.raw('neverAskList') as string[];
  const examples = t.raw('examples') as ScamExample[];
  const contacts = t.raw('contacts') as Contact[];

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

  const [expandedType, setExpandedType] = useState<number | null>(null);
  const [sjekklisteAnswers, setSjekklisteAnswers] = useState<boolean[]>(new Array(checklistItems.length).fill(false));

  const warningCount = sjekklisteAnswers.filter(a => a).length;

  const colorMap: Record<string, string> = {
    red: 'text-red-600',
    blue: 'text-blue-600',
    green: 'text-green-600',
    purple: 'text-purple-600'
  };

  // Icon mapping for scam types - gray minimal style like homepage
  const scamIcons: Record<string, React.ReactNode> = {
    grandparent: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    computer: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    heart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    gift: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    wrench: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  };

  return (
    <>
      <GuideTracker />
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
              <FavoriteButton guideId="sikkerhet-svindel" title={t('title')} />
            </div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">
            {t('longDescription')}
          </p>
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

        {/* Checklist */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {t('checklistTitle')}
          </h2>
          <p className="text-gray-700 mb-4">{t('checklistIntro')}</p>

          <div className="space-y-3">
            {checklistItems.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-lg border-2 transition-all ${
                  sjekklisteAnswers[index]
                    ? 'bg-red-100 border-red-400'
                    : 'bg-white border-gray-200'
                }`}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sjekklisteAnswers[index]}
                    onChange={() => {
                      const newAnswers = [...sjekklisteAnswers];
                      newAnswers[index] = !newAnswers[index];
                      setSjekklisteAnswers(newAnswers);
                    }}
                    className="print:hidden mt-1 h-5 w-5 rounded border-gray-300 text-red-600 focus:ring-red-500"
                  />
                  <span className="hidden print:inline-block mt-1 w-5 h-5 border-2 border-gray-400 rounded"></span>
                  <div>
                    <p className="font-semibold text-gray-800">{item.question}</p>
                    <p className={`text-red-700 text-sm mt-1 ${sjekklisteAnswers[index] ? 'block' : 'hidden print:block'}`}>{item.warning}</p>
                  </div>
                </label>
              </div>
            ))}
          </div>

          {/* Result - hide on print */}
          <div className={`print:hidden mt-4 p-4 rounded-lg border ${
            warningCount === 0
              ? 'bg-gray-100 border-gray-300'
              : warningCount <= 2
              ? 'bg-gray-100 border-gray-300'
              : 'bg-gray-100 border-gray-300'
          }`}>
            {warningCount === 0 ? (
              <p className="text-gray-900 font-semibold">{t('checklistResultSafe')}</p>
            ) : warningCount <= 2 ? (
              <p className="text-gray-900 font-semibold">{t('checklistResultCaution').replace('{count}', String(warningCount))}</p>
            ) : (
              <p className="text-gray-900 font-semibold text-lg">{t('checklistResultDanger').replace('{count}', String(warningCount))}</p>
            )}
          </div>
          {/* Static message for print */}
          <div className="hidden print:block mt-4 p-4 rounded-lg border border-gray-400">
            <p className="font-semibold">{t('checklistPrintMessage')}</p>
          </div>
        </div>

        {/* Elder scam types */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {t('elderScamTitle')}
          </h2>
          <p className="text-gray-600 mb-6">{t('elderScamIntro')}</p>

          <div className="space-y-4">
            {elderScamTypes.map((type, index) => (
              <div key={index} className="card border border-gray-200 rounded-xl">
                <button
                  onClick={() => setExpandedType(expandedType === index ? null : index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex-shrink-0">{scamIcons[type.icon] || <span className="text-3xl">{type.icon}</span>}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{type.title}</h3>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`print:hidden h-6 w-6 text-gray-400 transition-transform ${expandedType === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className={`mt-4 pt-4 border-t border-gray-200 space-y-4 ${expandedType === index ? 'block' : 'hidden print:block'}`}>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-800 mb-2">Slik fungerer det:</p>
                    <p className="text-gray-700">{type.howItWorks}</p>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Varseltegn:</p>
                    <ul className="space-y-2">
                      {type.redFlags.map((flag, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700">
                          <span className="text-red-600 font-bold">!</span>
                          <span>{flag}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold text-gray-900 mb-2">Hva du skal gjore:</p>
                    <p className="text-gray-700">{type.whatToDo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other scam types */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('otherScamTitle')}</h2>
          <div className="space-y-4">
            {otherScamTypes.map((type, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className="font-semibold">{type.title}</p>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div id="guide-steps" className="scroll-mt-4">
          <StepGuide title={t('stepsTitle')} steps={steps} />
        </div>

        {/* Never ask */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900">{t('neverAskTitle')}</h2>
          <ul className="space-y-2 text-gray-700">
            {neverAskList.map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Examples */}
        <div className="mt-8 card">
          <h2 className="text-xl font-bold mb-4">{t('examplesTitle')}</h2>
          <div className="space-y-4">
            {examples.map((example, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg border border-gray-200 rounded-xl">
                <p className="text-sm text-gray-500 mb-1">{example.type}</p>
                <p className="italic">&quot;{example.message}&quot;</p>
                <p className="text-red-600 text-sm mt-2">{example.warning}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Emergency contacts */}
        <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">
            {t('contactsTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {contacts.map((contact, index) => (
              <div key={index} className="bg-white p-4 rounded-lg">
                <p className={`font-bold text-xl ${colorMap[contact.color] || 'text-gray-600'}`}>{contact.number}</p>
                <p className="font-semibold">{contact.title}</p>
                <p className="text-gray-600 text-sm">{contact.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-gray-100 rounded-lg">
            <p className="text-gray-800 text-sm"><strong>Tips:</strong> {t('contactsTip')}</p>
          </div>
        </div>
      </div>
    </>
  );
}
