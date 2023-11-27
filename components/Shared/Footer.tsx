import Image from "next/image";
import Link from "next/link";

import Logo from "public/images/logo.jpg";

export default function Footer() {
  return (
    <footer className="w-full bg-red">
      <div className="mx-auto max-w-screen-xl p-3">
        <div className="flex justify-between border-b-2 border-white p-4">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={80} height={80} />
          </Link>

          <div className="flex justify-between items-end w-1/3">
            <Link
              href="https://www.facebook.com/people/LEFT-Libertate-Egalitate-Fraternitate-Toleran%C8%9B%C4%83/100095630493224/"
              target="_blank"
              className="hover:scale-150 transition-all duration-100s ease-in-out"
            >
              <Image
                src="/images/facebook.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.instagram.com/go_left_oficial/"
              target="_blank"
              className="hover:scale-150 transition-all duration-100s ease-in-out"
            >
              <Image
                src="/images/instagram.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.youtube.com/@LEFT-Romania"
              target="_blank"
              className="hover:scale-150 transition-all duration-100s ease-in-out"
            >
              <Image
                src="/images/youtube.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>
            <Link
              href="https://www.tiktok.com/@go_left_oficial"
              target="_blank"
              className="hover:scale-150 transition-all duration-100s ease-in-out"
            >
              <Image
                src="/images/tiktok.svg"
                alt="Facebook"
                width={30}
                height={30}
              />
            </Link>

            <button
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-md bg-white px-6 py-1.5 text-sm font-semibold text-red shadow-sm hover-bg-red hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:outline outline-2 outline-white"
            >
              Donate
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
