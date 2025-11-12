export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-500">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-gray-700">Expense Manager</span>.
          All rights reserved.
        </p>
        <div className="flex gap-4 mt-4 sm:mt-0">
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            TailwindCSS
          </a>
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            Next.js
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
