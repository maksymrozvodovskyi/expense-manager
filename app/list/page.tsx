import ExpenseTable from "@/components/ExpenseList";
import PageWrapper from "@/components/PageWrapper";

export default function ExpensesListPage() {
  return (
    <PageWrapper>
      <main className="max-w-5xl mx-auto px-6 mt-12">
        <section className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6">
            Expenses Overview
          </h1>
          <ExpenseTable />
        </section>
      </main>
    </PageWrapper>
  );
}
