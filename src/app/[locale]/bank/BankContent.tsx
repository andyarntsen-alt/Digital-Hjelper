'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { BankIcon, LockIcon, WarningIcon, NavBuildingIcon, CheckIcon } from '@/components/icons';

// Guide configuration
const bankGuides: GuideCardData[] = [
  { key: 'nettbank', href: '/bank/nettbank', difficulty: 'easy', time: 15 },
  { key: 'betaling', href: '/bank/betaling', difficulty: 'easy', time: 10 },
  { key: 'vipps', href: '/bank/vipps', difficulty: 'easy', time: 10 },
  { key: 'gjeld', href: '/bank/gjeld', difficulty: 'easy', time: 8 },
];

// Security Tips Component (middle section)
function SecurityTipsSection() {
  const t = useTranslations('services.bank');

  const tips = [
    t('securityTip1'),
    t('securityTip2'),
    t('securityTip3'),
    t('securityTip4'),
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('securityTipsTitle')}</h2>
      <div className="space-y-3">
        {tips.map((tip, index) => (
          <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-xl">
            <CheckIcon className="h-5 w-5 text-green-600 flex-shrink-0" />
            <span className="text-gray-700">{tip}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default function BankContent() {
  const t = useTranslations('services.bank');

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
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankIdDesc'),
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
    {
      href: '/sikkerhet/svindel',
      title: t('relatedFraudTitle'),
      description: t('relatedFraudDesc'),
      icon: <WarningIcon className="h-5 w-5 text-red-600" />,
      iconBgColor: 'bg-red-100',
    },
    {
      href: '/nav',
      title: 'NAV',
      description: t('relatedNavDesc'),
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
  ];

  return (
    <HubLayout
      hubKey="bank"
      translationNamespace="services.bank"
      guidesNamespace="guides.bank"
      brandColor="bg-orange-500"
      hoverColor="text-orange-600"
      icon={<BankIcon className="h-8 w-8" />}
      guides={bankGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      middleSection={<SecurityTipsSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
