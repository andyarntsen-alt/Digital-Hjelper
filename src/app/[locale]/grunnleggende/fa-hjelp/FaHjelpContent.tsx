'use client';

import Breadcrumbs from '@/components/Breadcrumbs';
import FavoriteButton from '@/components/FavoriteButton';
import PrintButton from '@/components/PrintButton';
import ShareButton from '@/components/ShareButton';
import { useTranslations } from 'next-intl';

export default function FaHjelpPage() {
  const t = useTranslations('guides.grunnleggende.faHjelp');
  const tNav = useTranslations('header');

  const helpSources = t.raw('helpSources') as { name: string; description: string; howToContact: string; price: string }[];
  const tips = t.raw('tips') as string[];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Breadcrumbs
        items={[
          { label: tNav('grunnleggende'), href: '/grunnleggende' },
          { label: t('title') }
        ]}
      />

      <div className="mb-8">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{t('time')}</span>
          <span className="mx-2">•</span>
          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-sm">{t('difficulty')}</span>
        </div>
        <div className="flex flex-wrap items-start justify-between gap-4">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">{t('title')}</h1>
          <div className="flex items-center gap-2">
            <PrintButton />
            <ShareButton />
            <FavoriteButton guideId="grunnleggende-hjelp" title={t('title')} />
          </div>
        </div>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-3 sm:mt-4">{t('longDescription')}</p>
      </div>

      {/* Intro */}
      <div className="card bg-purple-50 mb-8">
        <p className="text-lg text-gray-700">{t('introText')}</p>
      </div>

      {/* Hjelpekilder */}
      <h2 className="text-2xl font-bold mb-6">{t('helpSourcesTitle')}</h2>
      <div className="space-y-6">
        {helpSources.map((source, index) => (
          <div key={index} className="card">
            <h3 className="text-xl font-bold text-grunnleggende-purple mb-2">{source.name}</h3>
            <p className="text-gray-700 mb-3">{source.description}</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="bg-gray-100 px-3 py-1 rounded-full">
                <span className="font-medium">Kontakt:</span> {source.howToContact}
              </div>
              <div className="bg-green-100 px-3 py-1 rounded-full text-green-700">
                {source.price}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="mt-8 card bg-green-50">
        <h2 className="text-xl font-bold mb-4">{t('tipsTitle')}</h2>
        <ul className="space-y-3 text-gray-700">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span>{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
