import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.svg";

export default function Footer() {
  const links = [
    {
      name: "Despre noi",
      id: "/about-us",
      target: "",
    },
    {
      name: "Manifest",
      id: "/manifest",
      target: "",
    },
    {
      name: "Analize",
      id: "/analysis",
      target: "",
    },
    {
      name: "Campanii",
      id: "/campaigns",
      target: "",
    },
    {
      name: "Alătură-te",
      id: "https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform",
      target: "_blank",
    },
  ];

  return (
    <footer className="w-full bg-red sm:block hidden">
      <div className="flex justify-between items-center mx-auto max-w-screen-xl p-5">
        <div className="flex gap-2 items-center">
          {links.map((link, index) => (
            <Link
              href={link.id}
              key={index}
              className="text-white border-r-2 border-white px-6 sm:px-2 text-md hover:scale-110" target={link.target}
            >
              {link.name}
            </Link>
          ))}
          <Link href="https://www.buymeacoffee.com/platformaleft" > 
            <button
              type="button"
              className="inline-flex items-center rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-red shadow-sm hover-bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-white ml-1"
            >
              Donate
            </button>
          </Link>
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
