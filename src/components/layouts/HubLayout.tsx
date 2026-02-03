'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations, useLocale } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';
import { ArrowLeftIcon, ArrowRightIcon, ClockIcon, ChevronDownIcon, CheckIcon, PhoneIcon, LocationIcon } from '@/components/icons';
import React from 'react';

// Types
export interface GuideCardData {
  key: string;
  href: string;
  difficulty: 'easy' | 'medium';
  time: number;
}

export interface FAQData {
  question: string;
  answer: string;
}

export interface RelatedServiceData {
  href: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBgColor: string;
}

export interface HelpItem {
  icon: 'phone' | 'location';
  labelKey: string;
  descKey: string;
}

export interface HubLayoutProps {
  // Hub identification
  hubKey: string;
  translationNamespace: string;
  guidesNamespace: string;

  // Styling
  brandColor: string;
  hoverColor: string;
  icon: React.ReactNode;

  // Data
  guides: GuideCardData[];
  faqs?: FAQData[];
  relatedServices: RelatedServiceData[];

  // Optional sections
  middleSection?: React.ReactNode;
  helpItems?: HelpItem[];

  // SEO
  datePublished?: string;
  dateModified?: string;
}

export default function HubLayout({
  hubKey,
  translationNamespace,
  guidesNamespace,
  brandColor,
  hoverColor,
  icon,
  guides,
  faqs,
  relatedServices,
  middleSection,
  helpItems,
  datePublished = '2024-01-01',
  dateModified = '2026-01-30',
}: HubLayoutProps) {
  const t = useTranslations(translationNamespace);
  const tGuides = useTranslations(guidesNamespace);
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <>
      {/* Structured Data */}
      {faqs && faqs.length > 0 && <FAQSchema questions={faqs} />}
      <BreadcrumbSchema
        items={[
          { name: tCommon('home'), url: `/${locale}` },
          { name: t('hubTitle'), url: `/${locale}/${hubKey}` },
        ]}
      />
      <ArticleSchema
        title={t('metaTitle')}
        description={t('metaDescription')}
        url={`/${locale}/${hubKey}`}
        datePublished={datePublished}
        dateModified={dateModified}
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {tCommon('backToHome')}
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className={`${brandColor} text-white p-3 rounded-xl flex-shrink-0`}>
              {icon}
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {t('hubTitle')}
              </h1>
              <p className="text-lg text-gray-600">{t('hubSubtitle')}</p>
            </div>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            <strong className="text-gray-900">{t('introStrong')}</strong> {t('introText')}
          </p>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">
              <strong className="text-gray-900">{t('didYouKnow')}</strong> {t('didYouKnowText')}
            </p>
          </div>
        </div>

        {/* Guides */}
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('selectGuide')}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {guides.map((guide, index) => (
            <Link key={index} href={guide.href} className="no-underline group">
              <div className="bg-white border border-gray-200 rounded-xl p-5 h-full hover:border-gray-300 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-lg font-semibold text-gray-900 group-hover:${hoverColor} transition-colors`}>
                    {tGuides(`${guide.key}.title`)}
                  </h3>
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      guide.difficulty === 'easy'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {guide.difficulty === 'easy' ? tCommon('easy') : tCommon('medium')}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {tGuides(`${guide.key}.description`)}
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500 flex items-center gap-1.5">
                    <ClockIcon className="h-4 w-4" />
                    {guide.time} {tCommon('minutes')}
                  </span>
                  <span className={`${hoverColor.replace('group-hover:', '')} font-medium flex items-center gap-1`}>
                    {tCommon('startGuide')}
                    <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Middle Section (custom per hub) */}
        {middleSection && <div className="mt-16">{middleSection}</div>}

        {/* FAQ */}
        {faqs && faqs.length > 0 && (
          <div className="mt-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('faqTitle')}</h2>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details key={index} className="bg-white border border-gray-200 rounded-xl group">
                  <summary className="cursor-pointer list-none flex justify-between items-center p-4 sm:p-5">
                    <h3 className="text-base font-medium text-gray-900 pr-4">{faq.question}</h3>
                    <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
                  </summary>
                  <p className="px-4 sm:px-5 pb-4 sm:pb-5 text-gray-600 leading-relaxed">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        )}

        {/* Related guides */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('relatedTitle')}</h2>
          <p className="text-gray-600 mb-6">{t('relatedText')}</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {relatedServices.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline"
              >
                <div
                  className={`w-10 h-10 ${service.iconBgColor} rounded-lg flex items-center justify-center flex-shrink-0`}
                >
                  {service.icon}
                </div>
                <div>
                  <p className="font-medium text-gray-900 group-hover:text-nav-blue transition-colors">
                    {service.title}
                  </p>
                  <p className="text-sm text-gray-500">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Help */}
        <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{t('needHelpTitle')}</h2>
          <p className="text-gray-600 mb-4">{t('needHelpText')}</p>
          <div className="space-y-3">
            {helpItems ? (
              helpItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-700">
                  {item.icon === 'phone' ? (
                    <PhoneIcon className="h-5 w-5 text-gray-400" />
                  ) : (
                    <LocationIcon className="h-5 w-5 text-gray-400" />
                  )}
                  <span>
                    <strong className="text-gray-900">{t(item.labelKey)}</strong> - {t(item.descKey)}
                  </span>
                </div>
              ))
            ) : (
              <>
                <div className="flex items-center gap-3 text-gray-700">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <span>
                    <strong className="text-gray-900">{t('helpPhone')}</strong> - {t('helpPhoneDesc')}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <LocationIcon className="h-5 w-5 text-gray-400" />
                  <span>
                    <strong className="text-gray-900">{t('helpVisit')}</strong> - {t('helpVisitDesc')}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Last updated */}
        <p className="mt-8 text-sm text-gray-400">{t('lastUpdated')}</p>
      </div>
    </>
  );
}
