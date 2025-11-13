"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

import { useGoalsStore } from "@/lib/store/usegoalsStore";

export default function AnalyticsPage() {
  const { goals } = useGoalsStore();

  const allGoals = [...goals.personal, ...goals.family, ...goals.office];

  const totalSaved = allGoals.reduce((sum, g) => sum + g.current, 0);
  const totalTarget = allGoals.reduce((sum, g) => sum + g.target, 0);
  const totalProgress = totalTarget ? (totalSaved / totalTarget) * 100 : 0;

  const workspaceData = [
    {
      name: "Personal",
      value: goals.personal.reduce((s, g) => s + g.current, 0),
    },
    {
      name: "Family",
      value: goals.family.reduce((s, g) => s + g.current, 0),
    },
    {
      name: "Office",
      value: goals.office.reduce((s, g) => s + g.current, 0),
    },
  ];

  const colors = ["#34d399", "#60a5fa", "#fbbf24"];

  const barData = allGoals.map((g) => ({
    name: g.title,
    progress: Math.min((g.current / g.target) * 100, 100),
  }));

  return (
    <div className="p-8 space-y-10">
      <h1 className="mb-6 text-3xl font-bold">Analytics</h1>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900 shadow">
          <h2 className="text-sm text-gray-500">Total Goals</h2>
          <p className="mt-1 text-3xl font-bold">{allGoals.length}</p>
        </div>

        <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900 shadow">
          <h2 className="text-sm text-gray-500">Total Saved</h2>
          <p className="mt-1 text-3xl font-bold">{totalSaved} грн</p>
        </div>

        <div className="p-5 border rounded-xl bg-white dark:bg-neutral-900 shadow">
          <h2 className="text-sm text-gray-500">Overall Progress</h2>
          <p className="mt-1 text-3xl font-bold">{totalProgress.toFixed(0)}%</p>
        </div>
      </div>

      <div className="p-6 border rounded-xl bg-white dark:bg-neutral-900 shadow">
        <h2 className="mb-4 text-xl font-semibold">Progress by Workspace</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              dataKey="value"
              data={workspaceData}
              cx="50%"
              cy="50%"
              outerRadius={90}
              label
            >
              {workspaceData.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="p-6 border rounded-xl bg-white dark:bg-neutral-900 shadow">
        <h2 className="mb-4 text-xl font-semibold">Goals Progress</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="progress" fill="#4ade80" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
