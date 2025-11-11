export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 via-emerald-500 to-emerald-600 text-white shadow-sm p-10 md:p-16">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

      <div className="relative max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 drop-shadow-sm">
          Track your expenses easily
        </h1>
        <p className="text-base md:text-lg text-emerald-50 leading-relaxed">
          Add your spending, group by category, and visualize where your money
          goes — all in one elegant dashboard.
        </p>

        <div className="mt-8">
          <a
            href="/add"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-green-700 font-medium rounded-lg shadow-sm hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-white/60 transition"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
