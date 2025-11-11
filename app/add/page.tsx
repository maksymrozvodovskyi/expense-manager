import ExpenseForm from "@/components/form/ExpenseForm";

export default function AddPage() {
  return (
    <section className="flex justify-center mt-12 px-4">
      <div className="w-full max-w-xl bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-sm p-8">
        <header className="mb-6">
          <h1 className="text-2xl font-semibold text-gray-900 tracking-tight">
            Add Expense
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Fill in the details below to record a new expense.
          </p>
        </header>

        <div className="border-t border-gray-100 mb-6" />

        <ExpenseForm />
      </div>
    </section>
  );
}
