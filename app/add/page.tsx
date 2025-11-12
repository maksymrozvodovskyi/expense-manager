import ExpenseForm from "@/components/form/ExpenseForm";
import PageWrapper from "@/components/PageWrapper";

export default function AddPage() {
  return (
    <PageWrapper>
      <section className="flex justify-center mt-12 px-4">
        <div className="w-full max-w-xl p-8 border border-border rounded-2xl bg-card shadow-sm backdrop-blur-sm transition-colors">
          <h1 className="text-2xl font-semibold tracking-tight text-foreground mb-6">
            Add Expense
          </h1>
          <ExpenseForm />
        </div>
      </section>
    </PageWrapper>
  );
}
