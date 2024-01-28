"use client";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import DatePicker from "react-datepicker";
import { subYears } from "date-fns";
import React, { useState } from "react";
import * as Yup from "yup";

interface FormData {
  username: string;
  gender: string;
  birth: Date;
  email: string;
  password: string;
  confirmPassword: string;
  subscribe: boolean;
}

export default function Register() {
  const maxDate = subYears(new Date(), 14);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>({
    username: "",
    gender: "",
    birth: new Date(),
    email: "",
    password: "",
    confirmPassword: "",
    subscribe: false,
  });

  const schema = Yup.object().shape({
    username: Yup.string().required("Numele de utilizator este obligatoriu"),
    gender: Yup.string().required("Genul este obligatoriu"),
    birth: Yup.date()
      .nullable()
      .required("Data nașterii este obligatorie")
      .max(
        maxDate,
        "Trebuie să ai cel puțin 14 ani pentru a te putea înregistra"
      ),
    email: Yup.string()
      .email("Email invalid")
      .required("Email-ul este obligatoriu"),
    password: Yup.string().required("Parola este obligatorie"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    subscribe: Yup.boolean(),
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await schema.validate(formData, { abortEarly: false });
      setErrors({});
    } catch (error) {
      if (error instanceof Yup.ValidationError) {
        const newErrors: Partial<FormData> = {};
        error.inner.forEach((e: any) => {
          newErrors[e.path as keyof FormData] = e.message;
        });
        setErrors(newErrors);
      }
    }
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
      <div className="flex space-x-2 w-full">
        <div className="w-full">
          <label className="block mb-2 text-sm font-medium text-white">
            Nume de utilizator
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleInputChange}
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
            value={formData.gender}
            onChange={handleInputChange}
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
              selected={formData.birth}
              onChange={(date: any) =>
                setFormData({ ...formData, birth: date })
              }
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
              value={formData.email}
              onChange={handleInputChange}
              className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
              placeholder="email@exemple.com"
            />
          </div>
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
            value={formData.password}
            onChange={handleInputChange}
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
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="••••••••"
            className="border border-gray-300 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-white placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {errors.username && (
        <p className="text-white text-sm mt-1">{errors.username}</p>
      )}
      {errors.birth && <p className="text-white text-sm mt-1">dATA</p>}
      {errors.email && (
        <p className="text-white text-sm mt-1">{errors.email}</p>
      )}
      {errors.gender && (
        <p className="text-white text-sm mt-1">{errors.gender}</p>
      )}
      {errors.password && (
        <p className="text-white text-sm mt-1">{errors.password}</p>
      )}

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
          onClick={(e: any) => handleSubmit(e)}
          className="text-red font-semibold bg-white rounded-lg text-sm py-2 px-6"
        >
          Înregistreaază-te
        </button>
      </div>
    </form>
  );
}
