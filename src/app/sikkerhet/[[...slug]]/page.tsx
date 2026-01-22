import { redirect } from 'next/navigation';

export default function SikkerhetRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/sikkerhet${path}`);
}
