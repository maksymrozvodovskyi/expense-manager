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
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <select
        {...register}
        className={`w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm
          focus:border-green-500 focus:ring-2 focus:ring-green-200 focus:ring-offset-1 transition-colors duration-150
          ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-red-100"
              : ""
          }`}
      >
        {children}
      </select>
      {error && (
        <p className="text-xs text-red-500 font-medium mt-0.5">
          {error.message}
        </p>
      )}
    </div>
  );
}
