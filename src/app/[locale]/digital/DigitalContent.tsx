'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import HubLayout, { GuideCardData, RelatedServiceData } from '@/components/layouts/HubLayout';
import { ComputerIcon, LockIcon, NavBuildingIcon, TaxIcon } from '@/components/icons';

// Guide configuration
const digitalGuides: GuideCardData[] = [
  { key: 'epost', href: '/digital/epost', difficulty: 'easy', time: 15 },
  { key: 'digipost', href: '/digital/digipost', difficulty: 'easy', time: 10 },
  { key: 'altinn', href: '/digital/altinn', difficulty: 'medium', time: 15 },
  { key: 'minside', href: '/digital/minside', difficulty: 'easy', time: 10 },
  { key: 'posten', href: '/digital/posten', difficulty: 'easy', time: 10 },
];

// Important services section
function ImportantServicesSection() {
  const t = useTranslations('services.digital');

  const services = [
    { href: '/digital/digipost', title: t('serviceDigipost'), desc: t('serviceDigipostDesc') },
    { href: '/digital/altinn', title: t('serviceAltinn'), desc: t('serviceAltinnDesc') },
    { href: '/sikkerhet/bankid', title: t('serviceIdPorten'), desc: t('serviceIdPortenDesc') },
    { href: '/sikkerhet/bankid', title: t('serviceBankId'), desc: t('serviceBankIdDesc') },
  ];

  return (
    <>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">{t('importantServicesTitle')}</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {services.map((service, index) => (
          <Link key={index} href={service.href} className="group p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline block">
            <p className="font-medium text-gray-900 group-hover:text-teal-600 transition-colors">{service.title}</p>
            <p className="text-gray-600 text-sm">{service.desc}</p>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function DigitalContent() {
  const t = useTranslations('services.digital');

  // Related services
  const relatedServices: RelatedServiceData[] = [
    {
      href: '/sikkerhet/bankid',
      title: 'BankID',
      description: t('relatedBankID'),
      icon: <LockIcon className="h-5 w-5 text-purple-600" />,
      iconBgColor: 'bg-purple-100',
    },
    {
      href: '/nav',
      title: 'NAV',
      description: t('relatedNAV'),
      icon: <NavBuildingIcon className="h-5 w-5 text-nav-blue" />,
      iconBgColor: 'bg-nav-blue/10',
    },
    {
      href: '/skatt',
      title: 'Skatteetaten',
      description: t('relatedSkatt'),
      icon: <TaxIcon className="h-5 w-5 text-skatt-green" />,
      iconBgColor: 'bg-skatt-green/10',
    },
  ];

  return (
    <HubLayout
      hubKey="digital"
      translationNamespace="services.digital"
      guidesNamespace="guides.digital"
      brandColor="bg-teal-600"
      hoverColor="text-teal-600"
      icon={<ComputerIcon className="h-8 w-8" />}
      guides={digitalGuides}
      relatedServices={relatedServices}
      middleSection={<ImportantServicesSection />}
      datePublished="2024-01-01"
      dateModified="2026-01-30"
    />
  );
}
