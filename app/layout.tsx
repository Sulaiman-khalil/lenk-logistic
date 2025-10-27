import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lenk Logistik – Ihr Partner für smarte Transporte",
  description:
    "Logistiklösungen für die Zukunft – nachhaltig, effizient, digital.",
  openGraph: {
    title: "Lenk Logistik",
    description: "Nachhaltige Transportlösungen für morgen.",
    url: "https://www.lenk-logistik.com",
    siteName: "Lenk Logistik",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lenk Logistik",
    description: "Effiziente Logistiklösungen für die Zukunft.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
