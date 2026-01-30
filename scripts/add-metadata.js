const fs = require('fs');
const path = require('path');

// Pages to transform - format: [path, translationNamespace, guideId]
const pages = [
  // NAV
  ['nav/meldekort', 'guides.nav.meldekort', 'nav-meldekort'],
  ['nav/foreldrepenger', 'guides.nav.foreldrepenger', 'nav-foreldrepenger'],
  ['nav/pensjon', 'guides.nav.pensjon', 'nav-pensjon'],
  ['nav/uforetrygd', 'guides.nav.uforetrygd', 'nav-uforetrygd'],
  ['nav/arbeidsledig', 'guides.nav.arbeidsledig', 'nav-arbeidsledig'],
  // Skatt
  ['skatt/skattemelding', 'guides.skatt.skattemelding', 'skatt-skattemelding'],
  ['skatt/skattekort', 'guides.skatt.skattekort', 'skatt-skattekort'],
  ['skatt/fradrag', 'guides.skatt.fradrag', 'skatt-fradrag'],
  ['skatt/skatteoppgjoer', 'guides.skatt.skatteoppgjoer', 'skatt-skatteoppgjoer'],
  ['skatt/skatteattest', 'guides.skatt.skatteattest', 'skatt-skatteattest'],
  // Helse
  ['helse/bytte-fastlege', 'guides.helse.bytteFastlege', 'helse-bytte-fastlege'],
  ['helse/resepter', 'guides.helse.resepter', 'helse-resepter'],
  ['helse/bestille-time', 'guides.helse.bestilleTime', 'helse-bestille-time'],
  ['helse/journal', 'guides.helse.journal', 'helse-journal'],
  ['helse/melding', 'guides.helse.melding', 'helse-melding'],
  // Sikkerhet
  ['sikkerhet/bankid', 'guides.sikkerhet.bankid', 'sikkerhet-bankid'],
  ['sikkerhet/passord', 'guides.sikkerhet.passord', 'sikkerhet-passord'],
  ['sikkerhet/svindel', 'guides.sikkerhet.svindel', 'sikkerhet-svindel'],
  ['sikkerhet/phishing', 'guides.sikkerhet.phishing', 'sikkerhet-phishing'],
  // Grunnleggende
  ['grunnleggende/smarttelefon', 'guides.grunnleggende.smarttelefon', 'grunnleggende-smarttelefon'],
  ['grunnleggende/nettleser', 'guides.grunnleggende.nettleser', 'grunnleggende-nettleser'],
  ['grunnleggende/passord-hjelp', 'guides.grunnleggende.passordHjelp', 'grunnleggende-passord-hjelp'],
  ['grunnleggende/videosamtale', 'guides.grunnleggende.videosamtale', 'grunnleggende-videosamtale'],
  ['grunnleggende/fa-hjelp', 'guides.grunnleggende.faHjelp', 'grunnleggende-fa-hjelp'],
  // Bank
  ['bank/nettbank', 'guides.bank.nettbank', 'bank-nettbank'],
  ['bank/vipps', 'guides.bank.vipps', 'bank-vipps'],
  ['bank/betaling', 'guides.bank.betaling', 'bank-betaling'],
  ['bank/gjeld', 'guides.bank.gjeld', 'bank-gjeld'],
  // Bolig
  ['bolig/bostotte', 'guides.bolig.bostotte', 'bolig-bostotte'],
  ['bolig/startlan', 'guides.bolig.startlan', 'bolig-startlan'],
  ['bolig/kommunal-bolig', 'guides.bolig.kommunalBolig', 'bolig-kommunal-bolig'],
  // Utdanning
  ['utdanning/studielan', 'guides.utdanning.studielan', 'utdanning-studielan'],
  ['utdanning/stipend', 'guides.utdanning.stipend', 'utdanning-stipend'],
  ['utdanning/tilbakebetaling', 'guides.utdanning.tilbakebetaling', 'utdanning-tilbakebetaling'],
  // ID
  ['id/pass', 'guides.id.pass', 'id-pass'],
  ['id/forerkort', 'guides.id.forerkort', 'id-forerkort'],
];

const basePath = path.join(__dirname, '../src/app/[locale]');

function getComponentName(pagePath) {
  const parts = pagePath.split('/');
  const last = parts[parts.length - 1];
  return last.split('-').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join('') + 'Content';
}

function transformPage(pagePath, namespace, guideId) {
  const fullPath = path.join(basePath, pagePath, 'page.tsx');

  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${pagePath} - file not found`);
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  // Skip if already transformed
  if (content.includes('generateMetadata')) {
    console.log(`Skipping ${pagePath} - already has generateMetadata`);
    return;
  }

  // Skip if not a client component
  if (!content.includes("'use client'")) {
    console.log(`Skipping ${pagePath} - not a client component`);
    return;
  }

  const componentName = getComponentName(pagePath);
  const contentFilePath = path.join(basePath, pagePath, `${componentName}.tsx`);

  // Write the content component (original file content)
  fs.writeFileSync(contentFilePath, content);
  console.log(`Created ${componentName}.tsx`);

  // Create new page.tsx with metadata
  const newPageContent = `import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ${componentName} from './${componentName}';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: '${namespace}' });

  const title = t('title');
  const description = t('longDescription');

  return {
    title: \`\${title} | LettDigital\`,
    description,
    openGraph: {
      title: \`\${title} | LettDigital\`,
      description,
      url: \`https://www.lettdigital.no/\${locale}/${pagePath}\`,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: \`\${title} | LettDigital\`,
      description,
    },
    alternates: {
      canonical: \`https://www.lettdigital.no/\${locale}/${pagePath}\`,
      languages: {
        'nb': 'https://www.lettdigital.no/no/${pagePath}',
        'en': 'https://www.lettdigital.no/en/${pagePath}',
        'uk': 'https://www.lettdigital.no/uk/${pagePath}',
      },
    },
  };
}

export default function Page() {
  return <${componentName} />;
}
`;

  fs.writeFileSync(fullPath, newPageContent);
  console.log(`Updated ${pagePath}/page.tsx`);
}

// Run transformation
console.log('Starting transformation...\n');
pages.forEach(([pagePath, namespace, guideId]) => {
  try {
    transformPage(pagePath, namespace, guideId);
  } catch (err) {
    console.error(`Error transforming ${pagePath}:`, err.message);
  }
});
console.log('\nDone!');
