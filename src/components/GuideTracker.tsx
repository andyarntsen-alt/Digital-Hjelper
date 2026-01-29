'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { trackGuideVisit } from './RecentlyVisited';

/**
 * Sporingskompnent for guider.
 * Legg denne til i guide-sider for å tracke besøk.
 *
 * @example
 * <GuideTracker />
 */
export default function GuideTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Fjern locale-prefix fra pathname for å få ren href
    // f.eks. /no/nav/logg-inn -> /nav/logg-inn
    const pathParts = pathname.split('/');
    if (pathParts.length >= 3) {
      // Fjern første tomme element og locale
      const hrefWithoutLocale = '/' + pathParts.slice(2).join('/');
      trackGuideVisit(hrefWithoutLocale);
    }
  }, [pathname]);

  return null;
}
