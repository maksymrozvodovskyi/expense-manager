"use client";

import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useExpensesStore } from "@/lib/store/useExpensesStore";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExpensePie() {
  const expenses = useExpensesStore((s) => s.expenses);

  if (expenses.length === 0)
    return (
      <div className="bg-white rounded-xl shadow p-6 text-gray-500 text-center">
        No data for chart yet.
      </div>
    );

  const grouped = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {} as Record<string, number>);

  const data = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: "Expenses",
        data: Object.values(grouped),
        backgroundColor: [
          "#36A2EB",
          "#FF6384",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "bottom" as const },
      title: { display: true, text: "Expenses by Category" },
    },
  };

  return (
    <div className="bg-white rounded-xl shadow p-6 flex justify-center">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px]">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
