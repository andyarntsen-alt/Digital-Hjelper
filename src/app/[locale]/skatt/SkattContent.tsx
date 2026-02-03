'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { TaxIcon, NavBuildingIcon, HealthIcon, LockIcon } from '@/components/icons';

// Guide configuration
const skattGuides: GuideCardData[] = [
  { key: 'skattemelding', href: '/skatt/skattemelding', difficulty: 'easy', time: 10 },
  { key: 'fradrag', href: '/skatt/fradrag', difficulty: 'medium', time: 15 },
  { key: 'skatteoppgjoer', href: '/skatt/skatteoppgjoer', difficulty: 'easy', time: 10 },
  { key: 'skattekort', href: '/skatt/skattekort', difficulty: 'medium', time: 15 },
  { key: 'skatteattest', href: '/skatt/skatteattest', difficulty: 'easy', time: 5 },
];

// Important dates section
function ImportantDatesSection() {
  const t = useTranslations('services.skatt');

  const dates = [
    { date: t('datesMarch'), title: t('datesMarchTitle'), desc: t('datesMarchDesc') },
    { date: t('datesApril'), title: t('datesAprilTitle'), desc: t('datesAprilDesc') },
    { date: t('datesJune'), title: t('datesJuneTitle'), desc: t('datesJuneDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('importantDates')}</h2>
      <div className="space-y-3">
        {dates.map((item, index) => (
          <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
            <div className="bg-skatt-green text-white px-3 py-1.5 rounded-lg text-sm font-bold flex-shrink-0">
              {item.date}
            </div>
            <div>
              <p className="font-medium text-gray-900">{item.title}</p>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default function SkattContent() {
  const t = useTranslations('services.skatt');

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
      description: t('relatedNav'),
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/helse',
      title: 'Helsenorge',
      description: t('relatedHelse'),
      icon: <HealthIcon className="h-5 w-5 text-helse-red" />,
      iconBgColor: 'bg-helse-red/10',
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
      hubKey="skatt"
      translationNamespace="services.skatt"
      guidesNamespace="guides.skatt"
      brandColor="bg-skatt-green"
      hoverColor="text-skatt-green"
      icon={<TaxIcon className="h-8 w-8" />}
      guides={skattGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      middleSection={<ImportantDatesSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
