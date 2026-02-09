'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

export default function TrustBadges() {
  const t = useTranslations('hero');
  const [visibleCount, setVisibleCount] = useState(0);

  const badges = ['guidesCount', 'languagesCount', 'alwaysFree'];

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
  // eslint-disable-next-line react-hooks/exhaustive-deps -- badges is a static array, stable after mount
  }, []);

  return (
    <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
      {badges.map((badge, index) => (
        <div
          key={badge}
          className={`
            flex items-center
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
          <span>{t(`badges.${badge}`)}</span>
        </div>
      ))}
    </div>
  );
}
