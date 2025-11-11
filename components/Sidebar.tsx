import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-56 bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="mb-8">
        <div className="text-2xl font-bold text-green-600">💸 Expense</div>
        <p className="text-xs text-gray-500 mt-1">Simple personal budget</p>
      </div>

      <nav className="flex flex-col gap-2 text-sm">
        <Link href="/" className="px-3 py-2 rounded hover:bg-gray-50">
          Dashboard
        </Link>
        <Link href="/add" className="px-3 py-2 rounded hover:bg-gray-50">
          Add Expense
        </Link>
        <Link href="/list" className="px-3 py-2 rounded hover:bg-gray-50">
          Expenses
        </Link>
      </nav>
    </aside>
  );
}
