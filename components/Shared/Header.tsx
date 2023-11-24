"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "public/images/logo.jpg";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-red">
      <div className="flex mx-auto max-w-screen-xl justify-between px-3">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={60} height={60} />
        </Link>

        <nav className="sm:flex hidden justify-between items-center gap-2 lg:w-1/2 sm:w-3/4">
          <Link href="/">
            <p className="text-white font-bold text-md">Despre noi</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md">Postări</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md">Analize</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md">Campanii</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md">Alătură-te</p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md">Contact</p>
          </Link>
        </nav>

        <button
          type="button"
          className="relative inline-flex sm:hidden items-center justify-center rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white animate-spin-fast"
          aria-controls="mobile-menu"
          aria-expanded="false"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ animationDirection: "reverse" }}
        >
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>

          <svg
            className="block h-10 w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#fff"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <nav className="sm:hidden flex flex-col fixed top-0 w-full h-screen px-5 py-10 justify-start gap-3 bg-red animation-nav">
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
              stroke-width="1.5"
              stroke="#fff"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
              className="pb-4 mx-auto"
            />
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Despre noi
            </p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Postări
            </p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Analize
            </p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Campanii
            </p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Alătură-te
            </p>
          </Link>
          <Link href="/">
            <p className="text-white font-bold text-md border-b-2 pb-1 pl-2 border-gray-200 rounded-bl-lg">
              Contact
            </p>
          </Link>
        </nav>
      )}
    </header>
  );
}
