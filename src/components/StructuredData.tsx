'use client';

interface OrganizationSchemaProps {
  locale: string;
}

export function OrganizationSchema({ locale }: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LettDigital',
    url: 'https://www.lettdigital.no',
    logo: 'https://www.lettdigital.no/icons/icon-512x512.png',
    description: locale === 'no'
      ? 'Vi gjør det enklere for alle å bruke NAV, Skatteetaten og Helsenorge.'
      : 'We make it easier for everyone to use Norwegian public services.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: ['Norwegian', 'English', 'Ukrainian', 'Polish', 'Somali', 'Arabic']
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface WebSiteSchemaProps {
  locale: string;
}

export function WebSiteSchema({ locale }: WebSiteSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LettDigital',
    url: `https://www.lettdigital.no/${locale}`,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `https://www.lettdigital.no/${locale}/sok?q={search_term_string}`
      },
      'query-input': 'required name=search_term_string'
    },
    inLanguage: locale === 'no' ? 'nb-NO' : locale
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: { name: string; url: string }[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://www.lettdigital.no${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
  totalTime?: string;
  locale: string;
}

export function HowToSchema({ name, description, steps, totalTime, locale }: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    totalTime: totalTime || 'PT10M',
    inLanguage: locale === 'no' ? 'nb-NO' : locale,
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  questions: { question: string; answer: string }[];
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map(q => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
