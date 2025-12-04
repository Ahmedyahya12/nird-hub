/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // Couleur principale violet-rose
        primary: {
          50: "#fdf4f9",
          100: "#fbe8f3",
          200: "#f7d1e7",
          300: "#f0aad4",
          400: "#e678b8",
          500: "#d8499c",
          600: "#c22d7e",
          700: "#a62066",
          800: "#8C3267", // Couleur principale
          900: "#6e2852",
        },
       
        secondary: "#d946a8",      // Rose vif complémentaire
        
        tertiary: "#151030",     // Violet foncé
        accent: "#ff6bcd",         // Rose accent
        

        black:"#050816",
        "white-100": "#fdf9fc",    // Blanc cassé rosé
        
        // Palette violet-rose étendue
        "plum-50": "#fdf5fa",
        "plum-100": "#fae6f2",
        "plum-200": "#f5cde5",
        "plum-300": "#eba5cf",
        "plum-400": "#de6fb0",
        "plum-500": "#c23d8d",
        "plum-600": "#a0276f",
        "plum-700": "#8C3267",     // Base
        "plum-800": "#6b264e",
        "plum-900": "#4d1b38",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #8C326730",
        "card-hover": "0px 40px 140px -10px #8C326750",
        glow: "0 0 20px rgba(140, 50, 103, 0.3)",
        "glow-lg": "0 0 40px rgba(140, 50, 103, 0.5)",
        "glow-pink": "0 0 30px rgba(217, 70, 156, 0.4)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-plum": "linear-gradient(135deg, #8C3267 0%, #a0276f 100%)",
        "gradient-plum-reverse": "linear-gradient(135deg, #c23d8d 0%, #8C3267 100%)",
        "gradient-plum-light": "linear-gradient(135deg, #de6fb0 0%, #8C3267 100%)",
        "gradient-plum-overlay": "linear-gradient(to bottom, rgba(26,13,22,0.8), rgba(26,13,22,0.6), rgba(74,31,58,0.9))",
        "gradient-shimmer": "linear-gradient(90deg, transparent, rgba(140, 50, 103, 0.3), transparent)",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "glow-pulse": {
          "0%, 100%": { 
            boxShadow: "0 0 20px rgba(140, 50, 103, 0.3)",
            opacity: "1"
          },
          "50%": { 
            boxShadow: "0 0 40px rgba(140, 50, 103, 0.6)",
            opacity: "0.8"
          },
        },
      },
    },
  },
  plugins: [],
}