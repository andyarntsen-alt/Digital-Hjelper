'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTranslations } from 'next-intl';

export default function AccessibilityToolbar() {
  const t = useTranslations('accessibility');
  const tCommon = useTranslations('common');
  const [mounted, setMounted] = useState(false);
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'extra-large'>('normal');
  const [highContrast, setHighContrast] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  useEffect(() => {
    setMounted(true);
    // Sjekk om Web Speech API er støttet
    setSpeechSupported('speechSynthesis' in window);

    // Last innstillinger fra localStorage
    const savedFontSize = localStorage.getItem('fontSize') as 'normal' | 'large' | 'extra-large' | null;
    const savedContrast = localStorage.getItem('highContrast') === 'true';

    if (savedFontSize) setFontSize(savedFontSize);
    if (savedContrast) setHighContrast(savedContrast);

    // Cleanup ved unmount
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakPageContent = useCallback(() => {
    if (!speechSupported) return;

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    // Finn hovedinnholdet på siden
    const mainContent = document.getElementById('main-content') || document.querySelector('main') || document.body;

    // Hent tekstinnhold, filtrer bort skjulte elementer og navigasjon
    const walker = document.createTreeWalker(
      mainContent,
      NodeFilter.SHOW_TEXT,
      {
        acceptNode: (node) => {
          const parent = node.parentElement;
          if (!parent) return NodeFilter.FILTER_REJECT;

          // Sjekk om elementet er synlig
          const style = window.getComputedStyle(parent);
          if (style.display === 'none' || style.visibility === 'hidden') {
            return NodeFilter.FILTER_REJECT;
          }

          // Hopp over visse elementer
          const tagName = parent.tagName.toLowerCase();
          if (['script', 'style', 'noscript', 'button', 'nav'].includes(tagName)) {
            return NodeFilter.FILTER_REJECT;
          }

          // Sjekk om teksten har innhold
          const text = node.textContent?.trim();
          if (!text || text.length === 0) {
            return NodeFilter.FILTER_REJECT;
          }

          return NodeFilter.FILTER_ACCEPT;
        }
      }
    );

    const textParts: string[] = [];
    let node;
    while ((node = walker.nextNode())) {
      const text = node.textContent?.trim();
      if (text) {
        textParts.push(text);
      }
    }

    const fullText = textParts.join('. ').replace(/\s+/g, ' ');

    if (!fullText) return;

    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'nb-NO'; // Norsk bokmål
    utterance.rate = 0.9; // Litt saktere for bedre forståelse
    utterance.pitch = 1;

    utterance.onend = () => {
      setIsSpeaking(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
    };

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setIsSpeaking(true);
  }, [speechSupported, isSpeaking]);

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

  // Don't render until mounted to avoid hydration mismatch
  if (!mounted) {
    return (
      <div className="fixed bottom-4 right-4 z-50 safe-area-bottom safe-area-right">
        <button
          className="bg-nav-blue text-white p-3 sm:p-4 rounded-full shadow-lg"
          aria-label={t('title')}
          disabled
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 safe-area-bottom safe-area-right">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nav-blue text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-nav-dark active:bg-nav-dark transition-colors"
        aria-label={t('title')}
        aria-expanded={isOpen}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute bottom-16 sm:bottom-20 right-0 bg-white rounded-xl shadow-2xl p-4 sm:p-6 w-[calc(100vw-2rem)] sm:w-80 max-w-80 border-2 border-gray-200">
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

          {/* Tekst-til-tale */}
          {speechSupported && (
            <div className="mb-4">
              <button
                onClick={speakPageContent}
                className={`w-full py-3 px-4 rounded-lg border-2 transition-colors flex items-center justify-between ${
                  isSpeaking
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:border-nav-blue'
                }`}
                aria-pressed={isSpeaking}
              >
                <span className="flex items-center gap-2">
                  {isSpeaking ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                      </svg>
                      {t('stopReading')}
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      </svg>
                      {t('readAloud')}
                    </>
                  )}
                </span>
              </button>
            </div>
          )}

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
