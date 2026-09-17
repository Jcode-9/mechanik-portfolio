import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: { apex: { ink: '#050505', panel: '#0b0b0b', line: '#232323', red: '#ff3b18', orange: '#ff5a1f' } },
      fontFamily: { sans: ['var(--font-apex)', 'Arial', 'sans-serif'], display: ['var(--font-apex-display)', 'Arial Narrow', 'sans-serif'] },
      boxShadow: { glow: '0 0 36px rgba(255, 59, 24, 0.2)' },
    },
  },
  plugins: [],
};

export default config;
