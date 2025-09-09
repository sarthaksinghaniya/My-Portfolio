/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          green: '#39FF14',
        },
        brand: {
          blue: '#0f172a',
          purple: '#6d28d9',
        }
      },
      fontFamily: {
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        gradientAI: 'linear-gradient(135deg, #0ea5e9 0%, #7c3aed 50%, #22d3ee 100%)',
      }
    },
  },
  plugins: [],
}
