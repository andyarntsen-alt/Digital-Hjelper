/**
 * Sentralisert guide-data for hele applikasjonen
 * Brukes av SearchBox, RelatedGuides, og andre komponenter
 */

export interface GuideData {
  titleKey: string;
  descriptionKey: string;
  href: string;
  category: GuideCategory;
  keywords: string[];
}

export type GuideCategory =
  | 'nav'
  | 'skatt'
  | 'helse'
  | 'sikkerhet'
  | 'grunnleggende'
  | 'bank'
  | 'bolig'
  | 'utdanning'
  | 'id'
  | 'digital';

export const GUIDE_CATEGORIES: GuideCategory[] = [
  'nav',
  'skatt',
  'helse',
  'sikkerhet',
  'grunnleggende',
  'bank',
  'bolig',
  'utdanning',
  'id',
  'digital',
];

export const CATEGORY_COLORS: Record<GuideCategory, string> = {
  nav: 'bg-nav-blue text-white',
  skatt: 'bg-skatt-green text-white',
  helse: 'bg-helse-red text-white',
  bank: 'bg-orange-500 text-white',
  sikkerhet: 'bg-purple-600 text-white',
  digital: 'bg-teal-600 text-white',
  bolig: 'bg-teal-500 text-white',
  utdanning: 'bg-indigo-500 text-white',
  id: 'bg-cyan-500 text-white',
  grunnleggende: 'bg-grunnleggende-purple text-white',
};

export const CATEGORY_ICONS: Record<GuideCategory, string> = {
  nav: '🏛️',
  skatt: '📊',
  helse: '❤️',
  bank: '💳',
  sikkerhet: '🛡️',
  digital: '💻',
  bolig: '🏠',
  utdanning: '🎓',
  id: '🪪',
  grunnleggende: '💡',
};

