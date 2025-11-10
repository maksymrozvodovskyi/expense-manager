"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
  children: React.ReactNode;
};

export default function SelectField({
  label,
  register,
  error,
  children,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        {...register}
        className={`border p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-200 ${
          error ? "border-red-400" : ""
        }`}
      >
        {children}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
