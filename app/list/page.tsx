import ExpenseTable from "@/components/ExpenseList";

export default function ExpensesListPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 mt-12">
      <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Expenses Overview
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Review your recorded transactions and track spending by category.
          </p>
        </header>

        <div className="border-t border-gray-100 mb-6" />

        <ExpenseTable />
      </section>
    </main>
  );
}
