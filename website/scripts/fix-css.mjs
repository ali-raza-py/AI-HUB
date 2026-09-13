import { writeFileSync } from 'node:fs';

const content = `@import "tailwindcss";

@theme {
  --font-sans: 'Inter', ui-sans-serif, system-ui, sans-serif;
  --font-mono: 'JetBrains Mono', ui-monospace, monospace;
  --color-accent: oklch(0.66 0.16 268);
  --color-accent-2: oklch(0.58 0.18 268);
}

* { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body {
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  min-height: 100vh;
  background-color: #0b0d12;
  color: #e2e8f0;
}
html.light body {
  background-color: #fafafa;
  color: #1e293b;
}
::selection { background-color: oklch(0.66 0.16 268); color: white; }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: #2a3040; border-radius: 4px; }
::-webkit-scrollbar-thumb:hover { background: #3a4256; }
html.light ::-webkit-scrollbar-thumb { background: #cbd5e1; }
:focus-visible { outline: 2px solid oklch(0.66 0.16 268); outline-offset: 2px; }
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
}
code, pre, .mono { font-family: var(--font-mono); }

@keyframes aihub-in {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes aihub-shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
`;

writeFileSync('C:/Users/HP/AI-HUB/website/src/index.css', content);
console.log('Written', content.length, 'bytes');
