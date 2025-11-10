"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Expense = {
  id: string;
  amount: number;
  category: string;
  description?: string;
  date: string;
};

type Store = {
  expenses: Expense[];
  addExpense: (exp: Omit<Expense, "id">) => void;
  clearExpenses: () => void;
};

export const useExpensesStore = create<Store>()(
  persist(
    (set) => ({
      expenses: [],
      addExpense: (exp) =>
        set((state) => ({
          expenses: [...state.expenses, { ...exp, id: Date.now().toString() }],
        })),
      clearExpenses: () => set({ expenses: [] }),
    }),
    { name: "expenses-storage" }
  )
);
