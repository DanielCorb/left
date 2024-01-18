"use client";
import { UserIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

export default function LoginBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setIsLogin(true);
    setIsRegister(false);
  };

  return (
    <div className="sticky top-0 z-20 bg-red shadow-md">
      <div className="flex mx-auto max-w-screen-xl justify-between items-center px-3 py-2">
        <h2 className="text-lg m-0 text-white">Alatura-te LEFT &gt;&gt;&gt;</h2>
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
