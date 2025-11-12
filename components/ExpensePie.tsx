"use client";

import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useExpensesStore } from "@/lib/store/useExpensesStore";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExpensePie() {
  const expenses = useExpensesStore((s) => s.expenses);

  if (expenses.length === 0)
    return (
      <div className="bg-white/80 border border-gray-200 rounded-2xl shadow-sm p-8 text-gray-500 text-center">
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
        data: Object.values(grouped),
        backgroundColor: [
          "#22C55E",
          "#3B82F6",
          "#F59E0B",
          "#EC4899",
          "#8B5CF6",
          "#F97316",
        ],
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white/80 border border-gray-200 rounded-2xl shadow-sm p-8 flex flex-col items-center"
    >
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
        <Pie data={data} />
      </div>
      <p className="text-xs text-gray-500 mt-4">Showing total by category</p>
    </motion.section>
  );
}
