'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import SearchBox from './SearchBox';
import TrustBadges from './TrustBadges';

export default function HeroSection() {
  const t = useTranslations('hero');
  const tHome = useTranslations('home');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-nav-blue via-blue-700 to-blue-800">
      {/* Subtle animated gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.2)_0%,_transparent_50%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-16">
        <div className="flex flex-col items-center text-center animate-fade-in">
          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
            {t('headline')}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-blue-100 mb-5 max-w-2xl">
            {t('subheadline')}
          </p>

          {/* Search box */}
          <div className="w-full max-w-lg mb-5">
            <SearchBox />
          </div>

          {/* Trust badges */}
          <div className="mb-5">
            <TrustBadges />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href="#tjenester"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-nav-blue font-semibold rounded-lg hover:bg-gray-50 hover:shadow-lg active:scale-[0.98] transition-all no-underline"
            >
              {tHome('seeGuides')}
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/ordbok"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold rounded-lg border border-white/30 hover:bg-white/20 hover:border-white/50 active:scale-[0.98] transition-all no-underline"
            >
              {tHome('dictionary')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
