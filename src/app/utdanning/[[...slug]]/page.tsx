import { redirect } from 'next/navigation';

export default function UtdanningRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/utdanning${path}`);
}
