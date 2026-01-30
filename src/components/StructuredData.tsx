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
    alternateName: 'Lett Digital',
    url: 'https://www.lettdigital.no',
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

// E-E-A-T: Article Schema for guides
interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author?: {
    name: string;
    url?: string;
    jobTitle?: string;
  };
  locale: string;
}

export function ArticleSchema({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  locale
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `https://www.lettdigital.no${url}`,
    datePublished,
    dateModified,
    inLanguage: locale === 'no' ? 'nb-NO' : locale,
    author: author ? {
      '@type': 'Person',
      name: author.name,
      url: author.url || 'https://www.lettdigital.no/no/om',
      jobTitle: author.jobTitle
    } : {
      '@type': 'Organization',
      name: 'LettDigital',
      url: 'https://www.lettdigital.no'
    },
    publisher: {
      '@type': 'Organization',
      name: 'LettDigital',
      url: 'https://www.lettdigital.no',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.lettdigital.no/icons/icon-512x512.png'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.lettdigital.no${url}`
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// E-E-A-T: Person Schema for author pages
interface PersonSchemaProps {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  sameAs?: string[];
}

export function PersonSchema({ name, jobTitle, description, url, sameAs }: PersonSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    jobTitle,
    description,
    url: `https://www.lettdigital.no${url}`,
    worksFor: {
      '@type': 'Organization',
      name: 'LettDigital',
      url: 'https://www.lettdigital.no'
    },
    sameAs: sameAs || []
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
