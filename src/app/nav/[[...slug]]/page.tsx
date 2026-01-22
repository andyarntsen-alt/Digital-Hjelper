import { redirect } from 'next/navigation';

export default function NavRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/nav${path}`);
}
