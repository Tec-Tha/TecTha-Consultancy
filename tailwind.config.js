/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          900: '#080C15',
          800: '#0B1220',
          700: '#121B2E',
          600: '#1B2740',
        },
        ivory: {
          DEFAULT: '#F5F1E8',
          dim: '#E7E1D2',
        },
        signal: {
          DEFAULT: '#E8A33D',
          soft: '#F2C077',
        },
        slateblue: {
          DEFAULT: '#3D5A80',
          light: '#5D7FA3',
        },
        sage: {
          DEFAULT: '#8FA998',
          dim: '#6E8A78',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      maxWidth: {
        content: '1400px',
      },
      transitionTimingFunction: {
        signal: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
}
