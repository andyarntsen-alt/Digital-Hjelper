'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  color: string;
}

export default function ServiceCard({ title, description, icon, href, color }: ServiceCardProps) {
  const t = useTranslations('common');

  return (
    <Link href={href} className="no-underline group">
      <div className="service-card h-full">
        <div
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 ${color}`}
        >
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-nav-blue transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 leading-relaxed">
          {description}
        </p>
        <div className="mt-4 flex items-center text-nav-blue font-semibold">
          <span>{t('readMore')}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
