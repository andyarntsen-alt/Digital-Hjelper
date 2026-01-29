'use client';

import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

interface ComingSoonProps {
  title: string;
  description?: string;
  backLink?: string;
  backText?: string;
}

export default function ComingSoon({
  title,
  description,
  backLink = '/',
  backText
}: ComingSoonProps) {
  const t = useTranslations('common');

  const displayDescription = description || t('comingSoonDescription');
  const displayBackText = backText || t('backToHome');

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-r-lg mb-6 text-left">
          <p className="text-lg text-gray-700">
            <strong>{t('comingSoon')}!</strong> {displayDescription}
          </p>
        </div>

        <p className="text-gray-600 mb-8">
          {t('comingSoonMessage')}
        </p>

        <Link
          href={backLink}
          className="btn-primary inline-flex items-center gap-2 no-underline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          {displayBackText}
        </Link>
      </div>
    </div>
  );
}
