'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function NotFound() {
  const t = useTranslations('errors');

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <p className="text-6xl font-bold text-gray-300 mb-6">404</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('notFound')}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {t('notFoundText')}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-nav-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors no-underline"
        >
          {t('backToHome')}
        </Link>
      </div>
    </section>
  );
}
