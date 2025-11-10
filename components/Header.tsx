import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow p-4 mb-6">
      <nav className="flex gap-4 text-sm font-medium text-gray-700">
        <Link href="/" className="hover:text-blue-600">
          Dashboard
        </Link>
        <Link href="/add" className="hover:text-blue-600">
          Add Expense
        </Link>
        <Link href="/list" className="hover:text-blue-600">
          Expenses List
        </Link>
      </nav>
    </header>
  );
}
