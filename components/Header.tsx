import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/70 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold text-foreground transition-colors hover:text-primary"
        >
          Expense Manager
        </Link>

        <div className="flex items-center gap-5">
          <nav className="flex gap-6 text-sm font-medium text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Dashboard
            </Link>
            <Link href="/add" className="transition-colors hover:text-primary">
              Add Expense
            </Link>
            <Link href="/list" className="transition-colors hover:text-primary">
              Expenses List
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
