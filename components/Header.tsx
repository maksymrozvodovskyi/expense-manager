import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 tracking-tight hover:text-green-600 transition-colors"
        >
          Expense Manager
        </Link>

        <nav className="flex gap-6 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Dashboard
          </Link>
          <Link href="/add" className="hover:text-green-600 transition-colors">
            Add Expense
          </Link>
          <Link href="/list" className="hover:text-green-600 transition-colors">
            Expenses List
          </Link>
        </nav>
      </div>
    </header>
  );
}
