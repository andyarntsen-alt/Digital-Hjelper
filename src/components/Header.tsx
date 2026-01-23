'use client';

import { useState, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('header');
  const tCommon = useTranslations('common');

  // Forsinkelse før lukking for å gjøre menyen mindre sensitiv
  const handleMouseEnter = useCallback(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setMoreOpen(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setMoreOpen(false);
    }, 150); // 150ms forsinkelse før lukking
  }, []);

  return (
    <header className="bg-white shadow-md sticky top-0 z-40">
      <a href="#main-content" className="skip-link">
        {tCommon('skipToContent')}
      </a>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3 no-underline flex-shrink-0">
            <div className="bg-nav-blue text-white p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-2xl font-bold text-gray-800 block">{t('siteName')}</span>
              <span className="block text-sm text-gray-600 whitespace-nowrap">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop meny */}
          <nav className="hidden md:flex items-center gap-4">
            <Link href="/nav" className="text-lg text-gray-700 hover:text-nav-blue font-medium no-underline">
              {t('nav')}
            </Link>
            <Link href="/skatt" className="text-lg text-gray-700 hover:text-nav-blue font-medium no-underline">
              {t('skatt')}
            </Link>
            <Link href="/helse" className="text-lg text-gray-700 hover:text-nav-blue font-medium no-underline">
              {t('helse')}
            </Link>
            <span className="text-gray-300">|</span>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-base text-gray-600 hover:text-nav-blue flex items-center gap-1 py-2"
                onClick={() => setMoreOpen(!moreOpen)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setMoreOpen(!moreOpen);
                  } else if (e.key === 'Escape') {
                    setMoreOpen(false);
                  }
                }}
                aria-expanded={moreOpen}
                aria-haspopup="true"
              >
                {t('more')}
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 transition-transform ${moreOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {moreOpen && (
                <>
                  {/* Usynlig bro for å koble knappen til dropdown */}
                  <div className="absolute top-full left-0 w-full h-2" />
                  <div
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[180px] z-50"
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMoreOpen(false);
                      }
                    }}
                  >
                  <Link href="/sikkerhet" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('sikkerhet')}
                  </Link>
                  <Link href="/bank" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('bank')}
                  </Link>
                  <Link href="/digital" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('digital')}
                  </Link>
                  <Link href="/bolig" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('bolig')}
                  </Link>
                  <Link href="/utdanning" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('utdanning')}
                  </Link>
                  <Link href="/id" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('id')}
                  </Link>
                  <Link href="/grunnleggende" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    Grunnleggende
                  </Link>
                  <hr className="my-2 border-gray-200" />
                  <Link href="/ordbok" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none no-underline" role="menuitem" tabIndex={0}>
                    {t('ordbok')}
                  </Link>
                  </div>
                </>
              )}
            </div>
            <Link href="/faq" className="text-base text-gray-600 hover:text-nav-blue no-underline">
              {t('faq')}
            </Link>
            <Link href="/favoritter" className="text-base text-gray-600 hover:text-nav-blue no-underline flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {tCommon('favorites')}
            </Link>
            <span className="text-gray-300">|</span>
            <LanguageSelector />
          </nav>

          {/* Mobil meny-knapp og språkvelger */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100"
              aria-label={menuOpen ? tCommon('close') + ' ' + tCommon('menu') : tCommon('open') + ' ' + tCommon('menu')}
              aria-expanded={menuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobil meny */}
        {menuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/nav"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav')}
              </Link>
              <Link
                href="/skatt"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('skatt')}
              </Link>
              <Link
                href="/helse"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('helse')}
              </Link>
              <Link
                href="/sikkerhet"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('sikkerhet')}
              </Link>
              <Link
                href="/bank"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('bank')}
              </Link>
              <Link
                href="/digital"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('digital')}
              </Link>
              <Link
                href="/om"
                className="text-xl py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-700 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <hr className="border-gray-200" />
              <Link
                href="/ordbok"
                className="text-lg py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-600 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('ordbok')}
              </Link>
              <Link
                href="/faq"
                className="text-lg py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-600 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {t('faq')}
              </Link>
              <Link
                href="/favoritter"
                className="text-lg py-3 px-4 rounded-lg hover:bg-gray-100 text-gray-600 no-underline"
                onClick={() => setMenuOpen(false)}
              >
                {tCommon('favorites')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
