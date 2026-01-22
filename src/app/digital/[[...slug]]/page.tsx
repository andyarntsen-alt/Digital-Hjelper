import { redirect } from 'next/navigation';

export default function DigitalRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/digital${path}`);
}
