import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LettDigital - Enkel veiledning for offentlige tjenester',
  description: 'Vi gjør det enklere for alle å bruke NAV, Skatteetaten og Helsenorge.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
