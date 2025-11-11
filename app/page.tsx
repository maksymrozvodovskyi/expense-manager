import Hero from "@/components/Hero";
import ExpensePie from "@/components/ExpensePie";
import PageWrapper from "@/components/PageWrapper";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto mt-12 space-y-10">
        <Hero />
        <section className="grid gap-8 md:grid-cols-2">
          <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8 hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2 tracking-tight">
              Quick Start
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Add a few expenses to see your spending overview by category.
            </p>
            <div className="mt-4">
              <a
                href="/add"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 focus:ring-2 focus:ring-green-400 transition"
              >
                Add Expense
              </a>
            </div>
          </div>

          <ExpensePie />
        </section>
      </div>
    </PageWrapper>
  );
}
