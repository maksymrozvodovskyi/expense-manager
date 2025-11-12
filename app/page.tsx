import Hero from "@/components/Hero";
import ExpensePie from "@/components/ExpensePie";
import PageWrapper from "@/components/PageWrapper";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto mt-12 space-y-10">
        <Hero />

        <section className="grid md:grid-cols-2 gap-8">
          <div className="p-8 border border-border rounded-2xl bg-card shadow-sm backdrop-blur-sm hover:shadow-md transition-shadow duration-200">
            <h3 className="text-lg font-semibold tracking-tight text-foreground mb-2">
              Quick Start
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Add a few expenses to see your spending overview by category.
            </p>
            <div className="mt-4">
              <Button asChild className="w-full sm:w-auto">
                <Link href="/add">Add Expense</Link>
              </Button>
            </div>
          </div>

          <ExpensePie />
        </section>
      </div>
    </PageWrapper>
  );
}
