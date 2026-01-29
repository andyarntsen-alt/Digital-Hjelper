'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import FeedbackForm from './FeedbackForm';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  return (
    <footer className="bg-gray-800 text-white mt-16 safe-area-bottom">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('about')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/nav" className="text-gray-300 hover:text-white active:text-white no-underline inline-block py-1">
                  {tHeader('nav')}
                </Link>
              </li>
              <li>
                <Link href="/skatt" className="text-gray-300 hover:text-white active:text-white no-underline inline-block py-1">
                  {tHeader('skatt')}
                </Link>
              </li>
              <li>
                <Link href="/helse" className="text-gray-300 hover:text-white active:text-white no-underline inline-block py-1">
                  {tHeader('helse')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <a
              href="mailto:kontakt@lettdigital.no"
              className="text-gray-300 hover:text-white no-underline"
            >
              kontakt@lettdigital.no
            </a>
            <div className="mt-4">
              <Link href="/personvern" className="text-gray-400 hover:text-white no-underline text-sm">
                {t('privacy')}
              </Link>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <FeedbackForm />
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <p className="text-gray-400 text-sm text-center max-w-3xl mx-auto">
            <strong>{t('disclaimerTitle')}:</strong> {t('disclaimerText')}
          </p>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
