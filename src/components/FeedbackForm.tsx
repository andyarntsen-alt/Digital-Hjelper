'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { useFeedbackForm } from '@/hooks/useFeedbackForm';

export default function FeedbackForm() {
  const t = useTranslations('feedback');
  const tCommon = useTranslations('common');
  const [isOpen, setIsOpen] = useState(false);
  const { rating, setRating, isSubmitting, isSubmitted, error, handleSubmit } = useFeedbackForm();

  // Kompakt "takk"-melding
  if (isSubmitted) {
    return (
      <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-center">
        <p className="text-green-300 text-sm flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          {t('thankYou')}
        </p>
      </div>
    );
  }

  // Kompakt lukket tilstand
  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="w-full bg-gray-700/50 hover:bg-gray-700 rounded-lg p-3 text-left transition-colors group"
      >
        <span className="text-sm font-medium text-gray-300 group-hover:text-white flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {t('title')}
          <svg className="w-4 h-4 ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
    );
  }

  // Åpent skjema - kompakt versjon
  return (
    <div className="bg-gray-700/50 rounded-lg p-4">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-white flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          {t('title')}
        </h4>
        <button
          onClick={() => setIsOpen(false)}
          className="text-gray-400 hover:text-white p-1"
          aria-label={tCommon('close')}
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input type="hidden" name="access_key" value="2b366f73-8c2c-4f2a-881c-eb6200225985" />
        <input type="hidden" name="subject" value="Tilbakemelding fra LettDigital" />
        <input type="hidden" name="from_name" value="LettDigital Feedback" />

        {/* Rating - kompakt */}
        <div className="flex gap-1">
          {['great', 'good', 'improve'].map((option) => (
            <label
              key={option}
              className={`flex-1 cursor-pointer text-center py-1.5 px-2 rounded border transition-all text-xs ${
                rating === option
                  ? 'border-nav-blue bg-nav-blue/20 text-white'
                  : 'border-gray-600 text-gray-400 hover:border-gray-500 hover:text-gray-300'
              }`}
            >
              <input
                type="radio"
                name="rating"
                value={t(`rating.${option}`)}
                className="sr-only"
                onChange={() => setRating(option)}
                checked={rating === option}
              />
              {t(`rating.${option}`)}
            </label>
          ))}
        </div>

        {/* Message - kompakt */}
        <textarea
          name="message"
          rows={2}
          className="w-full px-2 py-1.5 bg-gray-800 border border-gray-600 rounded text-sm text-white placeholder-gray-500 focus:outline-none focus:border-nav-blue resize-none"
          placeholder={t('messagePlaceholder')}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-nav-blue hover:bg-blue-700 disabled:bg-gray-600 text-white text-sm font-medium py-2 px-3 rounded transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              {t('sending')}
            </>
          ) : (
            t('submit')
          )}
        </button>

        {error && (
          <p className="text-red-400 text-xs text-center">{t('error')}</p>
        )}
      </form>
    </div>
  );
}
