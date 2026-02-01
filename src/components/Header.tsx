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

  useEffect(() => {
    setMenuOpen(false);
    setMoreOpen(false);
  }, [pathname]);

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
    }, 150);
  }, []);

  return (
    <header className="bg-white border-b border-gray-100 header-sticky safe-area-top">
      <a href="#main-content" className="skip-link">
        {tCommon('skipToContent')}
      </a>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo with subtle tagline */}
          <Link href="/" className="flex items-center gap-2.5 no-underline">
            <div className="bg-nav-blue text-white p-1.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-gray-900 leading-tight">{t('siteName')}</span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium">{t('tagline')}</span>
            </div>
          </Link>

          {/* Desktop nav - ultra minimal */}
          <nav className="hidden md:flex items-center gap-1">
            <Link href="/nav" className="px-3 py-2 text-gray-600 hover:text-nav-blue transition-colors font-medium no-underline">
              {t('nav')}
            </Link>
            <Link href="/skatt" className="px-3 py-2 text-gray-600 hover:text-nav-blue transition-colors font-medium no-underline">
              {t('skatt')}
            </Link>
            <Link href="/helse" className="px-3 py-2 text-gray-600 hover:text-nav-blue transition-colors font-medium no-underline">
              {t('helse')}
            </Link>

            {/* More dropdown */}
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="px-3 py-2 flex items-center gap-1 text-gray-600 hover:text-nav-blue transition-colors"
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
                    className="absolute top-full right-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-200 p-4 w-[380px] max-w-none z-50"
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMoreOpen(false);
                      }
                    }}
                  >
                    {/* 2-column grid for services */}
                    <div className="grid grid-cols-2 gap-1 [&>*]:max-w-none">
                      <Link href="/sikkerhet" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                        {t('sikkerhet')}
                      </Link>
                      <Link href="/bank" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                        {t('bank')}
                      </Link>
                      <Link href="/digital" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        {t('digital')}
                      </Link>
                      <Link href="/bolig" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        {t('bolig')}
                      </Link>
                      <Link href="/utdanning" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
                        {t('utdanning')}
                      </Link>
                      <Link href="/id" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>
                        {t('id')}
                      </Link>
                      <Link href="/grunnleggende" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        {t('grunnleggende')}
                      </Link>
                      <Link href="/ny-i-norge" className="flex items-center gap-2.5 px-3 py-2.5 hover:bg-gray-50 rounded-lg no-underline text-gray-700 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t('nyINorge')}
                      </Link>
                    </div>

                    {/* Divider */}
                    <hr className="my-3 border-gray-100" />

                    {/* Tools row */}
                    <div className="flex gap-1 [&>*]:max-w-none">
                      <Link href="/ordbok" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg no-underline text-gray-500 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        {t('ordbok')}
                      </Link>
                      <Link href="/faq" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg no-underline text-gray-500 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        {t('faq')}
                      </Link>
                      <Link href="/favoritter" className="flex-1 flex items-center justify-center gap-2 px-3 py-2 hover:bg-gray-50 rounded-lg no-underline text-gray-500 text-sm" role="menuitem" tabIndex={0}>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                        {tCommon('favorites')}
                      </Link>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="ml-2">
              <LanguageSelector compact />
            </div>
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center gap-2 md:hidden">
            <LanguageSelector compact />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? tCommon('close') + ' ' + tCommon('menu') : tCommon('open') + ' ' + tCommon('menu')}
              aria-expanded={menuOpen}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden py-3 border-t border-gray-100 max-h-[60vh] overflow-y-auto">
            <div className="flex flex-col">
              <Link href="/nav" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline font-medium" onClick={() => setMenuOpen(false)}>
                {t('nav')}
              </Link>
              <Link href="/skatt" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline font-medium" onClick={() => setMenuOpen(false)}>
                {t('skatt')}
              </Link>
              <Link href="/helse" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline font-medium" onClick={() => setMenuOpen(false)}>
                {t('helse')}
              </Link>
              <Link href="/sikkerhet" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('sikkerhet')}
              </Link>
              <Link href="/bank" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('bank')}
              </Link>
              <Link href="/digital" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('digital')}
              </Link>
              <Link href="/ny-i-norge" className="py-3 px-2 text-gray-700 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('nyINorge')}
              </Link>
              <hr className="my-2 border-gray-100" />
              <Link href="/ordbok" className="py-3 px-2 text-gray-600 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('ordbok')}
              </Link>
              <Link href="/faq" className="py-3 px-2 text-gray-600 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {t('faq')}
              </Link>
              <Link href="/favoritter" className="py-3 px-2 text-gray-600 hover:text-nav-blue no-underline" onClick={() => setMenuOpen(false)}>
                {tCommon('favorites')}
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
