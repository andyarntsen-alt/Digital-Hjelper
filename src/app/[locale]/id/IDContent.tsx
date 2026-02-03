'use client';

import { useTranslations } from 'next-intl';
import HubLayout, { GuideCardData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { IdCardIcon, LockIcon, NavBuildingIcon, TaxIcon } from '@/components/icons';

// Guide configuration
const idGuides: GuideCardData[] = [
  { key: 'pass', href: '/id/pass', difficulty: 'easy', time: 15 },
  { key: 'forerkort', href: '/id/forerkort', difficulty: 'easy', time: 15 },
  { key: 'idKort', href: '/id/id-kort', difficulty: 'easy', time: 15 },
];

// Which ID section
function WhichIdSection() {
  const t = useTranslations('services.id');

  const idTypes = [
    { title: t('passInfoTitle'), desc: t('passInfoDesc') },
    { title: t('forerkortInfoTitle'), desc: t('forerkortInfoDesc') },
    { title: t('idKortInfoTitle'), desc: t('idKortInfoDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('whichIdTitle')}</h2>
      <div className="space-y-3">
        {idTypes.map((item, index) => (
          <div key={index} className="p-4 bg-white border border-gray-200 rounded-xl">
            <p className="font-medium text-gray-900">{item.title}</p>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default function IDContent() {
  const t = useTranslations('services.id');

  // Related services
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankID') || 'Digital identitet',
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
    {
      href: '/nav',
      title: 'NAV',
      description: t('relatedNav') || 'Trenger du legitimasjon for NAV',
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkatt') || 'Skattemessige forhold',
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
  ];

  return (
    <HubLayout
      hubKey="id"
      translationNamespace="services.id"
      guidesNamespace="guides.id"
      brandColor="bg-cyan-500"
      hoverColor="text-cyan-600"
      icon={<IdCardIcon className="h-8 w-8" />}
      guides={idGuides}
      relatedServices={relatedServices}
      middleSection={<WhichIdSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
