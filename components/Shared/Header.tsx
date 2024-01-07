"use client";
import { useWindowSize } from "@uidotdev/usehooks";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navs = [
    {
      name: "Despre noi",
      id: "/about-us",
    },
    {
      name: "Manifest",
      id: "/manifest",
    },
    {
      name: "Analize",
      id: "https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform",
    },
    {
      name: "Campanii",
      id: "#campanii",
    },
    {
      name: "Alătură-te",
      id: "#alaturate",
    },
  ];
  const { width } = useWindowSize() as { width: number };

  const widthLogo = width > 900 ? 250 : width < 800 ? 50 : 150;

  return (
    <header className="w-full bg-red">
      <div className="flex mx-auto max-w-screen-xl justify-between px-3 sm:py-6 py-2 sm:gap-8">
        <button
          type="button"
          className="relative inline-flex sm:hidden items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#fff"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        <div className="flex flex-col justify-between">
          <Link href="/" className="sm:block hidden">
            <h1 className="lg:text-2xl text-xl text-white py-6 ">
              O inițiativă pentru consolidarea <br /> unei platforme
              civico-politice pentru <br /> însănătoșirea vieții sociale,
              politice și economice <br /> în perspectiva anului electoral 2024
            </h1>
          </Link>

          <nav className="sm:flex hidden justify-between items-center lg:gap-8 gap-2">
            {navs.map((nav, index) => (
              <Link href={nav.id} key={index}>
                <p className="text-white text-lg hover:text-xl m-0 hover:-m-1">
                  {nav.name}
                </p>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="flex justify-center w-fit">
          <Image src={Logo} alt="Logo" width={widthLogo} height={widthLogo} />
        </Link>
      </div>

      <Link href="/" className="sm:hidden block">
        <h1 className="text-xs text-white text-center px-4 pb-4 ">
          O inițiativă pentru consolidarea unei platforme civico-politice pentru
          însănătoșirea vieții sociale, politice și economice în perspectiva
          anului electoral 2024
        </h1>
      </Link>

      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col fixed top-0 w-full h-screen px-5 py-10 justify-start gap-3 bg-red animation-nav transition-all z-10">
          <button
            type="button"
            className="absolute top-4 left-3 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10 animate-spin-fast"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <Link href="/">
            <Image
              src={Logo}
              alt="Logo"
              width={200}
              height={200}
              className="pb-4 mx-auto w-fit h-fit"
            />
          </Link>
          {navs.map((nav, index) => (
            <Link href={nav.id} key={index}>
              <p className="text-white font-bold text-md">{nav.name}</p>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
