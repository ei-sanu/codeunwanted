/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0a0e17',
        'cyber-darker': '#050709',
        'cyber-green': {
          100: '#d7ffed',
          200: '#b3ffdd',
          300: '#84ffcb',
          400: '#4dffc2',
          500: '#00ff9d',
          600: '#00cc7d',
          700: '#00995e',
          800: '#00663e',
          900: '#00331f',
        },
        'cyber-blue': {
          100: '#d0f4ff',
          200: '#a1e9ff',
          300: '#72deff',
          400: '#43d3ff',
          500: '#14c8ff',
          600: '#10a0cc',
          700: '#0c7899',
          800: '#085066',
          900: '#042833',
        },
        'cyber-purple': {
          500: '#7928ca',
          600: '#6020a1',
        }
      },
      fontFamily: {
        'cyber': ['Share Tech Mono', 'monospace'],
        'cyber-heading': ['Orbitron', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      keyframes: {
        'tube-flicker': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 },
          '10%, 30%, 70%, 90%': { opacity: 0.8 },
          '20%, 40%, 60%, 80%': { opacity: 0.92 },
        },
        'scan-line': {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'terminal-typing': {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(0, 255, 157, 0.5), 0 0 15px rgba(0, 255, 157, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 15px rgba(0, 255, 157, 0.8), 0 0 30px rgba(0, 255, 157, 0.5)'
          },
        }
      },
      animation: {
        'tube-flicker': 'tube-flicker 3s linear infinite',
        'scan-line': 'scan-line 10s linear infinite',
        'terminal-typing': 'terminal-typing 3s steps(40, end)',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
};
