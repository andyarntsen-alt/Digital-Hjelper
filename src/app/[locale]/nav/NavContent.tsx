'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { NavBuildingIcon, HealthIcon, TaxIcon, LockIcon } from '@/components/icons';

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
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
