// City-specific data that can't come from translations

export interface NavOffice {
  bydel: string;
  adresse: string;
  postnr: string;
}

export interface UsefulLink {
  url: string;
  titleKey: string; // translation key or direct title
  subtitle: string;
  iconType: 'municipality' | 'transport' | 'search';
}

export interface CityDataType {
  slug: string;
  navOffices: NavOffice[];
  usefulLinks: UsefulLink[];
  hasTaxSection?: boolean;
}

export const allCities = ['oslo', 'bergen', 'trondheim', 'stavanger', 'kristiansand'] as const;
export type CitySlug = (typeof allCities)[number];

export const cityData: Record<CitySlug, CityDataType> = {
  oslo: {
    slug: 'oslo',
    navOffices: [
      { bydel: 'Gamle Oslo', adresse: 'Hagegata 24', postnr: '0653 Oslo' },
      { bydel: 'Grünerløkka', adresse: 'Marstrandgata 6', postnr: '0566 Oslo' },
      { bydel: 'Sagene', adresse: 'Thorvald Meyers gate 9', postnr: '0555 Oslo' },
      { bydel: 'Frogner', adresse: 'Drammensveien 60', postnr: '0271 Oslo' },
      { bydel: 'Bjerke', adresse: 'Økernveien 94', postnr: '0579 Oslo' },
      { bydel: 'Grorud', adresse: 'Ammerudveien 22', postnr: '0958 Oslo' },
      { bydel: 'Stovner', adresse: 'Stovner senter 2', postnr: '0985 Oslo' },
      { bydel: 'Søndre Nordstrand', adresse: 'Holmlia senter', postnr: '1255 Oslo' },
    ],
    usefulLinks: [
      { url: 'https://www.oslo.kommune.no', titleKey: 'municipality', subtitle: 'oslo.kommune.no', iconType: 'municipality' },
      { url: 'https://ruter.no', titleKey: 'Ruter', subtitle: 'publicTransport', iconType: 'transport' },
      { url: 'https://www.oslo.kommune.no/bolig-og-sosiale-tjenester/finn-ditt-nav-kontor/', titleKey: 'findNAVOffice', subtitle: 'allDistricts', iconType: 'search' },
    ],
    hasTaxSection: true,
  },
  bergen: {
    slug: 'bergen',
    navOffices: [
      { bydel: 'Bergen nord', adresse: 'Åsane senter', postnr: '5116 Ulset' },
      { bydel: 'Bergen vest', adresse: 'Loddefjord', postnr: '5178 Loddefjord' },
      { bydel: 'Bergen sør', adresse: 'Østre Nesttunvegen 8', postnr: '5221 Nesttun' },
      { bydel: 'Bergen sentrum', adresse: 'Solheimsgaten 13', postnr: '5058 Bergen' },
    ],
    usefulLinks: [
      { url: 'https://www.bergen.kommune.no', titleKey: 'municipality', subtitle: 'bergen.kommune.no', iconType: 'municipality' },
      { url: 'https://www.skyss.no', titleKey: 'Skyss', subtitle: 'publicTransport', iconType: 'transport' },
      { url: 'https://www.nav.no/no/nav-og-samfunn/kontakt-nav/relatert-informasjon/finn-ditt-nav-kontor', titleKey: 'findNAVOffice', subtitle: 'allDistricts', iconType: 'search' },
    ],
  },
  trondheim: {
    slug: 'trondheim',
    navOffices: [
      { bydel: 'Trondheim sentrum', adresse: 'Erling Skakkes gate 60', postnr: '7012 Trondheim' },
      { bydel: 'Heimdal', adresse: 'Heimdal storsenter', postnr: '7080 Heimdal' },
      { bydel: 'Lerkendal', adresse: 'Lerkendal', postnr: '7030 Trondheim' },
    ],
    usefulLinks: [
      { url: 'https://www.trondheim.kommune.no', titleKey: 'municipality', subtitle: 'trondheim.kommune.no', iconType: 'municipality' },
      { url: 'https://www.atb.no', titleKey: 'AtB', subtitle: 'publicTransport', iconType: 'transport' },
      { url: 'https://www.nav.no/no/nav-og-samfunn/kontakt-nav/relatert-informasjon/finn-ditt-nav-kontor', titleKey: 'findNAVOffice', subtitle: 'allDistricts', iconType: 'search' },
    ],
  },
  stavanger: {
    slug: 'stavanger',
    navOffices: [
      { bydel: 'Stavanger sentrum', adresse: 'Lagårdsveien 46', postnr: '4010 Stavanger' },
      { bydel: 'Hundvåg', adresse: 'Hundvåg', postnr: '4085 Hundvåg' },
      { bydel: 'Madla', adresse: 'Madlamark', postnr: '4042 Hafrsfjord' },
    ],
    usefulLinks: [
      { url: 'https://www.stavanger.kommune.no', titleKey: 'municipality', subtitle: 'stavanger.kommune.no', iconType: 'municipality' },
      { url: 'https://www.kolumbus.no', titleKey: 'Kolumbus', subtitle: 'publicTransport', iconType: 'transport' },
      { url: 'https://www.nav.no/no/nav-og-samfunn/kontakt-nav/relatert-informasjon/finn-ditt-nav-kontor', titleKey: 'findNAVOffice', subtitle: 'allDistricts', iconType: 'search' },
    ],
  },
  kristiansand: {
    slug: 'kristiansand',
    navOffices: [
      { bydel: 'Kristiansand sentrum', adresse: 'Tordenskjolds gate 65', postnr: '4612 Kristiansand' },
      { bydel: 'Vågsbygd', adresse: 'Vågsbygd', postnr: '4621 Kristiansand' },
      { bydel: 'Randesund', adresse: 'Randesund', postnr: '4639 Kristiansand' },
    ],
    usefulLinks: [
      { url: 'https://www.kristiansand.kommune.no', titleKey: 'municipality', subtitle: 'kristiansand.kommune.no', iconType: 'municipality' },
      { url: 'https://www.akt.no', titleKey: 'AKT', subtitle: 'publicTransport', iconType: 'transport' },
      { url: 'https://www.nav.no/no/nav-og-samfunn/kontakt-nav/relatert-informasjon/finn-ditt-nav-kontor', titleKey: 'findNAVOffice', subtitle: 'allDistricts', iconType: 'search' },
    ],
  },
};

// Get other cities (excluding current)
export function getOtherCities(currentCity: CitySlug): CitySlug[] {
  return allCities.filter(city => city !== currentCity);
}
