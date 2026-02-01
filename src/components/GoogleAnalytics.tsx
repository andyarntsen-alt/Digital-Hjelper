'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GA_MEASUREMENT_ID = 'G-Q0S1HYEQ9T';

export default function GoogleAnalytics() {
  const [hasConsent, setHasConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    setHasConsent(consent === 'accepted');

    // Listen for consent changes (when user accepts cookies)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'cookie-consent') {
        setHasConsent(e.newValue === 'accepted');
      }
    };

    // Also listen for custom event from CookieBanner
    const handleConsentChange = () => {
      const consent = localStorage.getItem('cookie-consent');
      setHasConsent(consent === 'accepted');
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cookie-consent-changed', handleConsentChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cookie-consent-changed', handleConsentChange);
    };
  }, []);

  if (!hasConsent) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            anonymize_ip: true
          });
        `}
      </Script>
    </>
  );
}
