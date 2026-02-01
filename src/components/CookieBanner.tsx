'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
}

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const t = useTranslations('cookieBanner');

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const saveConsent = (consent: CookieConsent) => {
    localStorage.setItem('cookie-consent', JSON.stringify(consent));
    setShowBanner(false);
    setShowSettings(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true });
  };

  const saveSettings = () => {
    saveConsent({ necessary: true, analytics: analyticsEnabled });
  };

  // Don't render anything until mounted on client
  if (!mounted || !showBanner) return null;

  // Settings modal
  if (showSettings) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40"
          onClick={() => setShowSettings(false)}
        />

        {/* Modal */}
        <div className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">{t('settingsTitle')}</h2>
            <button
              onClick={() => setShowSettings(false)}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Lukk"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Cookie options */}
          <div className="space-y-4 mb-6">
            {/* Necessary cookies - always on */}
            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1 pr-4">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-medium text-gray-900">{t('necessaryCookies')}</span>
                  <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">{t('alwaysOn')}</span>
                </div>
                <p className="text-sm text-gray-600">{t('necessaryDesc')}</p>
              </div>
              <div className="flex-shrink-0">
                <div className="w-11 h-6 bg-nav-blue rounded-full opacity-50 cursor-not-allowed flex items-center justify-end px-1">
                  <div className="w-4 h-4 bg-white rounded-full shadow" />
                </div>
              </div>
            </div>

            {/* Analytics cookies - toggleable */}
            <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
              <div className="flex-1 pr-4">
                <span className="font-medium text-gray-900 block mb-1">{t('analyticsCookies')}</span>
                <p className="text-sm text-gray-600">{t('analyticsDesc')}</p>
              </div>
              <div className="flex-shrink-0">
                <button
                  onClick={() => setAnalyticsEnabled(!analyticsEnabled)}
                  className={`w-11 h-6 rounded-full transition-colors flex items-center px-1 ${
                    analyticsEnabled ? 'bg-nav-blue justify-end' : 'bg-gray-300 justify-start'
                  }`}
                  role="switch"
                  aria-checked={analyticsEnabled}
                >
                  <div className="w-4 h-4 bg-white rounded-full shadow" />
                </button>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={saveSettings}
              className="flex-1 px-4 py-2.5 bg-nav-blue hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
            >
              {t('saveSettings')}
            </button>
          </div>

          {/* Privacy link */}
          <p className="text-center mt-4 text-xs text-gray-500">
            <Link href="/personvern" className="text-nav-blue hover:underline">
              {t('readMore')}
            </Link>
          </p>
        </div>
      </div>
    );
  }

  // Main banner
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      <div className="bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)]">
        <div className="max-w-6xl mx-auto px-4 py-4 md:py-5">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex-1 flex items-start gap-3">
              <div className="hidden sm:flex bg-gray-100 rounded-full p-2 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {t('description')}{' '}
                  <Link href="/personvern" className="text-nav-blue hover:underline font-medium">
                    {t('readMore')}
                  </Link>
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 flex-shrink-0">
              <button
                onClick={() => setShowSettings(true)}
                className="flex-1 sm:flex-none px-4 py-2.5 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors text-sm font-medium"
              >
                {t('settings')}
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 sm:flex-none px-5 py-2.5 bg-nav-blue hover:bg-blue-700 text-white rounded-lg font-medium transition-colors text-sm"
              >
                {t('accept')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
