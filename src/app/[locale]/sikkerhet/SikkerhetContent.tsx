'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { ShieldIcon, NavBuildingIcon, HealthIcon, BankIcon, WarningIcon } from '@/components/icons';

// Guide configuration - sikkerhet uses different structure
const sikkerhetGuides: GuideCardData[] = [
  { key: 'bankid', href: '/sikkerhet/bankid', difficulty: 'easy', time: 10 },
  { key: 'svindel', href: '/sikkerhet/svindel', difficulty: 'easy', time: 15 },
  { key: 'phishing', href: '/sikkerhet/phishing', difficulty: 'easy', time: 10 },
  { key: 'passord', href: '/sikkerhet/passord', difficulty: 'easy', time: 8 },
];

// Warning signs and "Been Scammed" sections
function SecurityInfoSections() {
  const t = useTranslations('services.sikkerhet');

  const warningSigns = [
    t('warningSigns.personalInfo'),
    t('warningSigns.urgent'),
    t('warningSigns.prize'),
    t('warningSigns.tooGood'),
    t('warningSigns.spelling'),
    t('warningSigns.strangeLinks'),
  ];

  const scammedSteps = [
    t('beenScammedSteps.bank'),
    t('beenScammedSteps.police'),
    t('beenScammedSteps.password'),
    t('beenScammedSteps.idTheft'),
  ];

  return (
    <>
      {/* Warning signs */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('warningSignsTitle')}</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {warningSigns.map((sign, index) => (
          <div key={index} className="flex items-start gap-3 p-4 bg-white border border-gray-200 rounded-xl">
            <WarningIcon className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <span className="text-gray-700">{sign}</span>
          </div>
        ))}
      </div>

      {/* If scammed */}
      <div className="mt-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">{t('beenScammedTitle')}</h2>
        <p className="text-gray-600 mb-6">{t('beenScammedText')}</p>
        <div className="space-y-3">
          {scammedSteps.map((step, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white border border-gray-200 rounded-xl">
              <span className="bg-gray-100 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                {index + 1}
              </span>
              <span className="text-gray-700">{step}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default function SikkerhetContent() {
  const t = useTranslations('services.sikkerhet');

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
      href: '/bank',
      title: 'Bank',
      description: t('relatedBank'),
      icon: <BankIcon className="h-5 w-5 text-orange-600" />,
      iconBgColor: 'bg-orange-100',
    },
  ];

  return (
    <HubLayout
      hubKey="sikkerhet"
      translationNamespace="services.sikkerhet"
      guidesNamespace="guides.sikkerhet"
      brandColor="bg-purple-600"
      hoverColor="text-purple-600"
      icon={<ShieldIcon className="h-8 w-8" />}
      guides={sikkerhetGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      middleSection={<SecurityInfoSections />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
