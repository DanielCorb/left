import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subvenționarea energiei electrice pentru populație - LEFT",
  description:
    "Explozia prețurilor la energie continua și continuă să amplifice cele două efecte majore cu care societatea se confruntț astăzi: sărăcirea populației și transferul unei părți importante din veniturile cetățenilor către buzunarele “băieților deștepți” care controlează Sistemul. Presiunile pentru privatizarea companiilor de stat (Hidroelectrica) sunt mari și deja au început. Am văzut cum în vară energia electrică a avut chiar preț negativ, nimic din toate astea nu se reflect însă în prețul plătit de populație.",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
  metadataBase: new URL("https://left.org.ro/campaigns"),
};

export default function page() {
  const campaingns = [
    {
      title: "Subvenționarea energiei electrice pentru populație",
      description:
        "Explozia prețurilor la energie continua și continuă să amplifice cele două efecte majore cu care societatea se confruntț astăzi: sărăcirea populației și transferul unei părți importante din veniturile cetățenilor către buzunarele “băieților deștepți” care controlează Sistemul. Presiunile pentru privatizarea companiilor de stat (Hidroelectrica) sunt mari și deja au început. Am văzut cum în vară energia electrică a avut chiar preț negativ, nimic din toate astea nu se reflect însă în prețul plătit de populație. ",
      image: "/images/campanii1.png",
      link: "/campaigns/subventionarea-energiei-electrice-pentru-populatie",
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black mt-8 mb-4">Campanii</h2>

      <div className="flex flex-col gap-20 mb-10">
        {campaingns.map((post) => (
          <Link href={post.link} key={post.title}>
            <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto my-4">
              <div className="sm:hidden block">
                <Image
                  src={post.image}
                  alt="Posts"
                  className="md:w-1/2 w-full object-contain"
                  width={100}
                  height={100}
                  priority
                />
              </div>

              <div className="sm:w-2/3 w-full">
                <h2 className="text-4xl font-black hover:text-gray-500">
                  {post.title}
                </h2>

                <h4 className="my-4 text-lg">{post.description}</h4>

                <h5 className="text-lg font-bold hover:text-gray-500">
                  Citește mai departe...
                </h5>
              </div>

              <div className="sm:flex items-center justify-center sm:w-1/3 w-1/2 hidden">
                <Image
                  src={post.image}
                  alt="Posts"
                  width={500}
                  height={500}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
