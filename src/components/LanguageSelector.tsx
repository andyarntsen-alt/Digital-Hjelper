'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { allLocales, localeNames, localeFlags, isLocaleActive } from '@/i18n/routing';

export default function LanguageSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    // Kun tillat bytte til aktive språk
    if (isLocaleActive(newLocale)) {
      router.replace(pathname, { locale: newLocale as any });
    }
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label="Velg språk"
      >
        <span className="text-xl">{localeFlags[locale]}</span>
        <span className="hidden sm:inline text-gray-700">{localeNames[locale]}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50"
          role="listbox"
          aria-label="Tilgjengelige språk"
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
                      ? 'text-gray-700 hover:bg-gray-50'
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
                      Coming soon
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
