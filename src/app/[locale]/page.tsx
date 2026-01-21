import ServiceCard from '@/components/ServiceCard';
import SearchBox from '@/components/SearchBox';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  const tServices = useTranslations('services');
  const tCommon = useTranslations('common');
  return (
    <div>
      {/* Hero-seksjon */}
      <section className="bg-gradient-to-br from-nav-blue to-blue-700 text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            {t('heroTitle')}<br />{t('heroTitleBreak')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            {t('heroSubtitle')}
          </p>

          {/* Søkefelt */}
          <div className="max-w-2xl mx-auto mb-8">
            <SearchBox />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#tjenester" className="btn-primary bg-white text-nav-blue hover:bg-gray-100 no-underline">
              {t('seeGuides')}
            </Link>
            <Link href="/ordbok" className="btn-secondary border-2 border-white bg-white text-nav-blue hover:bg-blue-50 no-underline">
              {t('dictionary')}
            </Link>
          </div>
        </div>
      </section>

      {/* Hurtiglenker */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/faq" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 no-underline text-gray-700">
              {t('faqLink')}
            </Link>
            <Link href="/ordbok" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 no-underline text-gray-700">
              {t('dictionary')}
            </Link>
            <Link href="/favoritter" className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200 no-underline text-gray-700">
              {t('favoritesLink')}
            </Link>
          </div>
        </div>
      </section>

      {/* Hvem er vi for */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whoWeHelp')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('elderly')}</h3>
              <p className="text-gray-600">{t('elderlyDesc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('newToNorway')}</h3>
              <p className="text-gray-600">{t('newToNorwayDesc')}</p>
            </div>
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">{t('helpers')}</h3>
              <p className="text-gray-600">{t('helpersDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester */}
      <section id="tjenester" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">{t('chooseService')}</h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('chooseServiceDesc')}
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title={tServices('nav.title')}
              description={tServices('nav.description')}
              href="/nav"
              color="bg-nav-blue text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('skatt.title')}
              description={tServices('skatt.description')}
              href="/skatt"
              color="bg-skatt-green text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('helse.title')}
              description={tServices('helse.description')}
              href="/helse"
              color="bg-helse-red text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('sikkerhet.title')}
              description={tServices('sikkerhet.description')}
              href="/sikkerhet"
              color="bg-purple-600 text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('bank.title')}
              description={tServices('bank.description')}
              href="/bank"
              color="bg-orange-500 text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('digital.title')}
              description={tServices('digital.description')}
              href="/digital"
              color="bg-teal-600 text-white"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Fordeler */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">{t('whyUseUs')}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold mb-2">{t('simpleLanguage')}</h3>
              <p className="text-gray-600">{t('simpleLanguageDesc')}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">👀</div>
              <h3 className="text-xl font-bold mb-2">{t('largeFonts')}</h3>
              <p className="text-gray-600">{t('largeFontsDesc')}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-bold mb-2">{t('stepByStep')}</h3>
              <p className="text-gray-600">{t('stepByStepDesc')}</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold mb-2">{t('free')}</h3>
              <p className="text-gray-600">{t('freeDesc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-nav-blue text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">{t('ctaTitle')}</h2>
          <p className="text-xl text-blue-100 mb-8">
            {t('ctaSubtitle')}
          </p>
          <Link href="#tjenester" className="btn-primary bg-white text-nav-blue hover:bg-gray-100 no-underline inline-block">
            {t('seeGuides')}
          </Link>
        </div>
      </section>
    </div>
  );
}
