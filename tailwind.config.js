/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#050816',
        panel: '#0c1224',
        line: '#22304d',
        accent: '#5eead4',
        accent2: '#8b5cf6',
        text: '#ecf4ff',
        soft: '#9fb0d0',
      },
      boxShadow: {
        glow: '0 0 60px rgba(94, 234, 212, 0.12)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
