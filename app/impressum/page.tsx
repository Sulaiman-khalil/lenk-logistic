export default function Impressum() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-12 text-gray-800 space-y-4">
      <h1 className="text-3xl font-semibold mb-4">Impressum</h1>
      <p>Lenk Logistic</p>
      <p>Inhaber: Osman Ahmad</p>
      <p>
        Musterstraße 12
        <br />
        10115 Berlin
      </p>
      <p>Telefon: 030 12345678</p>
      <p>E-Mail: info@lenk-logistic.de</p>
      <p>
        Umsatzsteuer-ID gemäß §27 a Umsatzsteuergesetz: <br />
        DE123456789
      </p>
      <p>
        Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
        <br />
        Sulaiman Khalil, Musterstraße 12, 10115 Berlin
      </p>
      <p>
        Plattform der EU-Kommission zur Online-Streitbeilegung:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          className="text-blue-600 underline"
          target="_blank"
        >
          https://ec.europa.eu/consumers/odr
        </a>
      </p>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </main>
  );
}
