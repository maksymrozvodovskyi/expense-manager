"use client";

import { motion } from "framer-motion";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { useExpensesStore } from "@/lib/store/useExpensesStore";
import { useTheme } from "next-themes";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

export default function ExpensePie() {
  const expenses = useExpensesStore((s) => s.expenses);
  const { theme } = useTheme();

  if (expenses.length === 0)
    return (
      <div className="bg-card border border-border rounded-2xl shadow-sm p-8 text-muted-foreground text-center backdrop-blur-sm transition-colors">
        No data for chart yet.
      </div>
    );

  const grouped = expenses.reduce((acc, e) => {
    acc[e.category] = (acc[e.category] || 0) + e.amount;
    return acc;
  }, {} as Record<string, number>);

  const lightColors = [
    "#22C55E",
    "#3B82F6",
    "#F59E0B",
    "#EC4899",
    "#8B5CF6",
    "#F97316",
  ];

  const darkColors = [
    "#4ADE80",
    "#60A5FA",
    "#FBBF24",
    "#F472B6",
    "#A78BFA",
    "#FB923C",
  ];

  const data = {
    labels: Object.keys(grouped),
    datasets: [
      {
        data: Object.values(grouped),
        backgroundColor: theme === "dark" ? darkColors : lightColors,
        borderColor: theme === "dark" ? "#1E1E1E" : "#FFFFFF",
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: theme === "dark" ? "#E5E7EB" : "#374151",
        },
      },
      title: {
        display: true,
        text: "Expenses by Category",
        color: theme === "dark" ? "#E5E7EB" : "#111827",
        font: { size: 14, weight: "bold" },
      },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-card border border-border rounded-2xl shadow-sm p-8 flex flex-col items-center backdrop-blur-sm transition-colors"
    >
      <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px]">
        <Pie data={data} options={options} />
      </div>
      <p className="text-xs text-muted-foreground mt-4">
        Showing total by category
      </p>
    </motion.section>
  );
}
