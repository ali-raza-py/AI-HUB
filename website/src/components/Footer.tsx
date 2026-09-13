export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#071018]/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <div className="text-sm text-[#8da6b2]">
            <span className="font-semibold text-[#dce8f0]">AI-HUB</span> — a clearer way to navigate AI development.
          </div>
          <div className="text-xs text-[#66808c]">
            Public registry · React · TypeScript · Tailwind CSS
          </div>
      </div>
    </footer>
  )
}
