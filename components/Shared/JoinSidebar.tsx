import Link from "next/link";
import Image from "next/image";

export default function JoinSidebar() {
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
    {
      name: "Discord",
      url: "https://discord.com/invite/zJDTzjYbSj",
      icon: "/images/discord.svg",
    },
  ];
  return (
    <>
      <Link href="/">
        <h2 className="font-black text-3xl hover:text-gray-500">
          Abonează-te la newsletter
        </h2>
      </Link>

      {/* <Link href="/">
        <h2 className="font-black text-3xl hover:text-gray-500">Donează</h2>
      </Link> */}

      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform">
        <h2 className="font-black text-3xl hover:text-gray-500">
          Devino Membru
        </h2>
      </Link>

      <h2 className="font-black text-2xl">
        Ia legătura cu coordonatorii platformei LEFT
      </h2>

      <Link href="mailto:contact@danefacembine.ro">
        <h2 className="font-black text-2xl hover:text-gray-500">
          e-mail: <br /> contact@danefacembine.ro
        </h2>
      </Link>

      <div className="flex gap-4 justify-between">
        {socials.map((social, index) => (
          <Link
            href={social.url}
            key={index}
            className="hover:scale-150 transition-all"
            target="_blank"
          >
            <div className="flex items-center gap-2 hover:text-gray-500">
              <Image
                src={social.icon}
                alt={social.name}
                width={40}
                height={40}
                priority={true}
              />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
