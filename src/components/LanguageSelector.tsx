'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { allLocales, localeNames, localeFlags, isLocaleActive, type Locale } from '@/i18n/routing';

interface LanguageSelectorProps {
  compact?: boolean;
}

export default function LanguageSelector({ compact = false }: LanguageSelectorProps) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('common');

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: Locale) => {
    // Kun tillat bytte til aktive språk
    if (isLocaleActive(newLocale)) {
      router.replace(pathname, { locale: newLocale });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center rounded-lg hover:bg-gray-100 transition-colors ${
          compact ? 'h-9 w-9 justify-center' : 'h-9 px-3 gap-2'
        }`}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={t('aria.selectLanguage')}
      >
        <span className="text-lg">{localeFlags[locale]}</span>
        {!compact && (
          <>
            <span className="hidden sm:block text-gray-700">{localeNames[locale]}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </>
        )}
      </button>

      {isOpen && (
        <div
          className="absolute ltr:right-0 rtl:left-0 mt-2 w-56 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
          role="listbox"
          aria-label={t('aria.availableLanguages')}
        >
          {allLocales.map((loc) => {
            const isActive = isLocaleActive(loc);
            const isCurrentLocale = locale === loc;

            return (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                disabled={!isActive}
                className={`w-full flex items-center gap-3 px-4 py-3 transition-colors ${
                  isCurrentLocale
                    ? 'bg-blue-50 text-nav-blue font-medium'
                    : isActive
                      ? 'text-gray-700 hover:bg-gray-50 active:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                }`}
                role="option"
                aria-selected={isCurrentLocale}
                aria-disabled={!isActive}
              >
                <span className={`text-xl ${!isActive ? 'opacity-50' : ''}`}>{localeFlags[loc]}</span>
                <span className="flex-1 text-left">
                  {localeNames[loc]}
                  {!isActive && (
                    <span className="block text-xs text-gray-400 font-normal">
                      {t('comingSoon')}
                    </span>
                  )}
                </span>
                {isCurrentLocale && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-nav-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
