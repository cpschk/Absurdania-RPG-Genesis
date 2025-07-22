import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        body: ['"Space Grotesk"', 'sans-serif'],
        headline: ['"Lilita One"', 'cursive'],
        code: ['monospace'],
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      textShadow: {
        'neon-yellow': '0 0 5px #fef08a, 0 0 10px #fef08a, 0 0 20px #fde047, 0 0 30px #fde047',
      },
      dropShadow: {
        'glow-red': '0 0 15px rgba(252, 165, 165, 0.7)',
        'glow-blue': '0 0 15px rgba(147, 197, 253, 0.7)',
        'glow-green': '0 0 15px rgba(110, 231, 183, 0.7)',
        'glow-purple': '0 0 15px rgba(216, 180, 254, 0.7)',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        heartbeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.15)' },
          '28%': { transform: 'scale(1.15)' },
          '42%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(1)' },
        },
        'glitch-before': {
          '0%, 20%': { clipPath: 'inset(99% 0 0 0)' },
          '1%': { clipPath: 'inset(21% 0 68% 0)' },
          '2%': { clipPath: 'inset(8% 0 89% 0)' },
          '3%': { clipPath: 'inset(58% 0 29% 0)' },
          '4%': { clipPath: 'inset(25% 0 11% 0)' },
          '5%': { clipPath: 'inset(84% 0 16% 0)' },
          '6%': { clipPath: 'inset(21% 0 46% 0)' },
          '7%': { clipPath: 'inset(78% 0 11% 0)' },
          '8%': { clipPath: 'inset(18% 0 47% 0)' },
          '9%': { clipPath: 'inset(1% 0 71% 0)' },
          '10%': { clipPath: 'inset(94% 0 2% 0)' },
          '11%': { clipPath: 'inset(34% 0 32% 0)' },
          '12%': { clipPath: 'inset(98% 0 1% 0)' },
          '13%': { clipPath: 'inset(28% 0 63% 0)' },
          '14%': { clipPath: 'inset(63% 0 22% 0)' },
          '15%': { clipPath: 'inset(19% 0 46% 0)' },
          '16%': { clipPath: 'inset(97% 0 2% 0)' },
          '17%': { clipPath: 'inset(59% 0 20% 0)' },
          '18%': { clipPath: 'inset(7% 0 82% 0)' },
          '19%': { clipPath: 'inset(77% 0 12% 0)' },
          '20%': { clipPath: 'inset(3% 0 95% 0)' },
          '21%, 100%': { clipPath: 'inset(0 0 0 0)' },
        },
        'glitch-after': {
          '0%, 20%': { clipPath: 'inset(3% 0 95% 0)' },
          '1%': { clipPath: 'inset(77% 0 12% 0)' },
          '2%': { clipPath: 'inset(7% 0 82% 0)' },
          '3%': { clipPath: 'inset(59% 0 20% 0)' },
          '4%': { clipPath: 'inset(97% 0 2% 0)' },
          '5%': { clipPath: 'inset(19% 0 46% 0)' },
          '6%': { clipPath: 'inset(63% 0 22% 0)' },
          '7%': { clipPath: 'inset(28% 0 63% 0)' },
          '8%': { clipPath: 'inset(98% 0 1% 0)' },
          '9%': { clipPath: 'inset(34% 0 32% 0)' },
          '10%': { clipPath: 'inset(94% 0 2% 0)' },
          '11%': { clipPath: 'inset(1% 0 71% 0)' },
          '12%': { clipPath: 'inset(18% 0 47% 0)' },
          '13%': { clipPath: 'inset(78% 0 11% 0)' },
          '14%': { clipPath: 'inset(21% 0 46% 0)' },
          '15%': { clipPath: 'inset(84% 0 16% 0)' },
          '16%': { clipPath: 'inset(25% 0 11% 0)' },
          '17%': { clipPath: 'inset(58% 0 29% 0)' },
          '18%': { clipPath: 'inset(8% 0 89% 0)' },
          '19%': { clipPath: 'inset(21% 0 68% 0)' },
          '20%': { clipPath: 'inset(99% 0 0 0)' },
          '21%, 100%': { clipPath: 'inset(0 0 0 0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 8s ease-in-out infinite',
        heartbeat: 'heartbeat 1s ease-in-out infinite',
        'glitch-before': 'glitch-before var(--before-duration) infinite linear alternate-reverse',
        'glitch-after': 'glitch-after var(--after-duration) infinite linear alternate-reverse',
      },
    },

  },
  plugins: [
    require('tailwindcss-animate'),
    function ({ addUtilities, theme }: { addUtilities: any, theme: any }) {
      const newUtilities = {
        '.text-shadow-neon-yellow': {
          textShadow: theme('textShadow.neon-yellow'),
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
} satisfies Config;
