"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const { theme } = useTheme();

  const gradient =
    theme === "dark"
      ? "from-emerald-800 via-emerald-700 to-green-800"
      : "from-green-400 via-emerald-500 to-green-600";

  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`relative overflow-hidden p-10 md:p-16 rounded-3xl bg-gradient-to-br ${gradient} text-white shadow-sm transition-colors`}
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative max-w-3xl">
        <h1 className="mb-4 text-4xl md:text-5xl font-bold tracking-tight drop-shadow-sm">
          Track your expenses easily
        </h1>

        <p className="text-base md:text-lg leading-relaxed text-white/90">
          Add your spending, group by category, and visualize your finances
          clearly.
        </p>

        <div className="mt-8">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-green-700 hover:bg-white/90 dark:bg-zinc-800 dark:text-white dark:hover:bg-zinc-700 transition"
          >
            <Link href="/add">Get Started</Link>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