export const ALL_GUIDES: GuideData[] = [
  // NAV
  { titleKey: 'nav.loggInn.title', descriptionKey: 'nav.loggInn.description', href: '/nav/logg-inn', category: 'nav', keywords: ['innlogging', 'bankid', 'minid', 'passord', 'login', 'gal'] },
  { titleKey: 'nav.pensjon.title', descriptionKey: 'nav.pensjon.description', href: '/nav/pensjon', category: 'nav', keywords: ['pensjon', 'alderspensjon', 'pensjonist', 'eldre', 'gammel', '67', '62', 'pension', 'retire', 'retirement'] },
  { titleKey: 'nav.uforetrygd.title', descriptionKey: 'nav.uforetrygd.description', href: '/nav/uforetrygd', category: 'nav', keywords: ['uføretrygd', 'ufør', 'syk', 'helse', 'disability', 'arbeidsufør', 'trygd'] },
  { titleKey: 'nav.dagpenger.title', descriptionKey: 'nav.dagpenger.description', href: '/nav/dagpenger', category: 'nav', keywords: ['arbeidsledig', 'mistet jobb', 'oppsigelse', 'permittert', 'penger', 'unemployment', 'shaqo'] },
  { titleKey: 'nav.sykepenger.title', descriptionKey: 'nav.sykepenger.description', href: '/nav/sykepenger', category: 'nav', keywords: ['syk', 'sykemelding', 'lege', 'sykdom', 'sick', 'xanuun'] },
  { titleKey: 'nav.foreldrepenger.title', descriptionKey: 'nav.foreldrepenger.description', href: '/nav/foreldrepenger', category: 'nav', keywords: ['barn', 'baby', 'fødsel', 'permisjon', 'mamma', 'pappa', 'fedrekvote', 'parental'] },
  { titleKey: 'nav.arbeidsledig.title', descriptionKey: 'nav.arbeidsledig.description', href: '/nav/arbeidsledig', category: 'nav', keywords: ['jobb', 'arbeid', 'cv', 'registrering', 'job', 'shaqo'] },
  { titleKey: 'nav.meldekort.title', descriptionKey: 'nav.meldekort.description', href: '/nav/meldekort', category: 'nav', keywords: ['rapport', 'utbetaling', '14 dager', 'form', 'foom'] },

  // Skatteetaten
  { titleKey: 'skatt.loggInn.title', descriptionKey: 'skatt.loggInn.description', href: '/skatt/logg-inn', category: 'skatt', keywords: ['skatt', 'innlogging', 'login', 'skatteetaten', 'bankid'] },
  { titleKey: 'skatt.skattemelding.title', descriptionKey: 'skatt.skattemelding.description', href: '/skatt/skattemelding', category: 'skatt', keywords: ['selvangivelse', 'skatt', 'inntekt', 'tax', 'cashuur'] },
  { titleKey: 'skatt.fradrag.title', descriptionKey: 'skatt.fradrag.description', href: '/skatt/fradrag', category: 'skatt', keywords: ['spare', 'renter', 'boliglån', 'reise', 'jobb', 'deduction'] },
  { titleKey: 'skatt.skattekort.title', descriptionKey: 'skatt.skattekort.description', href: '/skatt/skattekort', category: 'skatt', keywords: ['trekk', 'lønn', 'prosent', 'tabell', 'card'] },
  { titleKey: 'skatt.skatteoppgjoer.title', descriptionKey: 'skatt.skatteoppgjoer.description', href: '/skatt/skatteoppgjoer', category: 'skatt', keywords: ['tilbake', 'restskatt', 'penger', 'settlement'] },
  { titleKey: 'skatt.skatteattest.title', descriptionKey: 'skatt.skatteattest.description', href: '/skatt/skatteattest', category: 'skatt', keywords: ['skatteattest', 'attest', 'anbud', 'firma', 'bedrift', 'tax certificate'] },

  // Helsenorge
  { titleKey: 'helse.loggInn.title', descriptionKey: 'helse.loggInn.description', href: '/helse/logg-inn', category: 'helse', keywords: ['helse', 'innlogging', 'helsenorge', 'login', 'bankid'] },
  { titleKey: 'helse.bestilleTime.title', descriptionKey: 'helse.bestilleTime.description', href: '/helse/bestille-time', category: 'helse', keywords: ['lege', 'time', 'fastlege', 'konsultasjon', 'syk', 'doctor', 'dhakhtar'] },
  { titleKey: 'helse.resepter.title', descriptionKey: 'helse.resepter.description', href: '/helse/resepter', category: 'helse', keywords: ['medisin', 'apotek', 'piller', 'tabletter', 'prescription', 'dawooyin'] },
  { titleKey: 'helse.bytteFastlege.title', descriptionKey: 'helse.bytteFastlege.description', href: '/helse/bytte-fastlege', category: 'helse', keywords: ['lege', 'doktor', 'bytte', 'ny', 'gp', 'change'] },
  { titleKey: 'helse.journal.title', descriptionKey: 'helse.journal.description', href: '/helse/journal', category: 'helse', keywords: ['journal', 'epikrise', 'sykehus', 'diagnose', 'records'] },
  { titleKey: 'helse.melding.title', descriptionKey: 'helse.melding.description', href: '/helse/melding', category: 'helse', keywords: ['melding', 'spørsmål', 'kontakt', 'message', 'fariin'] },

  // Bank
  { titleKey: 'bank.nettbank.title', descriptionKey: 'bank.nettbank.description', href: '/bank/nettbank', category: 'bank', keywords: ['nettbank', 'bank', 'betaling', 'konto', 'online', 'banking', 'penger'] },
  { titleKey: 'bank.betaling.title', descriptionKey: 'bank.betaling.description', href: '/bank/betaling', category: 'bank', keywords: ['betale', 'regning', 'faktura', 'kid', 'payment', 'bill', 'efaktura'] },
  { titleKey: 'bank.vipps.title', descriptionKey: 'bank.vipps.description', href: '/bank/vipps', category: 'bank', keywords: ['vipps', 'mobil', 'betaling', 'penger', 'sende', 'mobile', 'app'] },
  { titleKey: 'bank.gjeld.title', descriptionKey: 'bank.gjeld.description', href: '/bank/gjeld', category: 'bank', keywords: ['gjeld', 'lån', 'inkasso', 'hjelp', 'debt', 'loan', 'betale'] },

  // Sikkerhet
  { titleKey: 'sikkerhet.bankid.title', descriptionKey: 'sikkerhet.bankid.description', href: '/sikkerhet/bankid', category: 'sikkerhet', keywords: ['bankid', 'innlogging', 'sikkerhet', 'svindel', 'kode', 'security', 'id'] },
  { titleKey: 'sikkerhet.phishing.title', descriptionKey: 'sikkerhet.phishing.description', href: '/sikkerhet/phishing', category: 'sikkerhet', keywords: ['svindel', 'epost', 'falsk', 'spam', 'scam', 'email', 'sms', 'lure'] },
  { titleKey: 'sikkerhet.passord.title', descriptionKey: 'sikkerhet.passord.description', href: '/sikkerhet/passord', category: 'sikkerhet', keywords: ['passord', 'sikkerhet', 'kode', 'password', 'security', 'trygt'] },
  { titleKey: 'sikkerhet.svindel.title', descriptionKey: 'sikkerhet.svindel.description', href: '/sikkerhet/svindel', category: 'sikkerhet', keywords: ['svindel', 'scam', 'lurt', 'penger', 'falsk', 'bedrageri'] },

  // Digital
  { titleKey: 'digital.epost.title', descriptionKey: 'digital.epost.description', href: '/digital/epost', category: 'digital', keywords: ['epost', 'email', 'gmail', 'outlook', 'mail', 'brev'] },
  { titleKey: 'digital.digipost.title', descriptionKey: 'digital.digipost.description', href: '/digital/digipost', category: 'digital', keywords: ['digipost', 'digital', 'post', 'brev', 'postkasse', 'eboks'] },
  { titleKey: 'digital.altinn.title', descriptionKey: 'digital.altinn.description', href: '/digital/altinn', category: 'digital', keywords: ['altinn', 'skjema', 'offentlig', 'public', 'form', 'søknad'] },
  { titleKey: 'digital.minside.title', descriptionKey: 'digital.minside.description', href: '/digital/minside', category: 'digital', keywords: ['minside', 'profil', 'offentlig', 'portal', 'profile', 'kommune'] },
  { titleKey: 'digital.posten.title', descriptionKey: 'digital.posten.description', href: '/digital/posten', category: 'digital', keywords: ['posten', 'pakke', 'sporing', 'post', 'toll', 'hente', 'package', 'tracking'] },

  // Bolig
  { titleKey: 'bolig.bostotte.title', descriptionKey: 'bolig.bostotte.description', href: '/bolig/bostotte', category: 'bolig', keywords: ['bostøtte', 'husleie', 'støtte', 'husbanken', 'housing', 'support', 'leie'] },
  { titleKey: 'bolig.startlan.title', descriptionKey: 'bolig.startlan.description', href: '/bolig/startlan', category: 'bolig', keywords: ['startlån', 'lån', 'kjøpe', 'bolig', 'loan', 'house', 'hus', 'leilighet'] },
  { titleKey: 'bolig.kommunalBolig.title', descriptionKey: 'bolig.kommunalBolig.description', href: '/bolig/kommunal-bolig', category: 'bolig', keywords: ['kommunal', 'leie', 'bolig', 'municipal', 'housing', 'leilighet'] },

  // Utdanning
  { titleKey: 'utdanning.studielan.title', descriptionKey: 'utdanning.studielan.description', href: '/utdanning/studielan', category: 'utdanning', keywords: ['studielån', 'stipend', 'lånekassen', 'skole', 'student', 'loan', 'utdanning'] },
  { titleKey: 'utdanning.stipend.title', descriptionKey: 'utdanning.stipend.description', href: '/utdanning/stipend', category: 'utdanning', keywords: ['stipend', 'penger', 'lånekassen', 'gratis', 'student', 'grant'] },
  { titleKey: 'utdanning.tilbakebetaling.title', descriptionKey: 'utdanning.tilbakebetaling.description', href: '/utdanning/tilbakebetaling', category: 'utdanning', keywords: ['tilbakebetaling', 'lån', 'nedbetaling', 'renter', 'repayment'] },
  { titleKey: 'utdanning.betalingsutsettelse.title', descriptionKey: 'utdanning.betalingsutsettelse.description', href: '/utdanning/betalingsutsettelse', category: 'utdanning', keywords: ['betalingsutsettelse', 'utsettelse', 'lån', 'lånekassen', 'pause', 'deferment'] },

  // ID
  { titleKey: 'id.pass.title', descriptionKey: 'id.pass.description', href: '/id/pass', category: 'id', keywords: ['pass', 'reise', 'id', 'passport', 'travel', 'utland'] },
  { titleKey: 'id.forerkort.title', descriptionKey: 'id.forerkort.description', href: '/id/forerkort', category: 'id', keywords: ['førerkort', 'kjøre', 'bil', 'license', 'driving', 'fornye'] },
  { titleKey: 'id.idKort.title', descriptionKey: 'id.idKort.description', href: '/id/id-kort', category: 'id', keywords: ['idkort', 'id', 'legitimasjon', 'identity', 'card', 'nasjonalt'] },

  // Grunnleggende teknologi
  { titleKey: 'grunnleggende.smarttelefon.title', descriptionKey: 'grunnleggende.smarttelefon.description', href: '/grunnleggende/smarttelefon', category: 'grunnleggende', keywords: ['smarttelefon', 'mobil', 'telefon', 'iphone', 'android', 'app', 'apper', 'ringe', 'sms'] },
  { titleKey: 'grunnleggende.nettleser.title', descriptionKey: 'grunnleggende.nettleser.description', href: '/grunnleggende/nettleser', category: 'grunnleggende', keywords: ['nettleser', 'internett', 'chrome', 'safari', 'edge', 'google', 'søk', 'nettside', 'browser'] },
  { titleKey: 'grunnleggende.videosamtale.title', descriptionKey: 'grunnleggende.videosamtale.description', href: '/grunnleggende/videosamtale', category: 'grunnleggende', keywords: ['videosamtale', 'zoom', 'teams', 'facetime', 'video', 'møte', 'samtale', 'kamera', 'familie'] },
  { titleKey: 'grunnleggende.passordHjelp.title', descriptionKey: 'grunnleggende.passordHjelp.description', href: '/grunnleggende/passord-hjelp', category: 'grunnleggende', keywords: ['passord', 'glemt', 'innlogging', 'reset', 'nullstill', 'kode', 'sikkerhet'] },
  { titleKey: 'grunnleggende.faHjelp.title', descriptionKey: 'grunnleggende.faHjelp.description', href: '/grunnleggende/fa-hjelp', category: 'grunnleggende', keywords: ['hjelp', 'seniornett', 'bibliotek', 'kurs', 'datahjelp', 'frivillig', 'support'] },
];

/**
 * Henter guider for en spesifikk kategori
 */
export function getGuidesByCategory(category: GuideCategory): GuideData[] {
  return ALL_GUIDES.filter(guide => guide.category === category);
}

/**
 * Henter en spesifikk guide basert på href
 */
export function getGuideByHref(href: string): GuideData | undefined {
  return ALL_GUIDES.find(guide => guide.href === href);
}
