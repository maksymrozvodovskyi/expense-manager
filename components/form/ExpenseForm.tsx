"use client";

import { useForm } from "react-hook-form";
import { useExpensesStore } from "@/lib/store/useExpensesStore";
import InputField from "./InputField";
import SelectField from "./SelectField";

type FormValues = {
  amount: number;
  category: string;
  description?: string;
  date: string;
};

export default function ExpenseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const addExpense = useExpensesStore((s) => s.addExpense);

  const onSubmit = (data: FormValues) => {
    addExpense({
      ...data,
      amount: Number(data.amount),
      description: data.description || "",
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white/80 border border-gray-200 rounded-2xl shadow-sm p-8 grid gap-6 md:grid-cols-2"
    >
      <InputField
        label="Amount"
        type="number"
        placeholder="0.00"
        register={register("amount", {
          required: "Enter valid amount",
          min: { value: 0.01, message: "Must be > 0" },
          valueAsNumber: true,
        })}
        error={errors.amount}
      />

      <SelectField
        label="Category"
        register={register("category", { required: "Select category" })}
        error={errors.category}
      >
        <option value="">Select</option>
        <option>Food</option>
        <option>Transport</option>
        <option>Shopping</option>
        <option>Entertainment</option>
        <option>Other</option>
      </SelectField>

      <InputField
        label="Description"
        placeholder="Optional"
        register={register("description")}
        error={errors.description}
      />

      <InputField
        label="Date"
        type="date"
        register={register("date", { required: "Date is required" })}
        error={errors.date}
      />

      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-green-600 text-white font-medium py-3 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400 focus:ring-offset-1 transition disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : "Add Expense"}
        </button>
      </div>
    </form>
  );
}
