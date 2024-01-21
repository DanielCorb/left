import "public/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import { Inter } from "next/font/google";
import { Header, Footer, LoginBar } from "@/components/Shared";

import type { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type ExtendedMetadata = Metadata & {
  keywords?: string;
};

export const metadata: ExtendedMetadata = {
  title: "LEFT",
  description:
    "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
  keywords:
    "Meniu QR, Meniul electronic, Gestionare meniu restaurant, Meniu electronic restaurant, Meniu restaurant, Meniu PDF, Restaurant, Bar, Info nutritionale, Meniu Customizabil, Conformitate legislativa, Meniu Restaurant Flexibil, Meniu Baruri, Meniu Simplu",
  openGraph: {
    url: "https://left-wine.vercel.app/",
    images: [
      {
        url: "/images/analize1.png",
        width: 1200,
        height: 630,
        alt: "LEFT",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title)}</title>
        <meta name="description" content={String(metadata.description)} />
        {metadata.keywords && (
          <meta name="keywords" content={metadata.keywords} />
        )}
        <meta property="og:url" content={String(metadata.openGraph?.url)} />
      </Head>

      <body className={inter.className + "relative"}>
        <LoginBar />
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
