'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { NavBuildingIcon, HealthIcon, TaxIcon, LockIcon, CalendarIcon } from '@/components/icons';

// Guide configuration
const navGuides: GuideCardData[] = [
  { key: 'loggInn', href: '/nav/logg-inn', difficulty: 'easy', time: 5 },
  { key: 'meldekort', href: '/nav/meldekort', difficulty: 'easy', time: 5 },
  { key: 'dagpenger', href: '/nav/dagpenger', difficulty: 'medium', time: 20 },
  { key: 'sykepenger', href: '/nav/sykepenger', difficulty: 'medium', time: 15 },
  { key: 'pensjon', href: '/nav/pensjon', difficulty: 'medium', time: 15 },
  { key: 'uforetrygd', href: '/nav/uforetrygd', difficulty: 'medium', time: 20 },
  { key: 'foreldrepenger', href: '/nav/foreldrepenger', difficulty: 'medium', time: 25 },
  { key: 'arbeidsledig', href: '/nav/arbeidsledig', difficulty: 'easy', time: 10 },
];

export default function NavContent() {
  const t = useTranslations('services.nav');

  // FAQs from translations
  const faqs: FAQData[] = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  // Related services
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/helse',
      title: 'Helsenorge',
      description: t('relatedHelse'),
      icon: <HealthIcon className="h-5 w-5 text-helse-red" />,
      iconBgColor: 'bg-helse-red/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkatt'),
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankID'),
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
  ];

  // Utbetalingsdatoer section (SEO: high search volume keyword)
  const paymentDatesSection = (
    <div className="bg-nav-blue/5 border border-nav-blue/20 rounded-xl p-6">
      <div className="flex items-start gap-4">
        <div className="bg-nav-blue/10 p-3 rounded-lg flex-shrink-0">
          <CalendarIcon className="h-6 w-6 text-nav-blue" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">{t('paymentDates.title')}</h2>
          <p className="text-gray-700 mb-3">{t('paymentDates.description')}</p>
          <p className="text-gray-600 text-sm mb-4">{t('paymentDates.generalRule')}</p>
          <a
            href="https://www.nav.no/utbetalingsdatoer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-nav-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors no-underline text-sm font-medium"
          >
            {t('paymentDates.linkText')}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <HubLayout
      hubKey="nav"
      translationNamespace="services.nav"
      guidesNamespace="guides.nav"
      brandColor="bg-nav-blue"
      hoverColor="text-nav-blue"
      icon={<NavBuildingIcon className="h-8 w-8" />}
      guides={navGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      middleSection={paymentDatesSection}
      datePublished="2024-01-01"
      dateModified="2026-02-05"
    />
  );
}
