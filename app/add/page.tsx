import ExpenseForm from "@/components/form/ExpenseForm";
import PageWrapper from "@/components/PageWrapper";

export default function AddPage() {
  return (
    <PageWrapper>
      <section className="flex justify-center mt-12 px-4">
        <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight mb-6">
            Add Expense
          </h1>
          <ExpenseForm />
        </div>
      </section>
    </PageWrapper>
  );
}
