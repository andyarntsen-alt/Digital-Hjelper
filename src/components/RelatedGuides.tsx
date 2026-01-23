'use client';

import Link from 'next/link';
import { useLocale } from 'next-intl';

interface Guide {
  title: string;
  href: string;
  description?: string;
}

interface RelatedGuidesProps {
  currentPath: string;
  category: 'nav' | 'skatt' | 'helse' | 'sikkerhet' | 'grunnleggende' | 'bank' | 'bolig' | 'utdanning' | 'id';
}

// Definerer relaterte guider for hver kategori
const guidesByCategory: Record<string, Guide[]> = {
  nav: [
    { title: 'Logg inn på NAV', href: '/nav/logg-inn', description: 'Slik logger du inn' },
    { title: 'Dagpenger', href: '/nav/dagpenger', description: 'Søk om dagpenger' },
    { title: 'Pensjon', href: '/nav/pensjon', description: 'Sjekk pensjonen din' },
    { title: 'Uføretrygd', href: '/nav/uforetrygd', description: 'Informasjon om uføretrygd' },
    { title: 'Sykepenger', href: '/nav/sykepenger', description: 'Meld fra om sykdom' },
    { title: 'Foreldrepenger', href: '/nav/foreldrepenger', description: 'For deg som venter barn' },
    { title: 'Meldekort', href: '/nav/meldekort', description: 'Send meldekort' },
    { title: 'Arbeidsledig', href: '/nav/arbeidsledig', description: 'Registrer deg som arbeidssøker' },
  ],
  skatt: [
    { title: 'Logg inn på Skatteetaten', href: '/skatt/logg-inn', description: 'Slik logger du inn' },
    { title: 'Skattemelding', href: '/skatt/skattemelding', description: 'Lever skattemeldingen' },
    { title: 'Skattekort', href: '/skatt/skattekort', description: 'Bestill nytt skattekort' },
    { title: 'Fradrag', href: '/skatt/fradrag', description: 'Finn ut hva du kan trekke fra' },
    { title: 'Skatteoppgjør', href: '/skatt/skatteoppgjoer', description: 'Se skatteoppgjøret' },
    { title: 'Skatteattest', href: '/skatt/skatteattest', description: 'Bestill skatteattest' },
  ],
  helse: [
    { title: 'Logg inn på Helsenorge', href: '/helse/logg-inn', description: 'Slik logger du inn' },
    { title: 'Bestille time', href: '/helse/bestille-time', description: 'Bestill legetime' },
    { title: 'Resepter', href: '/helse/resepter', description: 'Se og forny resepter' },
    { title: 'Journal', href: '/helse/journal', description: 'Se journalen din' },
    { title: 'Bytte fastlege', href: '/helse/bytte-fastlege', description: 'Finn ny fastlege' },
    { title: 'Melding til lege', href: '/helse/melding', description: 'Send melding til legen' },
  ],
  sikkerhet: [
    { title: 'BankID', href: '/sikkerhet/bankid', description: 'Slik bruker du BankID' },
    { title: 'Passord', href: '/sikkerhet/passord', description: 'Lag sikre passord' },
    { title: 'Svindel', href: '/sikkerhet/svindel', description: 'Unngå svindel' },
    { title: 'Phishing', href: '/sikkerhet/phishing', description: 'Gjenkjenn falske meldinger' },
  ],
  grunnleggende: [
    { title: 'Smarttelefon', href: '/grunnleggende/smarttelefon', description: 'Lær å bruke smarttelefon' },
    { title: 'Nettleser', href: '/grunnleggende/nettleser', description: 'Slik bruker du nettleseren' },
    { title: 'Videosamtale', href: '/grunnleggende/videosamtale', description: 'Ring med video' },
    { title: 'Passord-hjelp', href: '/grunnleggende/passord-hjelp', description: 'Hjelp med passord' },
    { title: 'Få hjelp', href: '/grunnleggende/fa-hjelp', description: 'Hvor kan du få hjelp?' },
  ],
  bank: [
    { title: 'Nettbank', href: '/bank/nettbank', description: 'Slik bruker du nettbank' },
    { title: 'Vipps', href: '/bank/vipps', description: 'Kom i gang med Vipps' },
    { title: 'Betaling', href: '/bank/betaling', description: 'Betal regninger' },
    { title: 'Gjeld', href: '/bank/gjeld', description: 'Oversikt over gjeld' },
  ],
  bolig: [
    { title: 'Bostøtte', href: '/bolig/bostotte', description: 'Søk om bostøtte' },
    { title: 'Startlån', href: '/bolig/startlan', description: 'Søk om startlån' },
    { title: 'Kommunal bolig', href: '/bolig/kommunal-bolig', description: 'Søk kommunal bolig' },
  ],
  utdanning: [
    { title: 'Studielån', href: '/utdanning/studielan', description: 'Søk om studielån' },
    { title: 'Stipend', href: '/utdanning/stipend', description: 'Søk om stipend' },
    { title: 'Tilbakebetaling', href: '/utdanning/tilbakebetaling', description: 'Betal tilbake lån' },
  ],
  id: [
    { title: 'Pass', href: '/id/pass', description: 'Bestill nytt pass' },
    { title: 'ID-kort', href: '/id/id-kort', description: 'Bestill nasjonalt ID-kort' },
    { title: 'Førerkort', href: '/id/forerkort', description: 'Fornye førerkort' },
  ],
};

export default function RelatedGuides({ currentPath, category }: RelatedGuidesProps) {
  const locale = useLocale();
  const guides = guidesByCategory[category] || [];

  // Filtrer ut gjeldende side og vis maks 4 relaterte guider
  const relatedGuides = guides
    .filter(guide => !currentPath.endsWith(guide.href))
    .slice(0, 4);

  if (relatedGuides.length === 0) return null;

  return (
    <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
        Andre guider du kanskje trenger
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
        {relatedGuides.map((guide) => (
          <Link
            key={guide.href}
            href={`/${locale}${guide.href}`}
            className="group bg-white border-2 border-gray-200 rounded-lg p-3 sm:p-4 hover:border-nav-blue active:border-nav-blue hover:shadow-md transition-all duration-200 no-underline"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-nav-blue">
                  {guide.title}
                </h3>
                {guide.description && (
                  <p className="text-gray-600 mt-1 text-sm sm:text-base">{guide.description}</p>
                )}
              </div>
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400 group-hover:text-nav-blue group-hover:translate-x-1 transition-transform flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
