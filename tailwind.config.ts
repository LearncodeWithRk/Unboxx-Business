import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['Poppins', 'sans-serif'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        black: { DEFAULT:"#000000",100:"#000000",200:"#000000",300:"#000000",400:"#000000",500:"#000000",600:"#333333",700:"#666666",800:"#999999",900:"#cccccc" },
        prussian_blue: { DEFAULT:"#14213d",100:"#04070c",200:"#080d19",300:"#0c1425",400:"#101b31",500:"#14213d",600:"#29447e",700:"#3e67bf",800:"#7e99d5",900:"#beccea" },
        orange: { DEFAULT:"#fca311",100:"#362101",200:"#6b4201",300:"#a16402",400:"#d68502",500:"#fca311",600:"#fdb541",700:"#fec871",800:"#fedaa0",900:"#ffedd0" },
        alabaster_grey: { DEFAULT:"#e5e5e5",100:"#2e2e2e",200:"#5c5c5c",300:"#8a8a8a",400:"#b8b8b8",500:"#e5e5e5",600:"#ebebeb",700:"#f0f0f0",800:"#f5f5f5",900:"#fafafa" },
        white: { DEFAULT:"#ffffff",100:"#333333",200:"#666666",300:"#999999",400:"#cccccc",500:"#ffffff",600:"#ffffff",700:"#ffffff",800:"#ffffff",900:"#ffffff" }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
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
        'orbit-1': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'orbit-2': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg)' },
        },
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 0 0 0px hsl(var(--primary)/0.4)',
          },
          '50%': {
            boxShadow: '0 0 8px 3px hsl(var(--primary)/0.7)',
          },
        },
        'float-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0px)' },
        },
        'fade-in-up': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0px)' },
        },
        'premium-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 0 0px hsl(var(--primary) / 0.4)',
            transform: 'scale(1)',
          },
          '50%': {
            boxShadow: '0 0 20px 10px hsl(var(--primary) / 0.1)',
            transform: 'scale(1.05)',
          },
        },
        'premium-float': {
          '0%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          '100%': { transform: 'translateY(0px) rotate(0deg)' },
        },
        'beam-sweep': {
          '0%': { transform: 'rotate(0deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1.5)' },
        },
        'light-sweep': {
          '0%': { transform: 'translateY(-150%)' },
          '50%': { transform: 'translateY(150%)' },
          '100%': { transform: 'translateY(-150%)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'orbit-1': 'orbit-1 40s linear infinite',
        'orbit-2': 'orbit-2 60s linear infinite',
        'pulse-glow': 'pulse-glow 4s infinite ease-in-out',
        'float-in': 'float-in 1s ease-out 1.5s forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'premium-pulse': 'premium-pulse 5s infinite ease-in-out',
        'premium-float': 'premium-float 15s infinite ease-in-out',
        'beam-sweep': 'beam-sweep 90s linear infinite',
        'light-sweep': 'light-sweep 7s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
