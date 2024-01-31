import React from "react";
import { Login, Register } from ".";

export default function AuthModal({
  isLogin,
  isRegister,
  setIsLogin,
  setIsRegister,
}: {
  isLogin: boolean;
  isRegister: boolean;
  setIsLogin: (value: boolean) => void;
  setIsRegister: (value: boolean) => void;
}) {
  const handleLoginClick = () => {
    setIsRegister(false);
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsRegister(true);
    setIsLogin(false);
  };

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full m-auto rounded-3xl md:mt-0 sm:max-w-md xl:p-0 bg-red shadow-2xl shadow-slate-800">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <div className="flex items-center my-auto border-2 border-white rounded-2xl">
          <button
            className={`text-xl font-bold py-4 rounded-xl rounded-r-none w-full transition ${
              isLogin ? "bg-gray-50 text-red" : "text-white"
            }`}
            type="button"
            disabled={isLogin}
            onClick={handleLoginClick}
          >
            Conectează-te
          </button>
          <button
            className={`text-xl font-bold py-4 rounded-xl rounded-l-none w-full transition ${
              isRegister ? "bg-gray-50 text-red" : "text-white"
            }`}
            type="button"
            disabled={isRegister}
            onClick={handleRegisterClick}
          >
            Crează cont
          </button>
        </div>
        {isLogin && <Login />}

        {isRegister && <Register />}
      </div>
    </div>
  );
}
