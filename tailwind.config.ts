import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      colors: {
        // tu paleta
        primary: {
          DEFAULT: "#AD6CD9", // tono principal
          light: "#C2D4C8", // variante clara
          dark: "#7B51A6", // variante oscura
          foreground: "#F8F8F8", // texto sobre primary
        },
        secondary: {
          DEFAULT: "#0D1440",
          foreground: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#ECC165",
          foreground: "#0D1440",
        },
        muted: {
          DEFAULT: "#C2D4C8",
          foreground: "#0D1440",
        },
        light: {
          DEFAULT: "#F8F8F8",
          foreground: "#0D1440",
        },
        // si usas variables CSS para otros colores:
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-slow": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse-slow 4s ease-in-out infinite",
      },
      backgroundImage: {
        "cosmic-gradient":
          "linear-gradient(to right, #7B51A6, #AD6CD9, #ECC165)",
        "card-gradient":
          "linear-gradient(110.51deg, #D3BAE4 -17.44%, #F8F8F8 44.52%, #7B51A6 141.59%)",
        "courses-gradient": "linear-gradient(180deg, #FFFFFF 0%, #D3BAE4 80%)",
        "higthlight-gradient": "linear-gradient(180deg, #FFFFFF 0%, #AD6CD9 80%, #7B51A6 101%)",

        "star-pattern":
          "radial-gradient(circle, rgba(236,193,101,0.15) 1px, transparent 1px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
