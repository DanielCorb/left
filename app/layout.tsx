import "public/globals.css";
import "swiper/css";
import "swiper/css/pagination";

import { Inter } from "next/font/google";
import { Header, Footer, LoginBar } from "@/components/Shared";

import type { Metadata } from "next";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

type ImageMetadata = {
  url: string;
  width: number;
  height: number;
  alt?: string;
};

type ExtendedMetadata = Metadata & {
  keywords?: string;
  images?: ImageMetadata[];
};

export const metadata: ExtendedMetadata = {
  title: "LEFT",
  description:
    "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică, ",
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
        {metadata.images &&
          metadata.images.map((image, index) => (
            <meta key={index} property="og:image" content={image.url} />
          ))}
        <meta property="og:image" content="/images/analize1.png" />
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
