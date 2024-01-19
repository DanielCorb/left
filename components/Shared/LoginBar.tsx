"use client";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";
import { useEffect } from "react";
import { useWindowSize } from "@uidotdev/usehooks";

export default function LoginBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const { width } = useWindowSize() as { width: number };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsLogin(true);
    setIsRegister(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      if (width > 750) document.body.style.paddingRight = "15px";
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "0";
    }
  }, [isModalOpen]);

  return (
    <div className="sticky top-0 z-20 bg-red shadow-md">
      <div className="flex mx-auto max-w-screen-xl justify-between items-center px-3 py-2">
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSeYj2hqu6AcL9-K0wI2SzupoH-wDxPnIqGeFKC9-mBKGzCVeg/viewform"
          target="_blank"
        >
          <h2 className="text-lg m-0 text-white">
            Alătură-te LEFT &gt;&gt;&gt;
          </h2>
        </Link>
        <div
          onClick={() => {
            setIsModalOpen(!isModalOpen);
          }}
          className="relative"
        >
          <UserIcon className="text-white w-8 cursor-pointer" />
          {isModalOpen && (
            <section
              className="fixed top-0 right-0 bottom-0 left-0"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="fixed w-full h-full opacity-20 bg-black"
                onClick={() => handleClose()}
              />
              <Login
                isLogin={isLogin}
                isRegister={isRegister}
                setIsLogin={setIsLogin}
                setIsRegister={setIsRegister}
              />
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
