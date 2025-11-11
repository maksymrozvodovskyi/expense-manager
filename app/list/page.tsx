import ExpenseTable from "@/components/ExpenseTable";
import PageWrapper from "@/components/PageWrapper";

export default function ExpensesListPage() {
  return (
    <PageWrapper>
      <main className="max-w-5xl mx-auto px-6 mt-12">
        <section className="bg-card border border-border rounded-2xl shadow-sm p-8 backdrop-blur-sm transition-colors">
          <h1 className="text-2xl font-semibold text-foreground tracking-tight mb-6">
            Expenses Overview
          </h1>
          <ExpenseTable />
        </section>
      </main>
    </PageWrapper>
  );
}
