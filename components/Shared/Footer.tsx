import Image from "next/image";
import Link from "next/link";

import Logo from "public/images/logo.svg";

export default function Footer() {
  const links = [
    {
      name: "Despre noi",
      id: "/about-us",
    },
    {
      name: "Manifest",
      id: "/manifest",
    },
    {
      name: "Postări",
      id: "#postari",
    },
    {
      name: "Analize",
      id: "#analize",
    },
    {
      name: "Campanii",
      id: "#campanii",
    },
    {
      name: "Alătură-te",
      id: "#alaturate",
    },
    {
      name: "Contact",
      id: "#contact",
    },
  ];

  return (
    <footer className="w-full bg-red">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5">
        <div className="flex gap-2 items-end">
          {links.map((link, index) => (
            <Link
              href={link.id}
              key={index}
              className="text-white border-r-2 border-white px-6 sm:px-2 last:border-r-0 text-md pb-1 hover:text-lg"
            >
              {link.name}
            </Link>
          ))}
          {/* <button
            type="button"
            className="inline-flex items-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-red shadow-sm hover-bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-white ml-1"
          >
            Donate
          </button> */}
        </div>

        <Link href="/" className="hidden sm:block">
          <Image
            src={Logo}
            alt="Logo"
            width={80}
            height={80}
            className="w-[inhredit] h-[inhredit]"
          />
        </Link>
      </div>
    </footer>
  );
}
