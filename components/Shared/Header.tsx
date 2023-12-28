"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.svg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navs = [
    {
      name: "Despre noi",
      link: "/",
    },
    {
      name: "Postări",
      link: "/",
    },
    {
      name: "Analize",
      link: "/",
    },
    {
      name: "Campanii",
      link: "/",
    },
    {
      name: "Alătură-te",
      link: "/",
    },
    {
      name: "Contact",
      link: "/",
    },
  ];

  return (
    <header className="w-full bg-red">
      <div className="flex mx-auto max-w-screen-xl justify-between px-3 sm:py-6 py-2">
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
          <h1 className="text-xl text-white lg:w-3/4 w-4/5 py-6 sm:block hidden">
            O inițiativă pentru consolidarea unei platforme civico-politice
            pentru însănătoșirea vieții sociale, politice și economice în
            perspectiva anului electoral 2024
          </h1>

          <nav className="sm:flex hidden justify-between items-center gap-2 lg:w-1/2 sm:w-3/4">
            {navs.map((nav, index) => (
              <Link href={nav.link} key={index}>
                <p className="text-white font-bold text-md m-0">{nav.name}</p>
              </Link>
            ))}
          </nav>
        </div>

        <Link href="/" className="justify-center sm:flex hidden">
          <Image
            src={Logo}
            alt="Logo"
            width={200}
            height={200}
            className="w-[inhredit] h-[inhredit]"
          />
        </Link>

        <Link href="/" className="justify-center sm:hidden flex">
          <Image
            src={Logo}
            alt="Logo"
            width={50}
            height={50}
            className="w-[inhredit] h-[inhredit]"
          />
        </Link>
      </div>

      <h1 className="text-xs text-white text-center px-4 pb-4 sm:hidden block">
        O inițiativă pentru consolidarea unei platforme civico-politice pentru
        însănătoșirea vieții sociale, politice și economice în perspectiva
        anului electoral 2024
      </h1>

      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col fixed top-0 w-full h-screen px-5 py-10 justify-start gap-3 bg-red animation-nav transition-all">
          <button
            type="button"
            className="absolute top-4 right-3 inline-flex items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white z-10 animate-spin-fast"
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
            <Link href={nav.link} key={index}>
              <p className="text-white font-bold text-md">{nav.name}</p>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
