'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/navigation';

export default function CookieBanner() {
  const [mounted, setMounted] = useState(false);
  const [showBanner, setShowBanner] = useState(false);

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
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  // Don't render anything until mounted on client
  if (!mounted || !showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 md:p-6 z-50 shadow-2xl">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold mb-2">Vi bruker informasjonskapsler (cookies)</h3>
            <p className="text-gray-300 text-sm md:text-base">
              Vi bruker kun nødvendige informasjonskapsler for å huske dine innstillinger (tekststørrelse, favoritter).
              Vi sporer ikke din aktivitet og deler ikke data med tredjeparter.{' '}
              <Link href="/personvern" className="text-blue-400 hover:text-blue-300 underline">
                Les vår personvernerklæring
              </Link>
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-gray-300 hover:text-white border border-gray-600 rounded-lg hover:border-gray-400 transition-colors"
            >
              Bare nødvendige
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 bg-nav-blue hover:bg-nav-dark text-white rounded-lg font-medium transition-colors"
            >
              Godta alle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
