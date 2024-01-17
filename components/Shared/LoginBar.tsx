"use client";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

export default function LoginBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleModal = (option: string) => {
    setIsMenuOpen(false);
    setIsModalOpen(true);
    if (option === "Login") {
      setIsLogin(true);
      setIsRegister(false);
    } else {
      setIsLogin(false);
      setIsRegister(true);
    }
  };

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
            <div className="absolute top-8 right-1 bg-red border-2 border-red-400 shadow-inner rounded-md">
              <div className="flex flex-col bg-red w-max">
                <p
                  className="hover:bg-red-400 text-white text-base p-2 px-4 cursor-pointer"
                  onClick={() => handleModal("Register")}
                >
                  Conectează-te
                </p>
                <p
                  className="hover:bg-red-400 text-white text-base p-2 px-4 cursor-pointer"
                  onClick={() => handleModal("Login")}
                >
                  Crează cont
                </p>
              </div>
            </div>
          )}

          {isModalOpen && (
            <Login
              isLogin={isLogin}
              isRegister={isRegister}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}
