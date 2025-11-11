"use client";

import { useExpensesStore } from "@/lib/store/useExpensesStore";

export default function ExpenseTable() {
  const { expenses, clearExpenses } = useExpensesStore();

  if (expenses.length === 0)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="bg-white/80 backdrop-blur-sm border border-gray-200 px-6 py-4 rounded-xl text-gray-600 shadow-sm text-center">
          No expenses yet.
        </p>
      </div>
    );

  return (
    <section className="flex justify-center items-start mt-12">
      <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 tracking-tight">
            Expenses List
          </h2>
          <button
            onClick={clearExpenses}
            className="text-sm text-red-500 font-medium hover:text-red-600 focus:outline-none focus:ring-1 focus:ring-red-300 rounded-md px-2 py-1 transition"
          >
            Clear All
          </button>
        </div>

        <div className="overflow-hidden rounded-xl border border-gray-200">
          <table className="w-full text-sm text-gray-800">
            <thead className="bg-gray-50 text-gray-700 font-medium border-b border-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Category</th>
                <th className="px-4 py-2 text-left">Description</th>
                <th className="px-4 py-2 text-right">Amount ($)</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-100">
              {expenses.map((e) => (
                <tr key={e.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2">{e.date}</td>
                  <td className="px-4 py-2">{e.category}</td>
                  <td className="px-4 py-2 text-gray-600">
                    {e.description || "—"}
                  </td>
                  <td className="px-4 py-2 text-right font-medium text-gray-900">
                    ${e.amount.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 text-right mt-3">
          Total items: {expenses.length}
        </p>
      </div>
    </section>
  );
}
