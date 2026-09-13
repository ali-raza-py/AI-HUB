export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-zinc-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-zinc-500">
            AI Hub — AI Developer Tools, Organized.
          </div>
          <div className="text-xs text-zinc-600">
            Data sourced from the public AI developer tools registry. Built with React, TypeScript, Tailwind CSS.
          </div>
        </div>
      </div>
    </footer>
  )
}
