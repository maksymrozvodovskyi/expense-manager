"use client";

import { FieldError, UseFormRegisterReturn } from "react-hook-form";

type Props = {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
};

export default function InputField({
  label,
  type = "text",
  placeholder,
  register,
  error,
}: Props) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`border p-2 rounded w-full focus:outline-none focus:ring focus:ring-green-200 ${
          error ? "border-red-400" : ""
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
