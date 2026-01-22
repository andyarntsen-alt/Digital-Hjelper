import { redirect } from 'next/navigation';

export default function IdRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/id${path}`);
}
