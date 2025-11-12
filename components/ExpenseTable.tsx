"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { useExpensesStore } from "@/lib/store/useExpensesStore";

export default function ExpenseTable() {
  const expenses = useExpensesStore((s) => s.expenses);
  const clearExpenses = useExpensesStore((s) => s.clearExpenses);

  if (expenses.length === 0)
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <p className="px-6 py-4 border border-border rounded-xl bg-card shadow-sm text-center text-muted-foreground backdrop-blur-sm transition-colors">
          No expenses yet.
        </p>
      </div>
    );

  return (
    <section className="flex justify-center items-start mt-12 transition-colors">
      <div className="w-full max-w-3xl p-8 border border-border rounded-2xl bg-card shadow-sm backdrop-blur-sm">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Expenses List
          </h2>
          <Button
            variant="destructive"
            size="sm"
            onClick={clearExpenses}
            className="font-medium"
          >
            Clear All
          </Button>
        </div>

        <div className="overflow-hidden border border-border rounded-xl">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border bg-muted/50">
                <TableHead>Date</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead className="text-right">Amount ($)</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {expenses.map((e) => (
                <TableRow
                  key={e.id}
                  className="hover:bg-muted/40 transition-colors"
                >
                  <TableCell>{e.date}</TableCell>
                  <TableCell>{e.category}</TableCell>
                  <TableCell className="text-muted-foreground">
                    {e.description || "—"}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    ${e.amount.toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <p className="mt-3 text-xs text-right text-muted-foreground">
          Total items: {expenses.length}
        </p>
      </div>
    </section>
  );
}
