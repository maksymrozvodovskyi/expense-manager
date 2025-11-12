import ExpenseTable from "@/components/ExpenseTable";
import PageWrapper from "@/components/PageWrapper";

export default function ExpensesListPage() {
  return (
    <PageWrapper>
      <section className="p-8 border border-border rounded-2xl bg-card shadow-sm backdrop-blur-sm transition-colors">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
          Expenses Overview
        </h1>
        <ExpenseTable />
      </section>
    </PageWrapper>
  );
}
