'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { HealthIcon, NavBuildingIcon, TaxIcon, LockIcon, CalendarIcon, DocumentIcon, MessageIcon, ClipboardIcon, LocationIcon, ShieldIcon } from '@/components/icons';

// Guide configuration
const helseGuides: GuideCardData[] = [
  { key: 'bestilleTime', href: '/helse/bestille-time', difficulty: 'easy', time: 10 },
  { key: 'resepter', href: '/helse/resepter', difficulty: 'easy', time: 5 },
  { key: 'bytteFastlege', href: '/helse/bytte-fastlege', difficulty: 'medium', time: 10 },
  { key: 'journal', href: '/helse/journal', difficulty: 'easy', time: 5 },
  { key: 'melding', href: '/helse/melding', difficulty: 'easy', time: 5 },
];

// "What you can do" section
function WhatYouCanDoSection() {
  const t = useTranslations('services.helse');

  const features = [
    { icon: CalendarIcon, title: t('canDoBooking'), desc: t('canDoBookingDesc') },
    { icon: DocumentIcon, title: t('canDoPrescriptions'), desc: t('canDoPrescriptionsDesc') },
    { icon: MessageIcon, title: t('canDoMessage'), desc: t('canDoMessageDesc') },
    { icon: ClipboardIcon, title: t('canDoJournal'), desc: t('canDoJournalDesc') },
    { icon: LocationIcon, title: t('canDoChangeGP'), desc: t('canDoChangeGPDesc') },
    { icon: ShieldIcon, title: t('canDoVaccines'), desc: t('canDoVaccinesDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('canDoTitle')}</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
            <feature.icon className="h-5 w-5 text-helse-red flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-gray-900">{feature.title}</p>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Emergency numbers */}
      <div className="mt-12 bg-gray-50 border border-gray-200 rounded-xl p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">{t('importantNumbers')}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-3xl font-bold text-helse-red">{t('emergencyNumber')}</p>
            <p className="font-medium text-gray-900">{t('ambulance')}</p>
            <p className="text-gray-600 text-sm">{t('ambulanceDesc')}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-3xl font-bold text-helse-red">{t('legevaktNumber')}</p>
            <p className="font-medium text-gray-900">{t('legevakt')}</p>
            <p className="text-gray-600 text-sm">{t('legevaktDesc')}</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg border border-gray-200">
            <p className="text-3xl font-bold text-helse-red">{t('poisonControlNumber')}</p>
            <p className="font-medium text-gray-900">{t('poisonControl')}</p>
            <p className="text-gray-600 text-sm">{t('poisonControlDesc')}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function HelseContent() {
  const t = useTranslations('services.helse');

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
      href: '/nav',
      title: 'NAV',
      description: t('relatedNavDesc'),
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkattDesc'),
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankIdDesc'),
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
  ];

  return (
    <HubLayout
      hubKey="helse"
      translationNamespace="services.helse"
      guidesNamespace="guides.helse"
      brandColor="bg-helse-red"
      hoverColor="text-helse-red"
      icon={<HealthIcon className="h-8 w-8" />}
      guides={helseGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      middleSection={<WhatYouCanDoSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
