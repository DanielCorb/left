import Image from "next/image";
import Logo from "public/images/logo.svg";

export default function Login({
  isLogin,
  isRegister,
  setIsModalOpen,
}: {
  isLogin: boolean;
  isRegister: boolean;
  setIsModalOpen: boolean;
}) {
  return (
    <section
      className="fixed top-0 right-0 bottom-0 left-0"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="fixed w-full h-full opacity-20 bg-black"
        onClick={() => setIsModalOpen(false)}
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full m-auto rounded-3xl md:mt-0 sm:max-w-md xl:p-0 bg-red shadow-md shadow-slate-950">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" action="#">
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Your email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-white">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className=" border sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    className="w-4 h-4 border rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 border-gray-600 focus:ring-primary-600 ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label className="text-white">Remember me</label>
                </div>
              </div>
              <a
                href="#"
                className="text-sm font-medium text-primary-600 hover:underline text-primary-500 text-white"
              >
                Forgot password?
              </a>
            </div>
            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-primary-600 hover:bg-primary-700 focus:ring-primary-800 text-white"
            >
              Sign in
            </button>
            <p className="text-sm font-light text-white">
              Don’t have an account yet?{" "}
              <a
                href="#"
                className="text-white font-medium text-primary-600 hover:underline text-primary-500"
              >
                Sign up
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
