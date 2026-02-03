import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  // Load default locale messages for fallback
  const defaultMessages = (await import(`../../messages/${routing.defaultLocale}.json`)).default;

  // Load requested locale messages
  const localeMessages = locale === routing.defaultLocale
    ? defaultMessages
    : (await import(`../../messages/${locale}.json`)).default;

  // Deep merge: locale messages take priority, fall back to default
  const messages = locale === routing.defaultLocale
    ? defaultMessages
    : deepMerge(defaultMessages, localeMessages);

  return {
    locale,
    messages
  };
});

// Deep merge utility for translation fallback
function deepMerge(target: any, source: any): any {
  const output = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      output[key] = source[key];
    }
  }
  return output;
}
