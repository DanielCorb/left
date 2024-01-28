"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface FormData {
  username: string;
  gender: string;
  // birthDay: string;
  // birthMonth: string;
  // birthYear: string;
  birth: string;
  email: string;
  password: string;
  confirmPassword: string;
  subscribe: boolean;
}

interface FormErrors {
  username?: string;
  gender?: string;
  // birthDay?: string;
  // birthMonth?: string;
  // birthYear?: string;
  birth?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

export default function Register() {
  const [errors, setErrors] = useState<FormErrors>({});

  const [startDate, setStartDate] = useState<Date>();

  const [formData, setFormData] = useState<FormData>({
    username: "",
    gender: "",
    // birthDay: "",
    // birthMonth: "",
    // birthYear: "",
    birth: "",
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Reset errors for the current field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Perform validation
    const newErrors: FormErrors = {};
    if (!formData.username.trim()) {
      newErrors.username = "Numele de utilizator este obligatoriu.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Adresa de email este obligatorie.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Adresa de email nu este validă.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Parola este obligatorie.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Parola trebuie să conțină cel puțin 8 caractere.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Parolele nu se potrivesc.";
    }

    // Set errors and handle submission logic
    if (Object.keys(newErrors).length === 0) {
      // No errors, perform form submission logic
      console.log("Form submitted:", formData);
    } else {
      // Errors found, update state
      setErrors(newErrors);
    }
  };

  const maxDate = subYears(new Date(), 14);

  return (
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
        <div className="flex space-x-2 w-full">
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-white">
              Data nașterii
              <InformationCircleIcon
                className="w-6 h-6 ml-1 inline-block"
                title="Trebuie să ai cel puțin 14 ani pentru a te putea înregistra."
              />
            </label>

            <DatePicker
              selected={startDate}
              onChange={(date: any) => setStartDate(date)}
              maxDate={maxDate}
              dateFormat="dd/MM/yyyy"
              placeholderText="Zi/Luna/An"
              className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 p-2 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500 w-full"
            />
          </div>
          <div className="w-full">
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
          {/* <input
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
        /> */}
        </div>
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
      <h3 className="text-sm text-gray-100">
        Creează-ți un cont și beneficiezi instant de posibilitatea de a comenta
        la articole și campanii. Personalizează-ți profilul pentru a participa
        activ la campaniile noastre.
      </h3>
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
      {errors.username && <p className="text-red-500">{errors.username}</p>}
      {errors.email && <p className="text-red-500">{errors.email}</p>}
      {errors.password && <p className="text-red-500">{errors.password}</p>}
      {errors.confirmPassword && (
        <p className="text-red-500">{errors.confirmPassword}</p>
      )}
    </form>
  );
}
