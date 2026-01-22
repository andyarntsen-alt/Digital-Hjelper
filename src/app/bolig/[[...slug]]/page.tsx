import { redirect } from 'next/navigation';

export default function BoligRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/bolig${path}`);
}
