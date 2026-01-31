import { Metadata } from 'next';
import ServiceCard from '@/components/ServiceCard';
import RecentlyVisited from '@/components/RecentlyVisited';
import HeroSection from '@/components/HeroSection';
import { Link } from '@/i18n/navigation';
import { getTranslations, setRequestLocale } from 'next-intl/server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'home' });
  const title = 'LettDigital - Digital inkludering for alle';
  const description = t('whatIsText');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.lettdigital.no/${locale}`,
      siteName: 'LettDigital',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.lettdigital.no/${locale}`,
      languages: {
        'nb': 'https://www.lettdigital.no/no',
        'en': 'https://www.lettdigital.no/en',
        'uk': 'https://www.lettdigital.no/uk',
      },
    },
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations('home');
  const tServices = await getTranslations('services');
  return (
    <div>
      {/* Hero */}
      <HeroSection />

      {/* Sist besøkte guider */}
      <RecentlyVisited />

      {/* Hva er LettDigital - clean, minimal */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t('whatIsTitle')}
          </h2>
          <p className="text-xl sm:text-2xl text-gray-600 leading-relaxed">
            {t('whatIsText')}
          </p>
          {/* Target audiences - minimal with gray icons and descriptions */}
          <div className="grid grid-cols-3 gap-8 mt-10 max-w-2xl mx-auto text-gray-500">
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197" />
              </svg>
              <span className="font-medium mb-1">{t('elderly')}</span>
              <span className="text-sm text-gray-400">{t('elderlyDesc')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-medium mb-1">{t('newToNorway')}</span>
              <span className="text-sm text-gray-400">{t('newToNorwayDesc')}</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="font-medium mb-1">{t('helpers')}</span>
              <span className="text-sm text-gray-400">{t('helpersDesc')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tjenester - clean header, generous whitespace */}
      <section id="tjenester" className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('selectService')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('mostUsedDesc')}
            </p>
          </div>

          {/* Featured services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
            <ServiceCard
              title={tServices('nav.title')}
              description={tServices('nav.description')}
              href="/nav"
              color="bg-nav-blue text-white"
              featured
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('skatt.title')}
              description={tServices('skatt.description')}
              href="/skatt"
              color="bg-skatt-green text-white"
              featured
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('helse.title')}
              description={tServices('helse.description')}
              href="/helse"
              color="bg-helse-red text-white"
              featured
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('nyINorge.title')}
              description={tServices('nyINorge.description')}
              href="/ny-i-norge"
              color="bg-emerald-600 text-white"
              featured
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
            />
          </div>

          {/* Other services - all 8 cards */}
          <h3 className="text-xl font-bold text-center mb-8 text-gray-800">
            {t('otherServices')}
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard
              title={tServices('sikkerhet.title')}
              description={tServices('sikkerhet.description')}
              href="/sikkerhet"
              color="bg-purple-600 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('bank.title')}
              description={tServices('bank.description')}
              href="/bank"
              color="bg-orange-500 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('grunnleggende.title')}
              description={tServices('grunnleggende.description')}
              href="/grunnleggende"
              color="bg-grunnleggende-purple text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('id.title')}
              description={tServices('id.description')}
              href="/id"
              color="bg-cyan-500 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('digital.title')}
              description={tServices('digital.description')}
              href="/digital"
              color="bg-teal-600 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('bolig.title')}
              description={tServices('bolig.description')}
              href="/bolig"
              color="bg-teal-500 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
            />
            <ServiceCard
              title={tServices('utdanning.title')}
              description={tServices('utdanning.description')}
              href="/utdanning"
              color="bg-indigo-500 text-white"
              compact
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Byer - simplified, generous whitespace */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {t('citiesTitle')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('citiesDesc')}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            <Link
              href="/byer/oslo"
              className="py-4 px-6 bg-gray-50 hover:bg-nav-blue hover:text-white rounded-xl text-center font-semibold text-gray-800 transition-colors no-underline"
            >
              Oslo
            </Link>
            <Link
              href="/byer/bergen"
              className="py-4 px-6 bg-gray-50 hover:bg-nav-blue hover:text-white rounded-xl text-center font-semibold text-gray-800 transition-colors no-underline"
            >
              Bergen
            </Link>
            <Link
              href="/byer/trondheim"
              className="py-4 px-6 bg-gray-50 hover:bg-nav-blue hover:text-white rounded-xl text-center font-semibold text-gray-800 transition-colors no-underline"
            >
              Trondheim
            </Link>
            <Link
              href="/byer/stavanger"
              className="py-4 px-6 bg-gray-50 hover:bg-nav-blue hover:text-white rounded-xl text-center font-semibold text-gray-800 transition-colors no-underline"
            >
              Stavanger
            </Link>
            <Link
              href="/byer/kristiansand"
              className="py-4 px-6 bg-gray-50 hover:bg-nav-blue hover:text-white rounded-xl text-center font-semibold text-gray-800 transition-colors no-underline"
            >
              Kristiansand
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/byer"
              className="inline-flex items-center gap-2 text-nav-blue hover:text-blue-700 font-semibold no-underline"
            >
              {t('citiesViewAll')}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* For hjelpere - clean, consistent styling */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              {t('forHelpersHeadline')}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {t('forHelpersDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{t('helperTip1Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('helperTip1Desc')}</p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{t('helperTip2Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('helperTip2Desc')}</p>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-nav-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{t('helperTip3Title')}</h3>
              <p className="text-gray-600 leading-relaxed">{t('helperTip3Desc')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
