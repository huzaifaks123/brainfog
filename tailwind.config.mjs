/** @type {import('tailwindcss').Config} */
import lineClamp from '@tailwindcss/line-clamp';
const defaultTheme = require('tailwindcss/defaultTheme');

export default {
  content: [
    "./index.html",
    "./src/**/*.{mjs,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        hero: {
          bg: '#0A1931',
          text: '#FFFFFF',
          'accent-orange': '#FF7A59',
          'accent-purple': '#BF7EFF',
          'accent-yellow': '#FFD700',
          'bg-darker': '#081427',
        },
        service: {
          1: '#EC6B54',
          2: '#F8D353',
          3: '#23B5D3',
          4: '#A879F6',
          5: '#1DBFA0',
        },
        testimonial: {
          bg: '#28282B',
          text: '#FFFFFF',
          'card-bg': '#3A3A3D',
        },
        joinTeam: {
          box: {
            bg: '#2A60C3',
            text: '#FFFFFF',
          }
        },
        textDark: '#2d3748',
        textLight: '#FFFFFF',
        textMedium: '#5a677d',
        backgroundLight: '#FFFFFF',
        backgroundMediumLight: '#f7f9fc',
        borderLight: '#e8eaf0',
      },
      fontFamily: {
        title: ['Unbounded', ...defaultTheme.fontFamily.sans],
        body: ['Ubuntu Sans', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        xs: '8px',
        sm: '15px',
        md: '20px',
        lg: '30px',
        xl: '40px',
        xxl: '60px',
      },
      borderRadius: {
        sm: '6px',
        md: '10px',
        lg: '16px',
        xl: '25px',
        pill: '50px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.06)',
        md: '0 5px 15px rgba(0,0,0,0.08)',
        lg: '0 10px 25px rgba(0,0,0,0.1)',
        'hero-cta': '0 4px 15px rgba(255, 122, 89, 0.3)',
        'hero-cta-hover': '0 6px 20px rgba(191, 126, 255, 0.35)',
        'contact-btn': '0 3px 8px rgba(0,0,0,0.1)',
        'contact-btn-hover': '0 5px 12px rgba(255, 122, 89, 0.3)',
        'join-team-card': '0 10px 25px rgba(42, 96, 195, 0.25)',
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
        },
      },
      maxWidth: {
        'container': '1140px',
      },
      animation: {
        slideInUp: 'slideInUp 0.5s ease-out forwards',
        scrollX: 'scrollX 30s linear infinite',
      },
      keyframes: {
        slideInUp: {
          from: { transform: 'translateY(100%)', opacity: '0' },
          to: { transform: 'translateY(0)', opacity: '1' },
        },
        scrollX: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [lineClamp],
};
