"use client";
import Image from "next/image";
import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function HomePage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <main className="bg-white text-gray-900 px-6 py-10 space-y-24 font-sans">
      {/* Logo */}
      <div className="text-4xl font-bold text-blue-700">Lenk Logistic</div>

      {/* Hero */}
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Zuverlässige Umzüge ohne Stress
        </h1>
        <p className="text-xl text-gray-600">
          Jetzt Angebot sichern: <strong>030 12345678</strong>
        </p>
        <Image
          src="/images/lkw.jpg"
          alt="LKW"
          width={800}
          height={400}
          className="mx-auto rounded-xl shadow-md"
        />
      </section>

      {/* Über uns */}
      <section className="max-w-3xl mx-auto text-center space-y-3">
        <h2 className="text-2xl font-semibold">Über uns</h2>
        <p>
          Seit über 10 Jahren bringt Lenk Logistic Ihre Welt sicher von A nach
          B. Wir stehen für Transparenz, Präzision und Verlässlichkeit.
        </p>
      </section>

      {/* Leistungen */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-6">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: "🏡", title: "Umzüge", desc: "Privat & gewerblich" },
            { icon: "📦", title: "Lagerung", desc: "Sicher & flexibel" },
            {
              icon: "🚛",
              title: "Spezialtransporte",
              desc: "Individuell & effizient",
            },
          ].map((item) => (
            <div key={item.title} className="p-4 border rounded shadow-sm">
              <div className="text-3xl">{item.icon}</div>
              <h3 className="font-medium mt-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Kontaktformular */}
      <section className="max-w-lg mx-auto text-center space-y-6">
        <h2 className="text-2xl font-semibold">Kontakt</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {["name", "email", "phone"].map((field) => (
            <input
              key={field}
              type={
                field === "email" ? "email" : field === "phone" ? "tel" : "text"
              }
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              className="w-full border p-2 rounded"
              value={form[field as keyof FormData]}
              onChange={(e) =>
                setForm({ ...form, [field as keyof FormData]: e.target.value })
              }
              required
            />
          ))}
          <textarea
            placeholder="Nachricht"
            rows={4}
            className="w-full border p-2 rounded"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <label className="text-sm block text-left">
            <input type="checkbox" required className="mr-2" /> Ich stimme der
            Datenschutzerklärung zu
          </label>
          <button
            type="submit"
            className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800"
          >
            Absenden
          </button>
        </form>
        <p className="text-sm text-gray-500">
          Telefon: 030 12345678 · E-Mail: info@lenk-logistic.de
        </p>
      </section>

      <footer className="text-center text-xs text-gray-400 mt-16 space-x-4">
        © 2025 Lenk Logistic ·
        <a href="/impressum" className="underline text-blue-600">
          Impressum
        </a>{" "}
        ·
        <a href="/datenschutz" className="underline text-blue-600">
          Datenschutz
        </a>
      </footer>
    </main>
  );
}
