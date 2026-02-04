'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';
import { ClockIcon, CheckIcon, LockIcon } from '@/components/icons';
import React from 'react';

// Types
export interface StepData {
  title: string;
  description: string;
  tip?: string;
  warning?: string;
}

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface ChecklistSection {
  titleKey: string;
  items: string[];
  iconType?: 'check' | 'lock';
}

export interface GuideLayoutProps {
  // Identification
  guideId: string;
  translationNamespace: string;

  // Breadcrumbs
  parentHref: string;
  parentLabelKey: string;

  // Metadata
  totalTime: string; // ISO 8601 duration like "PT10M"

  // Content from translations
  steps: StepData[];

  // Optional sections
  whatIsSection?: {
    titleKey: string;
    textKeys: string[];
  };

  preSection?: ChecklistSection;
  postSections?: ChecklistSection[];

  // Help section
  showHelpSection?: boolean;
}

export default function GuideLayout({
  guideId,
  translationNamespace,
  parentHref,
  parentLabelKey,
  totalTime,
  steps,
  whatIsSection,
  preSection,
  postSections,
  showHelpSection = false,
}: GuideLayoutProps) {
  const t = useTranslations(translationNamespace);
  const tNav = useTranslations('header');
  const locale = useLocale();

  const howToSteps = steps.map(step => ({
    name: step.title,
    text: step.description,
  }));

  return (
    <>
      {/* Structured Data */}
      <HowToSchema
        name={t('title')}
        description={t('longDescription')}
        steps={howToSteps}
        totalTime={totalTime}
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
        {/* Print-only header med URL */}
        <div className="hidden print:block mb-4 pb-4 border-b border-gray-300 text-center">
          <p className="text-sm text-gray-600">
            Skrevet ut fra lettdigital.no/{locale}{parentHref}
          </p>
        </div>

        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { label: tNav(parentLabelKey), href: parentHref },
            { label: t('title') },
          ]}
        />

        {/* Header */}
        <div className="mb-8">
          <div className="print:hidden flex items-center gap-2 text-gray-500 mb-2">
            <ClockIcon className="h-5 w-5" />
            <span>{t('time')}</span>
            <span className="mx-2">•</span>
            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">
              {t('difficulty')}
            </span>
          </div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
              {t('title')}
            </h1>
            <div className="print:hidden flex items-center gap-2">
              <PrintButton />
              <ShareButton />
              <FavoriteButton guideId={guideId} title={t('title')} />
            </div>
          </div>
          <p className="text-xl text-gray-600">{t('longDescription')}</p>
        </div>

        {/* What Is Section */}
        {whatIsSection && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t(whatIsSection.titleKey)}</h2>
            {whatIsSection.textKeys.map((key, index) => (
              <p key={index} className={`text-gray-700 ${index < whatIsSection.textKeys.length - 1 ? 'mb-4' : ''}`}>
                {t(key)}
              </p>
            ))}
          </div>
        )}

        {/* Pre Section (Before You Start) */}
        {preSection && (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t(preSection.titleKey)}</h2>
            <ul className="space-y-2">
              {preSection.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Step Guide */}
        <StepGuide title={t('stepsTitle')} steps={steps} />

        {/* Post Sections */}
        {postSections?.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t(section.titleKey)}</h2>
            <ul className="space-y-2">
              {section.items.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  {section.iconType === 'lock' ? (
                    <LockIcon className="h-5 w-5 text-gray-600 flex-shrink-0 mt-0.5" />
                  ) : (
                    <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  )}
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Help Section */}
        {showHelpSection && (
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('helpTitle')}</h2>
            <p className="text-gray-700">{t('helpText')}</p>
          </div>
        )}
      </div>
    </>
  );
}
