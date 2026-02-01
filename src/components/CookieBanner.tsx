'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);
  const t = useTranslations('cookieBanner');

  useEffect(() => {
    setMounted(true);
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
    // Dispatch event so GoogleAnalytics component can load
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  // Don't render anything until mounted on client
  if (!mounted || !showBanner) return null;

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
                onClick={declineCookies}
                className="flex-1 sm:flex-none px-4 py-2.5 text-gray-600 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-lg transition-colors text-sm font-medium"
              >
                {t('necessary')}
              </button>
              <button
                onClick={acceptCookies}
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
