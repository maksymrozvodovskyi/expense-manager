"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-500 to-emerald-600 text-white shadow-sm p-10 md:p-16"
    >
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      <div className="relative max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-sm">
          Track your expenses easily
        </h1>
        <p className="text-base md:text-lg text-emerald-50 leading-relaxed">
          Add your spending, group by category, and visualize your finances
          clearly.
        </p>
        <div className="mt-8">
          <a
            href="/add"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-green-700 font-medium rounded-lg shadow-sm hover:bg-green-50 focus:ring-2 focus:ring-white/60 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </motion.section>
  );
}
