'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import PrintButton from '@/components/PrintButton';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import StepGuide from '@/components/StepGuide';
import RelatedGuides from '@/components/RelatedGuides';
import GuideTracker from '@/components/GuideTracker';
import { HowToSchema } from '@/components/StructuredData';
import { useTranslations, useLocale } from 'next-intl';
import { ClockIcon, CheckIcon, LockIcon, ChevronDownIcon } from '@/components/icons';
import { GuideCategory } from '@/data/guides';
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

export interface FaqItem {
  q: string;
  a: string;
}

export interface RelatedGuidesConfig {
  currentPath: string;
  category: GuideCategory;
  crossCategoryLinks?: { href: string; titleKey: string; descriptionKey: string }[];
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

  // Category color for Quick Start button
  categoryColor?: string; // e.g. 'bg-skatt-green hover:bg-green-700'

  // Optional sections
  whatIsSection?: {
    titleKey: string;
    textKeys: string[];
  };

  preSection?: ChecklistSection;
  postSections?: ChecklistSection[];

  // FAQ section
  faqSection?: {
    titleKey: string;
    items: FaqItem[];
  };

  // Related guides
  relatedGuides?: RelatedGuidesConfig;

  // GuideTracker
  showGuideTracker?: boolean;

  // Help section
  showHelpSection?: boolean;

  // Custom content (rendered between steps and postSections)
  children?: React.ReactNode;

  // SEO - dates for E-E-A-T
  dateModified?: string; // e.g. "2026-02-01"
}

export default function GuideLayout({
  guideId,
  translationNamespace,
  parentHref,
  parentLabelKey,
  totalTime,
  steps,
  categoryColor = 'bg-nav-blue hover:bg-blue-700',
  whatIsSection,
  preSection,
  postSections,
  faqSection,
  relatedGuides,
  showGuideTracker = false,
  showHelpSection = false,
  children,
  dateModified,
}: GuideLayoutProps) {
  const t = useTranslations(translationNamespace);
  const tNav = useTranslations('header');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  // Helper for locale-aware paths (no prefix for Norwegian)
  const getLocalizedPath = (path: string) =>
    locale === 'no' ? path : `/${locale}${path}`;

  const howToSteps = steps.map(step => ({
    name: step.title,
    text: step.description,
  }));

  return (
    <>
      {/* GuideTracker */}
      {showGuideTracker && <GuideTracker />}

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
            Skrevet ut fra lettdigital.no{getLocalizedPath(parentHref)}
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
        <div className="mb-6">
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
          <p className="text-lg text-gray-600 mt-2">{t('longDescription')}</p>
        </div>

        {/* Quick Start Button - Prominent CTA for elderly/newcomers */}
        <div className="print:hidden mb-6">
          <a
            href="#guide-steps"
            className={`inline-flex items-center gap-3 ${categoryColor} text-white px-6 py-4 rounded-xl transition-colors no-underline text-lg font-semibold shadow-md hover:shadow-lg`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {tCommon('startGuideNow')}
          </a>
        </div>

        {/* Collapsible: What Is Section */}
        {whatIsSection && (
          <details className="bg-gray-50 border border-gray-200 rounded-xl mb-4 group">
            <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
              <h2 className="text-lg font-semibold text-gray-900">{t(whatIsSection.titleKey)}</h2>
              <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
            </summary>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              {whatIsSection.textKeys.map((key, index) => (
                <p key={index} className={`text-gray-700 ${index < whatIsSection.textKeys.length - 1 ? 'mb-3' : ''}`}>
                  {t(key)}
                </p>
              ))}
            </div>
          </details>
        )}

        {/* Collapsible: Pre Section (Before You Start) */}
        {preSection && (
          <details className="bg-amber-50 border border-amber-200 rounded-xl mb-6 group">
            <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5 select-none">
              <h2 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                {t(preSection.titleKey)}
              </h2>
              <ChevronDownIcon className="h-5 w-5 text-amber-600 transform transition-transform group-open:rotate-180 flex-shrink-0" />
            </summary>
            <div className="px-4 sm:px-5 pb-4 sm:pb-5">
              <ul className="space-y-2">
                {preSection.items.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-amber-900">
                    <CheckIcon className="h-5 w-5 text-amber-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </details>
        )}

        {/* Step Guide - with anchor for quick navigation */}
        <div id="guide-steps" className="scroll-mt-4">
          <StepGuide title={t('stepsTitle')} steps={steps} />
        </div>

        {/* Custom Content */}
        {children}

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

        {/* FAQ Section */}
        {faqSection && (
          <div className="mt-8 bg-white border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">{t(faqSection.titleKey)}</h2>
            <div className="space-y-4">
              {faqSection.items.map((item, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <p className="font-semibold mb-1">{item.q}</p>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Help Section */}
        {showHelpSection && (
          <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-900">{t('helpTitle')}</h2>
            <p className="text-gray-700">{t('helpText')}</p>
          </div>
        )}

        {/* Related Guides */}
        {relatedGuides && (
          <RelatedGuides
            currentPath={relatedGuides.currentPath}
            category={relatedGuides.category}
            crossCategoryLinks={relatedGuides.crossCategoryLinks}
          />
        )}

        {/* Last Updated - E-E-A-T signal */}
        {dateModified && (
          <div className="mt-8 pt-4 border-t border-gray-200 flex items-center gap-2 text-sm text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {tCommon('lastUpdated')}{' '}
              {new Date(dateModified).toLocaleDateString(
                { no: 'nb-NO', en: 'en-GB', uk: 'uk-UA', pl: 'pl-PL', ar: 'ar-SA', so: 'so-SO' }[locale] || 'en-GB',
                { year: 'numeric', month: 'long', day: 'numeric' }
              )}
            </span>
          </div>
        )}
      </div>
    </>
  );
}
