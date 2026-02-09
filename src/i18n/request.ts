import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !(routing.locales as readonly string[]).includes(locale)) {
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
function deepMerge(target: Record<string, unknown>, source: Record<string, unknown>): Record<string, unknown> {
  const output = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      output[key] = deepMerge(
        (target[key] as Record<string, unknown>) || {},
        source[key] as Record<string, unknown>
      );
    } else {
      output[key] = source[key];
    }
  }
  return output;
}
