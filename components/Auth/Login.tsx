"use client";
import React from "react";

export default function Login() {
  return (
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
  );
}
