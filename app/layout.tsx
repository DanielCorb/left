import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/Shared";

import "public/globals.css";
import "swiper/css";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LEFT",
  description: "Descriere Left",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
