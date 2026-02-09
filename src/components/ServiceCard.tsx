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

export default function ServiceCard({ title, description, icon, href, color, compact }: ServiceCardProps) {
  const t = useTranslations('common');

  // Compact version for "Andre tjenester"
  if (compact) {
    return (
      <Link href={href} className="no-underline group">
        <div className="bg-white rounded-lg p-4 h-full transition-colors duration-200 cursor-pointer border border-gray-200 hover:border-gray-300 hover:bg-gray-50">
          <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-3 ${color}`}>
            {icon}
          </div>
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-nav-blue transition-colors leading-tight mb-2">
            {title}
          </h3>
          <p className="text-gray-500 text-sm leading-snug line-clamp-2 mb-3">
            {description}
          </p>
          <div className="flex items-center text-nav-blue text-sm font-medium">
            <span>{t('readMore')}</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    );
  }

  // Featured version - horizontal layout
  return (
    <Link href={href} className="no-underline group">
      <div className="bg-white rounded-lg p-5 h-full transition-colors duration-200 cursor-pointer border border-gray-200 hover:border-gray-300 hover:bg-gray-50 overflow-hidden">
        <div className="flex items-start gap-4">
          <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 ${color}`}>
            {icon}
          </div>
          <div className="flex-1 min-w-0 overflow-hidden">
            <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-nav-blue transition-colors truncate">
              {title}
            </h3>
            <p className="text-gray-500 text-sm leading-snug line-clamp-2 mb-2">
              {description}
            </p>
            <div className="flex items-center text-nav-blue text-sm font-medium">
              <span>{t('readMore')}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
