'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { EducationIcon, NavBuildingIcon, TaxIcon, LockIcon } from '@/components/icons';

// Guide configuration
const utdanningGuides: GuideCardData[] = [
  { key: 'studielan', href: '/utdanning/studielan', difficulty: 'medium', time: 20 },
  { key: 'stipend', href: '/utdanning/stipend', difficulty: 'easy', time: 15 },
  { key: 'tilbakebetaling', href: '/utdanning/tilbakebetaling', difficulty: 'medium', time: 15 },
  { key: 'betalingsutsettelse', href: '/utdanning/betalingsutsettelse', difficulty: 'easy', time: 10 },
];

// Who can get support section
function WhoCanGetSupportSection() {
  const t = useTranslations('services.utdanning');

  const supportItems = [
    { title: t('studielanInfoTitle'), desc: t('studielanInfoDesc') },
    { title: t('stipendInfoTitle'), desc: t('stipendInfoDesc') },
    { title: t('utsettelsInfoTitle'), desc: t('utsettelsInfoDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('whoCanGetSupportTitle')}</h2>
      <div className="space-y-3">
        {supportItems.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-xl">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function UtdanningContent() {
  const t = useTranslations('services.utdanning');

  // Related services
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/nav',
      title: 'NAV',
      description: t('relatedNav') || 'Støtte under studier',
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkatt') || 'Skattefradrag for lån',
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankID') || 'Logg inn på Lånekassen',
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
  ];

  return (
    <HubLayout
      hubKey="utdanning"
      translationNamespace="services.utdanning"
      guidesNamespace="guides.utdanning"
      brandColor="bg-indigo-500"
      hoverColor="text-indigo-600"
      icon={<EducationIcon className="h-8 w-8" />}
      guides={utdanningGuides}
      relatedServices={relatedServices}
      middleSection={<WhoCanGetSupportSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
