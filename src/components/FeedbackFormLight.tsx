'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function FeedbackFormLight() {
  const t = useTranslations('feedback');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [rating, setRating] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    try {
      setError(false);
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setIsSubmitted(true);
        form.reset();
        setRating('');
      } else {
        console.error('Web3Forms error:', result);
        setError(true);
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <div className="flex items-center justify-center gap-2 text-green-700">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-medium">{t('thankYou')}</p>
        </div>
        <p className="text-green-600 text-sm mt-1">{t('thankYouMessage')}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        {t('title')}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="hidden" name="access_key" value="2b366f73-8c2c-4f2a-881c-eb6200225985" />
        <input type="hidden" name="subject" value="Tilbakemelding fra LettDigital (Om-siden)" />
        <input type="hidden" name="from_name" value="LettDigital Feedback" />

        <div>
          <p className="text-sm font-medium text-gray-700 mb-2">{t('ratingLabel')}</p>
          <div className="flex gap-2">
            {['great', 'good', 'improve'].map((option) => (
              <label
                key={option}
                className={`flex-1 cursor-pointer text-center py-2 px-3 rounded-lg border transition-all text-sm ${
                  rating === option
                    ? 'border-nav-blue bg-blue-50 text-nav-blue font-medium'
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 hover:bg-gray-50'
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
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">{t('messageLabel')}</label>
          <textarea
            name="message"
            rows={3}
            className="w-full px-3 py-2 bg-white border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-nav-blue focus:border-transparent resize-none"
            placeholder={t('messagePlaceholder')}
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-nav-blue hover:bg-blue-700 disabled:bg-gray-400 text-white font-medium py-2.5 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
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
          <p className="text-red-600 text-sm text-center">{t('error')}</p>
        )}
      </form>
    </div>
  );
}
