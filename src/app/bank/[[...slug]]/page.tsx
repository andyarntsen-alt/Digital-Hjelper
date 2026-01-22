import { redirect } from 'next/navigation';

export default function BankRedirect({ params }: { params: { slug?: string[] } }) {
  const path = params.slug ? `/${params.slug.join('/')}` : '';
  redirect(`/no/bank${path}`);
}
