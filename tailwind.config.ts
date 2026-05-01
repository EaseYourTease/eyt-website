import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#22c55e',
        bg: '#020617',
        surface: '#0f172a',
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'neon-cyan': 'linear-gradient(135deg, rgba(34,211,238,0.1) 0%, transparent 50%)',
        'neon-green': 'linear-gradient(135deg, rgba(34,197,94,0.1) 0%, transparent 50%)',
        'grid-pattern': 'linear-gradient(to right, rgba(34,211,238,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(34,211,238,0.03) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
      },
      boxShadow: {
        'neon-cyan': '0 0 20px rgba(34,211,238,0.3), 0 0 40px rgba(34,211,238,0.1)',
        'neon-green': '0 0 20px rgba(34,197,94,0.3), 0 0 40px rgba(34,197,94,0.1)',
        'glass': '0 8px 32px rgba(0,0,0,0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
