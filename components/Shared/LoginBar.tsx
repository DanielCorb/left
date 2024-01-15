"use client";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";

export default function LoginBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-20 bg-red shadow-md">
      <div className="flex mx-auto max-w-screen-xl justify-between items-center px-3 py-2">
        <h2 className="text-lg m-0 text-white">Alatura-te noua &gt;&gt;&gt;</h2>
        <div
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
          className="relative"
        >
          <UserIcon className="text-white w-8 cursor-pointer" />

          {isMenuOpen && (
            <div className="absolute top-8 right-1 bg-red border-2 border-white shadow-inner rounded-md p-2">
              <div className="flex flex-col gap-2 text-white p-2 w-max">
                <Link href="/create">Inregistreaza-te</Link>
                <Link href="/login">Logheaza-te</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
