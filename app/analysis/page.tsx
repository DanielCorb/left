import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stânga Românescă de la voință la (ne)putință | Analize - LEFT",
  description:
    "Suntem condamnați pe vecie ca deciziile ce ne privesc să fie luate mereu de alții? Există vreo șansă ca într-o zi voința noastră să conteze cu adevărat? Conform Constituției, România este o Democrație reprezentativă în care “Alegerile legitimează dreptul reprezentanților de a decide în locul și în numele poporului, fără a-l mai consulta, pentru o perioadă de timp limitată, după care trebuie organizate noi alegeri.”(1) În privința Democrației, înțeleasă în sensul său originar, ca participare a cetățenilor la luarea deciziilor din societate, nu sunt prea multe de spus, căci ea lipsește cu desăvârșire. Singura interferență a noastră cu decizia în societate are loc odată la patru ani, atunci când suntem chemați să validăm niște oameni selectați de cei care îi dirijează și să aprobăm niște programe politice care niciodată nu se pun în practică.",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
  metadataBase: new URL("https://left.org.ro/analysis/"),
};

export default function page() {
  const analysis = [
    {
      title: "Stânga Românescă de la voință la (ne)putință",
      description:
        "Suntem condamnați pe vecie ca deciziile ce ne privesc să fie luate mereu de alții? Există vreo șansă ca într-o zi voința noastră să conteze cu adevărat? Conform Constituției, România este o Democrație reprezentativă în care “Alegerile legitimează dreptul reprezentanților de a decide în locul și în numele poporului, fără a-l mai consulta, pentru o perioadă de timp limitată, după care trebuie organizate noi alegeri.”(1) În privința Democrației, înțeleasă în sensul său originar, ca participare a cetățenilor la luarea deciziilor din societate, nu sunt prea multe de spus, căci ea lipsește cu desăvârșire. Singura interferență a noastră cu decizia în societate are loc odată la patru ani, atunci când suntem chemați să validăm niște oameni selectați de cei care îi dirijează și să aprobăm niște programe politice care niciodată nu se pun în practică.",
      image: "/images/analize1.png",
      link: "analysis/stanga-romaneasca-de-la-vointa-la-neputinta",
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black mt-8 mb-4">Analize</h2>

      <div className="flex flex-col gap-20 mb-10">
        {analysis.map((post) => (
          <Link href={post.link} key={post.title}>
            <div className="flex sm:flex-row flex-col first-letter:items-center lg:justify-between lg:gap-32 gap-6 lg:mx-auto my-4">
              <div className="sm:hidden block">
                <Image
                  src={post.image}
                  alt="Posts"
                  className="md:w-1/2 sm:hidden block w-full object-contain"
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
