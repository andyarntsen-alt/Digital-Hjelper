'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { HomeIcon, NavBuildingIcon, TaxIcon, LockIcon } from '@/components/icons';

// Guide configuration
const boligGuides: GuideCardData[] = [
  { key: 'bostotte', href: '/bolig/bostotte', difficulty: 'medium', time: 20 },
  { key: 'startlan', href: '/bolig/startlan', difficulty: 'medium', time: 25 },
  { key: 'kommunalBolig', href: '/bolig/kommunal-bolig', difficulty: 'medium', time: 20 },
];

// Who can get help section
function WhoCanGetHelpSection() {
  const t = useTranslations('services.bolig');

  const helpItems = [
    { title: t('bostotteTitle'), desc: t('bostotteDesc') },
    { title: t('startlanTitle'), desc: t('startlanDesc') },
    { title: t('kommunalBoligTitle'), desc: t('kommunalBoligDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('whoCanGetHelpTitle')}</h2>
      <div className="space-y-3">
        {helpItems.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-xl">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function BoligContent() {
  const t = useTranslations('services.bolig');

  // Related services
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/nav',
      title: 'NAV',
      description: t('relatedNav') || 'Økonomisk støtte',
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkatt') || 'Skattefradrag for bolig',
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankID') || 'Innlogging og sikkerhet',
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
  ];

  return (
    <HubLayout
      hubKey="bolig"
      translationNamespace="services.bolig"
      guidesNamespace="guides.bolig"
      brandColor="bg-teal-500"
      hoverColor="text-teal-600"
      icon={<HomeIcon className="h-8 w-8" />}
      guides={boligGuides}
      relatedServices={relatedServices}
      middleSection={<WhoCanGetHelpSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
