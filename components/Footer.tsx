export default function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background/80 backdrop-blur-sm transition-colors">
      <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto px-6 py-8 text-sm text-muted-foreground">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">Expense Manager</span>.
          All rights reserved.
        </p>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            TailwindCSS
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            Next.js
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
