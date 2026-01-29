'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import LanguageSelector from './LanguageSelector';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const t = useTranslations('header');
  const tCommon = useTranslations('common');
  const pathname = usePathname();

  // Lukk menyer automatisk ved navigasjon
  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

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
    <header className="bg-white shadow-md header-sticky safe-area-top">
      <a href="#main-content" className="skip-link">
        {tCommon('skipToContent')}
      </a>

      <div className="max-w-6xl mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between py-2 sm:py-3 md:py-4">
          <Link href="/" className="flex items-center gap-2 sm:gap-3 no-underline flex-shrink-0">
            <div className="bg-nav-blue text-white p-1.5 sm:p-2 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="min-w-0">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 block">{t('siteName')}</span>
              <span className="hidden sm:block text-xs sm:text-sm text-gray-600 whitespace-nowrap">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop meny - alle elementer har fast høyde h-9 for perfekt justering */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/nav" className="h-9 px-3 flex items-center text-gray-700 hover:text-nav-blue hover:bg-gray-50 rounded-lg font-medium no-underline">
              {t('nav')}
            </Link>
            <Link href="/skatt" className="h-9 px-3 flex items-center text-gray-700 hover:text-nav-blue hover:bg-gray-50 rounded-lg font-medium no-underline">
              {t('skatt')}
            </Link>
            <Link href="/helse" className="h-9 px-3 flex items-center text-gray-700 hover:text-nav-blue hover:bg-gray-50 rounded-lg font-medium no-underline">
              {t('helse')}
            </Link>

            <div className="h-9 flex items-center px-1">
              <span className="text-gray-300">|</span>
            </div>

            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="h-9 px-3 flex items-center gap-1 text-gray-600 hover:text-nav-blue hover:bg-gray-50 rounded-lg"
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
                  <div className="absolute top-full left-0 w-full h-2" />
                  <div
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 py-2 min-w-[200px] z-50"
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMoreOpen(false);
                      }
                    }}
                  >
                    <Link href="/sikkerhet" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <span className="text-gray-700">{t('sikkerhet')}</span>
                    </Link>
                    <Link href="/bank" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      <span className="text-gray-700">{t('bank')}</span>
                    </Link>
                    <Link href="/digital" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-gray-700">{t('digital')}</span>
                    </Link>
                    <Link href="/bolig" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span className="text-gray-700">{t('bolig')}</span>
                    </Link>
                    <Link href="/utdanning" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                      </svg>
                      <span className="text-gray-700">{t('utdanning')}</span>
                    </Link>
                    <Link href="/id" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                      <span className="text-gray-700">{t('id')}</span>
                    </Link>
                    <Link href="/grunnleggende" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                      <span className="text-gray-700">{t('grunnleggende')}</span>
                    </Link>
                    <hr className="my-2 border-gray-200" />
                    <Link href="/ordbok" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline" role="menuitem" tabIndex={0}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <span className="text-gray-700">{t('ordbok')}</span>
                    </Link>
                  </div>
                </>
              )}
            </div>

            <Link href="/faq" className="h-9 px-3 flex items-center text-gray-600 hover:text-nav-blue hover:bg-gray-50 rounded-lg no-underline">
              {t('faq')}
            </Link>

            <Link href="/favoritter" className="h-9 px-3 flex items-center gap-1.5 text-gray-600 hover:text-nav-blue hover:bg-gray-50 rounded-lg no-underline">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              {tCommon('favorites')}
            </Link>

            <div className="h-9 flex items-center px-1">
              <span className="text-gray-300">|</span>
            </div>

            <LanguageSelector />
          </nav>

          {/* Mobil meny-knapp og språkvelger */}
          <div className="flex items-center gap-1 sm:gap-2 md:hidden">
            <LanguageSelector />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-1.5 sm:p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200"
              aria-label={menuOpen ? tCommon('close') + ' ' + tCommon('menu') : tCommon('open') + ' ' + tCommon('menu')}
              aria-expanded={menuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
          <nav className="md:hidden py-2 border-t border-gray-200 max-h-[60vh] overflow-y-auto overscroll-contain">
            <div className="flex flex-col gap-0.5">
              <Link
                href="/nav"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('nav')}
              </Link>
              <Link
                href="/skatt"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('skatt')}
              </Link>
              <Link
                href="/helse"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('helse')}
              </Link>
              <Link
                href="/sikkerhet"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('sikkerhet')}
              </Link>
              <Link
                href="/bank"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('bank')}
              </Link>
              <Link
                href="/digital"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('digital')}
              </Link>
              <Link
                href="/om"
                className="text-base py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-700 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('about')}
              </Link>
              <hr className="border-gray-200 my-1" />
              <Link
                href="/ordbok"
                className="text-sm py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-600 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('ordbok')}
              </Link>
              <Link
                href="/faq"
                className="text-sm py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-600 no-underline transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t('faq')}
              </Link>
              <Link
                href="/favoritter"
                className="text-sm py-3 px-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 text-gray-600 no-underline transition-colors"
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
