'use client';

import { Link } from '@/i18n/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { FAQSchema, BreadcrumbSchema, ArticleSchema } from '@/components/StructuredData';
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronDownIcon,
  CheckIcon,
  PhoneIcon,
  LocationIcon,
} from '@/components/icons';
import { type CityDataType, getOtherCities, type CitySlug } from '@/data/cityData';
import React from 'react';

// Additional icons needed for city pages
const BuildingIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const MunicipalityIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
  </svg>
);

const TransportIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const MapPinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
  </svg>
);

export interface FAQData {
  question: string;
  answer: string;
}

export interface CityLayoutProps {
  citySlug: CitySlug;
  cityData: CityDataType;
  faqs: FAQData[];
  datePublished?: string;
  dateModified?: string;
}

export default function CityLayout({
  citySlug,
  cityData,
  faqs,
  datePublished = '2024-01-01',
  dateModified = '2026-01-30',
}: CityLayoutProps) {
  const locale = useLocale();
  const t = useTranslations('cities');
  const tCommon = useTranslations('common');

  const cityName = t(`${citySlug}.name`);
  const otherCities = getOtherCities(citySlug);

  // Helper for locale-aware paths (no prefix for Norwegian)
  const getLocalizedPath = (path: string) =>
    locale === 'no' ? path : `/${locale}${path}`;

  // Helper to get icon for useful links
  const getLinkIcon = (iconType: string) => {
    switch (iconType) {
      case 'municipality':
        return <MunicipalityIcon className="h-5 w-5 text-blue-600" />;
      case 'transport':
        return <TransportIcon className="h-5 w-5 text-green-600" />;
      case 'search':
        return <SearchIcon className="h-5 w-5 text-nav-blue" />;
      default:
        return <MunicipalityIcon className="h-5 w-5 text-blue-600" />;
    }
  };

  const getLinkBgColor = (iconType: string) => {
    switch (iconType) {
      case 'municipality':
        return 'bg-blue-100';
      case 'transport':
        return 'bg-green-100';
      case 'search':
        return 'bg-nav-blue/10';
      default:
        return 'bg-blue-100';
    }
  };

  return (
    <>
      {/* SEO: Structured Data */}
      <FAQSchema questions={faqs} />
      <BreadcrumbSchema
        items={[
          { name: tCommon('home'), url: getLocalizedPath('/') },
          { name: t('title'), url: getLocalizedPath('/byer') },
          { name: cityName, url: getLocalizedPath(`/byer/${citySlug}`) },
        ]}
      />
      <ArticleSchema
        title={t('publicServicesIn', { city: cityName })}
        description={t(`${citySlug}.intro`)}
        url={getLocalizedPath(`/byer/${citySlug}`)}
        datePublished={datePublished}
        dateModified={dateModified}
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-12 sm:py-16">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="text-gray-500 hover:text-nav-blue no-underline mb-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            {tCommon('backToHome')}
          </Link>

          <div className="flex items-start gap-4 mb-8">
            <div className="bg-blue-600 text-white p-3 rounded-xl flex-shrink-0">
              <BuildingIcon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                {t('publicServicesIn', { city: cityName })}
              </h1>
              <p className="text-lg text-gray-600">{t('navAndServices')}</p>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 p-4 rounded-xl">
            <p className="text-gray-700">{t(`${citySlug}.intro`)}</p>
          </div>
        </div>

        {/* NAV Offices */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('navOfficesIn', { city: cityName })}
          </h2>

          {/* NAV Contact Center */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-nav-blue text-white p-2 rounded-lg flex-shrink-0">
                <PhoneIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="font-bold text-gray-900">{t('navContactCenter')}</p>
                <p className="text-xl font-bold text-nav-blue">55 55 33 33</p>
                <p className="text-gray-600 text-sm">{t('openWeekdays')}</p>
              </div>
            </div>
          </div>

          {/* Office Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {cityData.navOffices.map((kontor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors"
              >
                <h3 className="font-bold text-gray-900">NAV {kontor.bydel}</h3>
                <p className="text-gray-600 text-sm">{kontor.adresse}</p>
                <p className="text-gray-500 text-sm">{kontor.postnr}</p>
                <p className="text-sm text-nav-blue mt-2">
                  {t('open')}: {t('weekdays')} 09:00-15:00
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="/nav"
              className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1"
            >
              {t('seeAllNavGuides')}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Tax Section (only for some cities like Oslo) */}
        {cityData.hasTaxSection && (
          <section className="mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
              {t('taxOfficeIn', { city: cityName })}
            </h2>

            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{t('taxOffice')} {cityName}</h3>
              <p className="text-gray-600 mb-3">{t('digitalServices')}</p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-skatt-green flex-shrink-0" />
                  {t('taxReturn')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-skatt-green flex-shrink-0" />
                  {t('taxCard')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-skatt-green flex-shrink-0" />
                  {t('movingNotice')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5 text-skatt-green flex-shrink-0" />
                  {t('nationalRegistry')}
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/skatt"
                  className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1"
                >
                  {t('seeAllTaxGuides')}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Health Services */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('healthServicesIn', { city: cityName })}
          </h2>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Emergency Room */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">
                {t('emergencyRoomIn', { city: cityName })}
              </h3>
              <p className="text-gray-700 text-sm">{t(`${citySlug}.emergencyAddress`)}</p>
              <p className="text-xl font-bold text-helse-red mt-2">116 117</p>
              <p className="text-gray-600 text-sm">{t('open24h')}</p>
              <p className="text-helse-red text-sm mt-2">{t('lifeThreateningCall')}</p>
            </div>

            {/* Helsenorge */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-gray-900 mb-2">{t('helsenorge')}</h3>
              <p className="text-gray-600 text-sm mb-3">{t('digitalHealthServices')}</p>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-helse-red flex-shrink-0" />
                  {t('bookAppointment')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-helse-red flex-shrink-0" />
                  {t('viewPrescriptions')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-helse-red flex-shrink-0" />
                  {t('readJournal')}
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="h-4 w-4 text-helse-red flex-shrink-0" />
                  {t('changeGP')}
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/helse"
                  className="text-nav-blue hover:underline font-medium inline-flex items-center gap-1 text-sm"
                >
                  {t('seeAllHealthGuides')}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Useful Links */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('usefulLinksFor', { city: cityName })}
          </h2>

          <div className="grid sm:grid-cols-3 gap-4">
            {cityData.usefulLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline text-center"
              >
                <div
                  className={`w-10 h-10 ${getLinkBgColor(link.iconType)} rounded-lg flex items-center justify-center mx-auto mb-2`}
                >
                  {getLinkIcon(link.iconType)}
                </div>
                <p className="font-medium text-gray-900">
                  {link.titleKey === 'municipality'
                    ? t('municipality', { city: cityName })
                    : link.titleKey === 'findNAVOffice'
                      ? t('findNAVOffice')
                      : link.titleKey}
                </p>
                <p className="text-sm text-gray-500">
                  {link.subtitle === 'publicTransport'
                    ? t('publicTransport')
                    : link.subtitle === 'allDistricts'
                      ? t('allDistricts')
                      : link.subtitle}
                </p>
              </a>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
            {t('faqAbout', { city: cityName })}
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white border border-gray-200 rounded-xl group">
                <summary className="cursor-pointer list-none flex justify-between items-center p-4">
                  <h3 className="text-base font-semibold text-gray-900 pr-4">{faq.question}</h3>
                  <ChevronDownIcon className="h-5 w-5 text-gray-400 transform transition-transform group-open:rotate-180 flex-shrink-0" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </section>

        {/* Other Cities */}
        <section className="bg-gray-50 border border-gray-200 rounded-xl p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{t('otherCities')}</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {otherCities.map((city) => (
              <Link
                key={city}
                href={`/byer/${city}`}
                className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors no-underline"
              >
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="h-4 w-4 text-blue-600" />
                </div>
                <p className="font-medium text-gray-900 text-sm">{t(`${city}.name`)}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Last Updated */}
        <p className="mt-8 text-sm text-gray-400">{tCommon('lastUpdatedJan2026')}</p>
      </div>
    </>
  );
}
