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
                    className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px] z-50"
                    role="menu"
                    onKeyDown={(e) => {
                      if (e.key === 'Escape') {
                        setMoreOpen(false);
                      }
                    }}
                  >
                    <Link href="/sikkerhet" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('sikkerhet')}
                    </Link>
                    <Link href="/bank" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('bank')}
                    </Link>
                    <Link href="/digital" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('digital')}
                    </Link>
                    <Link href="/bolig" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('bolig')}
                    </Link>
                    <Link href="/utdanning" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('utdanning')}
                    </Link>
                    <Link href="/id" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('id')}
                    </Link>
                    <Link href="/grunnleggende" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-700" role="menuitem" tabIndex={0}>
                      {t('grunnleggende')}
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <Link href="/ordbok" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-600" role="menuitem" tabIndex={0}>
                      {t('ordbok')}
                    </Link>
                    <Link href="/faq" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-600" role="menuitem" tabIndex={0}>
                      {t('faq')}
                    </Link>
                    <Link href="/favoritter" className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 no-underline text-gray-600" role="menuitem" tabIndex={0}>
                      {tCommon('favorites')}
                    </Link>
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
