'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function AccessibilityToolbar() {
  const t = useTranslations('accessibility');
  const tCommon = useTranslations('common');
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Last innstillinger fra localStorage
    const savedFontSize = localStorage.getItem('fontSize') as 'normal' | 'large' | 'extra-large' | null;
    const savedContrast = localStorage.getItem('highContrast') === 'true';

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrast) setHighContrast(savedContrast);
  }, []);

  useEffect(() => {
    // Oppdater HTML-klasser
    document.documentElement.classList.remove('large-text', 'extra-large-text', 'high-contrast');

    if (fontSize === 'large') {
      document.documentElement.classList.add('large-text');
    } else if (fontSize === 'extra-large') {
      document.documentElement.classList.add('extra-large-text');
    }

    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    }

    // Lagre innstillinger
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('highContrast', String(highContrast));
  }, [fontSize, highContrast]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nav-blue text-white p-4 rounded-full shadow-lg hover:bg-nav-dark transition-colors"
        aria-label={t('title')}
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 bg-white rounded-xl shadow-2xl p-6 w-80 border-2 border-gray-200">
          <h3 className="text-xl font-bold mb-4">{t('title')}</h3>

          <div className="mb-6">
            <p className="font-semibold mb-3">{t('fontSize')}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setFontSize('normal')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                  fontSize === 'normal'
                    ? 'bg-nav-blue text-white border-nav-blue'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-nav-blue'
                }`}
              >
                <span className="text-base">A</span>
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                  fontSize === 'large'
                    ? 'bg-nav-blue text-white border-nav-blue'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-nav-blue'
                }`}
              >
                <span className="text-lg">A</span>
              </button>
              <button
                onClick={() => setFontSize('extra-large')}
                className={`flex-1 py-3 px-4 rounded-lg border-2 transition-colors ${
                  fontSize === 'extra-large'
                    ? 'bg-nav-blue text-white border-nav-blue'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-nav-blue'
                }`}
              >
                <span className="text-xl">A</span>
              </button>
            </div>
          </div>

          <div className="mb-4">
            <button
              onClick={() => setHighContrast(!highContrast)}
              className={`w-full py-3 px-4 rounded-lg border-2 transition-colors flex items-center justify-between ${
                highContrast
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-nav-blue'
              }`}
            >
              <span>{t('highContrast')}</span>
              <span className={`w-12 h-6 rounded-full transition-colors ${highContrast ? 'bg-green-500' : 'bg-gray-300'} relative`}>
                <span className={`absolute top-1 w-4 h-4 rounded-full bg-white transition-transform ${highContrast ? 'right-1' : 'left-1'}`} />
              </span>
            </button>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            className="w-full py-2 text-gray-600 hover:text-gray-800"
          >
            {tCommon('close')}
          </button>
        </div>
      )}
    </div>
  );
}
