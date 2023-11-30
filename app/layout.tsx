import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "public/globals.css";
import Header from "@/components/Shared/Header.1";
import Footer from "@/components/Shared/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Left",
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
