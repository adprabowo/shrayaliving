import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const title = "Shraya Living · Cluster dekat UNJA, Jambi";
const description =
  "Rumah 2 kamar di Kenali Besar, Jambi, 10 menit dari UNJA dan Kompleks Perkantoran Gubernur. Legalitas SHM, KPR Syariah, harga mulai Rp400 jutaan.";

export const metadata: Metadata = {
  metadataBase: new URL("https://shrayaliving.vercel.app"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Shraya Living",
    locale: "id_ID",
    type: "website",
    images: [{ url: "/fasad.png", width: 1464, height: 820, alt: "Fasad rumah Shraya Living" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/fasad.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${geistSans.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-navy focus:shadow-lg"
        >
          Langsung ke konten
        </a>
        {children}
      </body>
    </html>
  );
}
