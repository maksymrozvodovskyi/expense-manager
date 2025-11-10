"use client";

import { useExpensesStore } from "@/lib/store/useExpensesStore";

export default function ExpenseTable() {
  const { expenses, clearExpenses } = useExpensesStore();

  if (expenses.length === 0)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="bg-white border border-gray-300 p-4 rounded text-gray-700 w-[400px] text-center">
          No expenses yet.
        </p>
      </div>
    );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white border border-gray-300 rounded-lg p-4 w-[420px]">
        <div className="flex justify-between items-center mb-3">
          <h2 className="font-semibold text-gray-800 text-lg">Expenses List</h2>
          <button
            onClick={clearExpenses}
            className="text-sm text-red-500 font-medium"
          >
            Clear
          </button>
        </div>

        <table className="w-full text-sm border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-3 py-2 text-left">
                Date
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left">
                Category
              </th>
              <th className="border border-gray-300 px-3 py-2 text-left">
                Description
              </th>
              <th className="border border-gray-300 px-3 py-2 text-right">
                Amount ($)
              </th>
            </tr>
          </thead>

          <tbody>
            {expenses.map((e) => (
              <tr key={e.id}>
                <td className="border border-gray-300 px-3 py-2">{e.date}</td>
                <td className="border border-gray-300 px-3 py-2">
                  {e.category}
                </td>
                <td className="border border-gray-300 px-3 py-2">
                  {e.description || "-"}
                </td>
                <td className="border border-gray-300 px-3 py-2 text-right">
                  ${e.amount.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p className="text-xs text-gray-600 text-right mt-2">
          Total items: {expenses.length}
        </p>
      </div>
    </div>
  );
}
