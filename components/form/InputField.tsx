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
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm
          placeholder:text-gray-400 focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:ring-offset-1
          transition-colors duration-150 ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : ""
          }`}
      />
      {error && (
        <p className="text-xs text-red-500 font-medium mt-0.5">
          {error.message}
        </p>
      )}
    </div>
  );
}
