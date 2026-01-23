import { Link } from '@/i18n/navigation';
import { setRequestLocale } from 'next-intl/server';

export default async function PersonvernPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 sm:py-8 md:py-12">
      <Link href="/" className="text-nav-blue hover:underline mb-6 inline-flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Tilbake til forsiden
      </Link>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-8">Personvernerklæring</h1>

      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 mb-8">
          Sist oppdatert: Januar 2025
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hvem er vi?</h2>
          <p className="text-gray-700 mb-4">
            LettDigital er en informasjonstjeneste som hjelper folk med å bruke offentlige digitale tjenester.
            Vi er ikke en del av NAV, Skatteetaten eller Helsenorge, men gir veiledning basert på offentlig tilgjengelig informasjon.
          </p>
          <p className="text-gray-700">
            Kontakt: kontakt@lettdigital.no
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Hvilke data samler vi inn?</h2>
          <p className="text-gray-700 mb-4">
            Vi samler inn <strong>minimalt med data</strong> og kun det som er nødvendig for at nettsiden skal fungere:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Lokale innstillinger:</strong> Tekststørrelse, kontrastmodus og favoritter lagres kun i din nettleser (localStorage)</li>
            <li><strong>Cookie-samtykke:</strong> Vi husker om du har godtatt eller avvist cookies</li>
          </ul>
          <p className="text-gray-700 mt-4">
            Vi samler <strong>ikke</strong> inn:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li>Personlig identifiserbar informasjon (navn, e-post, telefon)</li>
            <li>IP-adresser for sporingsformål</li>
            <li>Informasjon om din bruk av offentlige tjenester</li>
            <li>Data som deles med tredjeparter for reklame</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Informasjonskapsler (cookies)</h2>
          <p className="text-gray-700 mb-4">
            Vi bruker kun <strong>nødvendige informasjonskapsler</strong> som lagres lokalt i din nettleser:
          </p>
          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b">
                  <th className="pb-2 font-semibold">Navn</th>
                  <th className="pb-2 font-semibold">Formål</th>
                  <th className="pb-2 font-semibold">Varighet</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="py-2">cookie-consent</td>
                  <td className="py-2">Husker ditt cookie-valg</td>
                  <td className="py-2">Permanent</td>
                </tr>
                <tr className="border-b">
                  <td className="py-2">favorites</td>
                  <td className="py-2">Dine lagrede favoritter</td>
                  <td className="py-2">Permanent</td>
                </tr>
                <tr>
                  <td className="py-2">accessibility</td>
                  <td className="py-2">Tekststørrelse og kontrast</td>
                  <td className="py-2">Permanent</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700">
            Vi bruker <strong>ikke</strong> analyse-cookies (som Google Analytics) eller reklame-cookies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Deling med tredjeparter</h2>
          <p className="text-gray-700 mb-4">
            Vi deler <strong>ingen data</strong> med tredjeparter. All informasjon forblir i din nettleser.
          </p>
          <p className="text-gray-700">
            Nettsiden hostes av Vercel, som kan logge teknisk informasjon (IP-adresse, nettlesertype) for sikkerhetsformål.
            Se <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-nav-blue hover:underline">Vercels personvernerklæring</a> for mer informasjon.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dine rettigheter</h2>
          <p className="text-gray-700 mb-4">
            I henhold til GDPR og norsk personvernlovgivning har du rett til å:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
            <li><strong>Slette data:</strong> Tøm nettleserens lokale lagring for å fjerne alle innstillinger</li>
            <li><strong>Få innsyn:</strong> All data er lagret lokalt i din nettleser og synlig for deg</li>
            <li><strong>Trekke samtykke:</strong> Du kan når som helst slette cookies i nettleserinnstillingene</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sikkerhet</h2>
          <p className="text-gray-700">
            Nettsiden bruker HTTPS-kryptering for sikker kommunikasjon.
            Siden vi ikke samler inn persondata, er det minimal risiko for datalekkasje.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Kontakt oss</h2>
          <p className="text-gray-700">
            Har du spørsmål om personvern? Kontakt oss på:{' '}
            <a href="mailto:kontakt@lettdigital.no" className="text-nav-blue hover:underline">
              kontakt@lettdigital.no
            </a>
          </p>
        </section>

        <section className="bg-blue-50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-3">Endringer i personvernerklæringen</h2>
          <p className="text-gray-700">
            Vi kan oppdatere denne erklæringen ved behov. Vesentlige endringer vil bli varslet på nettsiden.
          </p>
        </section>
      </div>
    </div>
  );
}
