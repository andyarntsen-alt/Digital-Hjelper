'use client';

import { useEffect } from 'react';

export default function ServiceWorkerRegistration() {
  useEffect(() => {
    if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('LettDigital: Service Worker registrert', registration.scope);

            // Sjekk for oppdateringer
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              if (newWorker) {
                newWorker.addEventListener('statechange', () => {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    // Ny versjon tilgjengelig
                    console.log('LettDigital: Ny versjon tilgjengelig');
                  }
                });
              }
            });
          })
          .catch((error) => {
            console.error('LettDigital: Service Worker feilet', error);
          });
      });
    }
  }, []);

  return null;
}
