'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, FAQData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { LightbulbIcon, LockIcon, NavBuildingIcon, HealthIcon } from '@/components/icons';

// Guide configuration
const grunnleggendeGuides: GuideCardData[] = [
  { key: 'smarttelefon', href: '/grunnleggende/smarttelefon', difficulty: 'easy', time: 15 },
  { key: 'nettleser', href: '/grunnleggende/nettleser', difficulty: 'easy', time: 10 },
  { key: 'videosamtale', href: '/grunnleggende/videosamtale', difficulty: 'medium', time: 15 },
  { key: 'passordHjelp', href: '/grunnleggende/passord-hjelp', difficulty: 'easy', time: 10 },
  { key: 'faHjelp', href: '/grunnleggende/fa-hjelp', difficulty: 'easy', time: 5 },
];

// Help cards section
function HelpCardsSection() {
  const t = useTranslations('services.grunnleggende');

  const helpItems = [
    { title: t('seniornett'), desc: t('seniornettDesc') },
    { title: t('library'), desc: t('libraryDesc') },
    { title: t('dataHjelpen'), desc: t('dataHjelpenDesc') },
  ];

  return (
    <>
      <h2 className="text-lg font-bold text-gray-900 mb-3">{t('needMoreHelp')}</h2>
      <p className="text-gray-600 mb-4">{t('needMoreHelpText')}</p>
      <div className="grid sm:grid-cols-3 gap-3">
        {helpItems.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-lg">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function GrunnleggendeContent() {
  const t = useTranslations('services.grunnleggende');

  // FAQs from translations
  const faqs: FAQData[] = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') },
  ];

  // Related services (using "next steps" content)
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('nextBankID'),
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
    {
      href: '/nav',
      title: 'NAV',
      description: t('nextNAV'),
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/helse',
      title: 'Helsenorge',
      description: t('nextHelse'),
      icon: <HealthIcon className="h-5 w-5 text-helse-red" />,
      iconBgColor: 'bg-helse-red/10',
    },
  ];

  return (
    <HubLayout
      hubKey="grunnleggende"
      translationNamespace="services.grunnleggende"
      guidesNamespace="guides.grunnleggende"
      brandColor="bg-grunnleggende-purple"
      hoverColor="text-grunnleggende-purple"
      icon={<LightbulbIcon className="h-8 w-8" />}
      guides={grunnleggendeGuides}
      faqs={faqs}
      relatedServices={relatedServices}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
