'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const tHeader = useTranslations('header');
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t('about')}</h3>
            <p className="text-gray-300 leading-relaxed">
              {t('aboutText')}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-3">
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
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact')}</h3>
            <a
              href="mailto:kontakt@digitalhjelper.no"
              className="text-nav-blue hover:text-blue-300 no-underline"
            >
              {t('email')}
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
