import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="bg-background/70 backdrop-blur-sm border-b border-border sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground hover:text-primary transition-colors"
        >
          Expense Manager
        </Link>

        <div className="flex items-center gap-5">
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="hover:text-primary transition">
              Dashboard
            </Link>
            <Link href="/add" className="hover:text-primary transition">
              Add Expense
            </Link>
            <Link href="/list" className="hover:text-primary transition">
              Expenses List
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
