import { XMarkIcon } from "@heroicons/react/20/solid";

export default function Login({
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
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full m-auto rounded-3xl md:mt-0 sm:max-w-md xl:p-0 bg-red shadow-md shadow-slate-950">
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
        {isLogin && (
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email / Nume utilizator
              </label>
              <input
                type="text"
                name="usernameOrEmail"
                id="usernameOrEmail"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@exemple.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Parola
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center h-5 cursor-pointer">
                <input
                  id="subscribe"
                  name="subscribe"
                  type="checkbox"
                  className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 border-gray-600 focus:ring-primary-600 ring-offset-gray-800 cursor-pointer"
                />
                <label
                  htmlFor="subscribe"
                  className="ml-3 text-sm text-white cursor-pointer"
                >
                  Tine-mă minte
                </label>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline text-primary-500 text-white"
              >
                Ai uitat parola?
              </a>
            </div>
            <div className="w-fit mx-auto">
              <button
                type="submit"
                className="text-red font-semibold bg-white rounded-lg text-sm py-2 px-6"
              >
                Conecteaza-te
              </button>
            </div>
          </form>
        )}

        {isRegister && (
          <form className="space-y-4 md:space-y-6" action="#">
            <div className="flex space-x-2 w-full">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-white">
                  Nume de utilizator
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white text-black focus:ring-blue-500 placeholder-gray-400 focus:border-blue-500"
                  placeholder="NumeUtilizator"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-white">
                  Gen
                </label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Non-binar"
                />
              </div>
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Data nașterii
              </label>
              <div className="flex space-x-2 w-full">
                <input
                  type="number"
                  name="birthDay"
                  id="birthDay"
                  placeholder="Zi"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <input
                  type="number"
                  name="birthMonth"
                  id="birthMonth"
                  placeholder="Luna"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <input
                  type="number"
                  name="birthYear"
                  id="birthYear"
                  placeholder="An"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 w-full"
                />
              </div>
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Localitate
              </label>
              <input
                type="city"
                name="city"
                id="city"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="Localitate"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="email@exemple.com"
              />
            </div>
            <div className="flex space-x-2 w-full">
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-white">
                  Parolă
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-full">
                <label className="block mb-2 text-sm font-medium text-white">
                  Confirmă parola
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  placeholder="••••••••"
                  className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <input
                id="subscribe"
                name="subscribe"
                type="checkbox"
                className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 border-gray-600 focus:ring-primary-600 ring-offset-gray-800 cursor-pointer"
              />
              <label
                htmlFor="subscribe"
                className="ml-3 text-sm text-white cursor-pointer"
              >
                Doresc să mă abonez la newsletter.
              </label>
            </div>
            <div className="w-fit mx-auto">
              <button
                type="submit"
                className="text-red font-semibold bg-white rounded-lg text-sm py-2 px-6"
              >
                Înregistreaază-te
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
