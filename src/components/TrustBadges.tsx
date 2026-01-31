'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

interface Badge {
  key: string;
  icon: React.ReactNode;
}

export default function TrustBadges() {
  const t = useTranslations('hero');
  const [visibleCount, setVisibleCount] = useState(0);

  const badges: Badge[] = [
    {
      key: 'free',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      key: 'simpleLanguage',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      key: 'stepByStep',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      key: 'multiLanguage',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      setVisibleCount(badges.length);
      return;
    }

    // Staggered animation
    const timers: NodeJS.Timeout[] = [];
    badges.forEach((_, index) => {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 300 + index * 200); // Start after 300ms, then 200ms between each
      timers.push(timer);
    });

    return () => timers.forEach(clearTimeout);
  }, [badges.length]);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
      {badges.map((badge, index) => (
        <div
          key={badge.key}
          className={`
            flex items-center gap-2
            px-3 py-2
            bg-white/15 backdrop-blur-sm
            rounded-full
            text-white text-sm sm:text-base font-medium
            transition-all duration-500 ease-out
            ${index < visibleCount
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-2'}
          `}
        >
          <span className="text-emerald-300 flex-shrink-0">{badge.icon}</span>
          <span>{t(`badges.${badge.key}`)}</span>
        </div>
      ))}
    </div>
  );
}
