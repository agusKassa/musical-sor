import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['var(--font-pacifico)', 'cursive'],
      },
      backgroundImage: {
        'gradient-section': 'linear-gradient(to right, hsl(var(--color-primary)) 0%, hsl(var(--color-primary)) 40%, hsl(var(--color-secondary)) 60%, hsl(var(--color-secondary)) 100%)',
        'gradient-section-mobile': 'linear-gradient(to right, hsl(var(--color-primary)) 0%, hsl(var(--color-primary)) 50%, hsl(var(--color-secondary)) 50%, hsl(var(--color-secondary)) 100%)',
      },
      colors: {
        primary: {
          DEFAULT: 'hsl(var(--color-primary))',
          light: 'hsl(var(--color-primary-light))',
          dark: 'hsl(var(--color-primary-dark))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--color-secondary))',
          light: 'hsl(var(--color-secondary-light))',
          dark: 'hsl(var(--color-secondary-dark))',
        },
        background: 'hsl(var(--color-background))',
        foreground: 'hsl(var(--color-foreground))',
        muted: {
          DEFAULT: 'hsl(var(--color-muted))',
          foreground: 'hsl(var(--color-muted-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--color-card))',
          foreground: 'hsl(var(--color-card-foreground))',
        },
        border: 'hsl(var(--color-border))',
        success: 'hsl(var(--color-success))',
        error: 'hsl(var(--color-error))',
        warning: 'hsl(var(--color-warning))',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
};

export default config;
