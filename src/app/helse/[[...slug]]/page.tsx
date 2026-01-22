import { redirect } from 'next/navigation';

export default function HelseRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/helse${path}`);
}
