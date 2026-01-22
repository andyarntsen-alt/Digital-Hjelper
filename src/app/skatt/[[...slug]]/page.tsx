import { redirect } from 'next/navigation';

export default function SkattRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/skatt${path}`);
}
