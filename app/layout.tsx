"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/Shared";
import { NextSeo } from "next-seo";

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
            title: "Libertate, Fraternitate, Egalitate, Toleranta",
            description:
              "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
            site_name: "LEFT",
          }}
          additionalMetaTags={[
            {
              property: "keywords",
              content:
                "left, romania, politica, politica romaneasca, politica, stanga, stânga, stânga românească",
            },
          ]}
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
