import React from "react";
import Image from "next/image";
import Post1 from "public/images/post1.png";
import Post2 from "public/images/post2.png";
import Post3 from "public/images/post3.png";
import Post4 from "public/images/post4.png";
import Post5 from "public/images/post5.png";
import Post6 from "public/images/post6.png";
import Post7 from "public/images/post7.png";
import Post8 from "public/images/post8.png";
import Post9 from "public/images/post9.png";
import Post10 from "public/images/post10.png";
import Post11 from "public/images/post11.png";
import Post12 from "public/images/post12.png";
import Post13 from "public/images/post13.png";
import Post14 from "public/images/post14.png";
import Post15 from "public/images/post15.png";
import Post16 from "public/images/post16.png";
import Post17 from "public/images/post17.png";
import Post18 from "public/images/post18.png";
import Post19 from "public/images/post19.png";
import Post20 from "public/images/post20.png";
import Post21 from "public/images/post21.png";
import Post22 from "public/images/post22.png";
import Post23 from "public/images/post23.png";
import Post24 from "public/images/post24.png";
import Post25 from "public/images/post25.png";
import Post26 from "public/images/post26.png";
import Post27 from "public/images/post27.png";
import Post28 from "public/images/post28.png";
import Post29 from "public/images/post29.gif";
import Post30 from "public/images/post30.png";
import Link from "next/link";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Postări - LEFT",
  description:
    "O inițiativă pentru consolidarea unei platforme civico-politice pentru însănătoșirea vieții sociale, politice și economice în perspectiva anului electoral 2024",
  keywords:
    "Stânga politică România, LEFT România, Idei de stânga, Politică progresistă, Libertate și egalitate, Fraternitate politică, Toleranță socială, Partid stânga România, Activism politic, Mișcarea LEFT, Drepturi sociale, Justiție economică, Solidaritate politică, Schimbare socială, Democratie participativa, Drepturile omului, Politici progresiste, Campanii sociale, Solidaritate națională, Participare civică",
  metadataBase: new URL("https://left.org.ro/"),
};

export default function page() {
  const posts = [
    {
      src: Post30,
      href: "https://www.instagram.com/p/C2uSh44oUAt/",
    },
    {
      src: Post29,
      href: "https://www.instagram.com/p/C2g9ZtArD34/",
    },
    {
      src: Post28,
      href: "https://www.instagram.com/p/C2etXUrolFw/",
    },
    {
      src: Post27,
      href: "https://www.instagram.com/p/C2NnoldCtiU/?img_index=1",
    },
    {
      src: Post26,
      href: "https://www.instagram.com/p/Cz6TSqsoKKw/",
    },
    {
      src: Post25,
      href: "https://www.instagram.com/p/C04IX-Do61l/",
    },
    {
      src: Post24,
      href: "https://www.instagram.com/p/C2HGXA9IyVl/",
    },
    {
      src: Post23,
      href: "https://www.instagram.com/p/C13xnfsq9gr/",
    },
    {
      src: Post22,
      href: "https://www.instagram.com/p/C1hED6gofpP/",
    },
    {
      src: Post21,
      href: "https://www.instagram.com/p/C1O8R4tupPc/",
    },
    {
      src: Post20,
      href: "https://www.instagram.com/p/C1G_tFsqZJb/",
    },
    {
      src: Post19,
      href: "https://www.instagram.com/p/C0ULnF3IcmN/",
    },
    {
      src: Post18,
      href: "https://www.instagram.com/p/C0Md3fJo0YA/",
    },
    {
      src: Post17,
      href: "https://www.instagram.com/p/C0CFWm6ocXK/",
    },
    {
      src: Post16,
      href: "https://www.instagram.com/p/CzwKiXvoY_Z/",
    },
    {
      src: Post15,
      href: "https://www.instagram.com/p/CzeKOOkoSr2/",
    },
    {
      src: Post14,
      href: "https://www.instagram.com/p/CzY5vWFoCS5/",
    },
    {
      src: Post13,
      href: "https://www.instagram.com/p/CzLk1XoId1G/",
    },
    {
      src: Post12,
      href: "https://www.instagram.com/p/CzGMZLDIrEB/",
    },
    {
      src: Post11,
      href: "https://www.instagram.com/p/CzBX1e3Igqs/",
    },
    {
      src: Post10,
      href: "https://www.instagram.com/p/Cy5jYrQIBjw/",
    },
    {
      src: Post9,
      href: "https://www.instagram.com/p/CyxvIQjIP5Q/",
    },
    {
      src: Post8,
      href: "https://www.instagram.com/p/CyfaMgUIYr_/",
    },
    {
      src: Post7,
      href: "https://www.instagram.com/p/CyVaeF2IUjA/",
    },
    {
      src: Post6,
      href: "https://www.instagram.com/p/CyOAtkoIVwe/",
    },
    {
      src: Post5,
      href: "https://www.instagram.com/p/Cx9twREIBMp/",
    },
    {
      src: Post4,
      href: "https://www.instagram.com/p/CxvVhJWoH-E/",
    },
    {
      src: Post3,
      href: "https://www.instagram.com/p/CxNtk7IsceS/",
    },
    {
      src: Post2,
      href: "https://www.instagram.com/p/CxCvapwMwIT/",
    },
    {
      src: Post1,
      href: "https://www.instagram.com/p/Cw4japnsFE0/",
    },
  ];

  return (
    <main className="max-w-screen-xl mx-auto p-3">
      <h2 className="text-4xl font-black py-8">Postări</h2>

      <div className="sm:grid flex flex-col lg:grid-cols-4 md:grid-cols-3 w-full sm:grid-cols-2 gap-10 justify-items-center justify-between items-center mb-20">
        {posts.map((post) => (
          <Link href={post.href} target="_blank" key={post.href}>
            <Image
              src={post.src}
              width={300}
              height={300}
              className="w-full object-contain"
              alt={"posts"}
              priority
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
