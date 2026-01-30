'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  categoryIcon?: string;
  featured?: boolean;
  compact?: boolean;
}

export default function ServiceCard({ title, description, icon, href, color, categoryIcon, featured, compact }: ServiceCardProps) {
  const t = useTranslations('common');

  // Compact version for "Andre tjenester"
  if (compact) {
    return (
      <Link href={href} className="no-underline group">
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-4 h-full active:scale-[0.98] transition-all duration-200 cursor-pointer border border-gray-100">
          <div
            className={`w-12 h-12 rounded-lg flex items-center justify-center mb-3 ${color}`}
          >
            {icon}
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-1 group-hover:text-nav-blue transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-snug line-clamp-2">
            {description}
          </p>
          <div className="mt-2 flex items-center text-nav-blue text-sm font-medium">
            <span>{t('readMore')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="no-underline group">
      <div className={`service-card h-full active:scale-[0.98] transition-transform ${featured ? 'ring-2 ring-nav-blue ring-offset-2' : ''}`}>
        <div className="flex items-start gap-3">
          <div
            className={`${featured ? 'w-16 h-16 sm:w-20 sm:h-20' : 'w-14 h-14 sm:w-16 sm:h-16'} rounded-xl flex items-center justify-center flex-shrink-0 ${color}`}
          >
            {icon}
          </div>
          {categoryIcon && (
            <span className="text-2xl sm:text-3xl" aria-hidden="true">{categoryIcon}</span>
          )}
        </div>
        <h3 className={`${featured ? 'text-2xl sm:text-3xl' : 'text-xl sm:text-2xl'} font-bold text-gray-800 mt-3 sm:mt-4 mb-2 group-hover:text-nav-blue transition-colors`}>
          {title}
        </h3>
        <p className={`text-gray-600 leading-relaxed ${featured ? 'text-base sm:text-lg' : 'text-sm sm:text-base'}`}>
          {description}
        </p>
        <div className="mt-3 sm:mt-4 flex items-center text-nav-blue font-semibold">
          <span>{t('readMore')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
