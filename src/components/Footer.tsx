'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import FeedbackForm from './FeedbackForm';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  const tCities = useTranslations('cities');
  return (
    <footer className="bg-gray-800 text-white mt-16 safe-area-bottom">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div>
            <h3 className="text-lg font-bold mb-2">{t('about')}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">{t('quickLinks')}</h3>
            <ul className="space-y-1 text-sm">
              <li>
                <Link href="/nav" className="text-gray-300 hover:text-white no-underline">
                  {tHeader('nav')}
                </Link>
              </li>
              <li>
                <Link href="/skatt" className="text-gray-300 hover:text-white no-underline">
                  {tHeader('skatt')}
                </Link>
              </li>
              <li>
                <Link href="/helse" className="text-gray-300 hover:text-white no-underline">
                  {tHeader('helse')}
                </Link>
              </li>
              <li>
                <Link href="/byer" className="text-gray-300 hover:text-white no-underline">
                  📍 {tCities('viewAll')}
                </Link>
              </li>
              <li>
                <Link href="/om" className="text-gray-300 hover:text-white no-underline">
                  {t('about')}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">{t('contact')}</h3>
            <a
              href="mailto:kontakt@lettdigital.no"
              className="text-gray-300 hover:text-white no-underline text-sm"
            >
              kontakt@lettdigital.no
            </a>
            <div className="mt-2">
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
        <div className="border-t border-gray-700 mt-5 pt-4">
          <p className="text-gray-400 text-xs text-center max-w-3xl mx-auto">
            <strong>{t('disclaimerTitle')}:</strong> {t('disclaimerText')}
          </p>
        </div>

        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
