'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');

  return (
    <footer className="print:hidden bg-gray-950 text-gray-400 mt-16 safe-area-bottom">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Navigation links - single centered line */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm mb-6">
          <Link href="/nav" className="hover:text-white transition-colors no-underline">
            {tHeader('nav')}
          </Link>
          <Link href="/skatt" className="hover:text-white transition-colors no-underline">
            {tHeader('skatt')}
          </Link>
          <Link href="/helse" className="hover:text-white transition-colors no-underline">
            {tHeader('helse')}
          </Link>
          <Link href="/ordbok" className="hover:text-white transition-colors no-underline">
            {tHeader('ordbok')}
          </Link>
          <Link href="/om" className="hover:text-white transition-colors no-underline">
            {t('about')}
          </Link>
          <a href="mailto:kontakt@lettdigital.no" className="hover:text-white transition-colors no-underline">
            {t('contact')}
          </a>
        </nav>

        {/* Disclaimer - compact */}
        <p className="text-xs text-gray-500 text-center max-w-2xl mx-auto mb-6 leading-relaxed">
          <span className="text-gray-400">{t('disclaimerTitle')}:</span> {t('disclaimerText')}
        </p>

        {/* Copyright line */}
        <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-1 text-xs text-gray-500">
          <span>© {new Date().getFullYear()} {t('copyright')}</span>
          <span className="hidden sm:inline">·</span>
          <Link href="/personvern" className="hover:text-gray-300 transition-colors no-underline">
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
