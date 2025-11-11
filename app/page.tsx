import Hero from "@/components/Hero";
import ExpensePie from "@/components/ExpensePie";

export default function HomePage() {
  return (
    <main className="max-w-6xl mx-auto mt-12 px-6 space-y-10">
      <Hero />

      <section className="grid gap-8 md:grid-cols-2">
        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
            Quick Start
          </h3>
          <p className="text-gray-600 leading-relaxed text-sm">
            Add a few expenses to see your spending overview by category.
            Monitor how much you spend on food, transport, and more.
          </p>

          <div className="mt-4">
            <a
              href="/add"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition"
            >
              Add Expense
            </a>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8">
          <ExpensePie />
        </div>
      </section>
    </main>
  );
}
