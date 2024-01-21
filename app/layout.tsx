import type { Metadata } from "next";
import { NextSeo } from "next-seo";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/Shared";

import "public/globals.css";
import "swiper/css";
import "swiper/css/pagination";
import LoginBar from "@/components/Shared/LoginBar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "LEFT",
//   description:
//     "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <NextSeo
          title="LEFT"
          description="O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024"
          openGraph={{
            url: "/analytics",
            title: "Analize - LEFT",
            siteName: "LEFT",
          }}
        />
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
