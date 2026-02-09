'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations('errors');

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          {t('somethingWentWrong')}
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          {t('errorText')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 bg-nav-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
          >
            {t('tryAgain')}
          </button>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-200 transition-colors no-underline"
          >
            {t('backToHome')}
          </Link>
        </div>
      </div>
    </section>
  );
}
