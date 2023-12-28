import Image from "next/image";
import Link from "next/link";

import Logo from "public/images/logo.svg";

export default function Footer() {
  const socials = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/people/LEFT-Libertate-Egalitate-Fraternitate-Toleran%C8%9B%C4%83/100095630493224/",
      icon: "/images/facebook.svg",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/go_left_oficial/",
      icon: "/images/instagram.svg",
    },
    {
      name: "Youtube",
      url: "https://www.youtube.com/@LEFT-Romania",
      icon: "/images/youtube.svg",
    },
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@go_left_oficial",
      icon: "/images/tiktok.svg",
    },
  ];

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Despre",
      url: "/despre",
    },
    {
      name: "Proiecte",
      url: "/proiecte",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <footer className="w-full bg-red">
      <div className="mx-auto max-w-screen-xl p-3">
        <div className="flex justify-between border-b-2 border-white p-4">
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={80}
              height={80}
              className="w-[inhredit] h-[inhredit]"
            />
          </Link>

          <div className="flex justify-between items-end lg:w-1/3 sm:w-1/2 w-full">
            {socials.map((social) => (
              <Link
                href={social.url}
                target="_blank"
                className="hover:scale-150 transition-all duration-100s ease-in-out"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={30}
                  height={30}
                />
              </Link>
            ))}

            <div className="pl-4 border-l-2 border-white">
              <button
                type="button"
                className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-red shadow-sm hover-bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-white"
              >
                Donate
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-6 pt-4 pb-1">
          {links.map((link) => (
            <Link
              href={link.url}
              className="text-white border-r-2 border-white pr-6 last:border-r-0 last:pr-0"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
