'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const [visibleCount, setVisibleCount] = useState(0);

  const quotes = [
    t('items.0.quote'),
    t('items.1.quote'),
    t('items.2.quote'),
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleCount(quotes.length);
      return;
    }

    const timers: NodeJS.Timeout[] = [];
    quotes.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 200 + index * 150);
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps -- quotes is derived from translations, stable after mount
  }, []);

  return (
    <section className="py-10 sm:py-12 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-6">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className={`
                bg-white rounded-lg p-4 shadow-sm
                transition-all duration-500 ease-out
                ${index < visibleCount
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4'}
              `}
            >
              <svg
                className="h-5 w-5 text-gray-200 mb-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-sm text-gray-600 leading-relaxed">
                {quote}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
