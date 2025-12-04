
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a1929",        // Bleu nuit profond
        secondary: "#008CBA",      
        tertiary: "#1a2332",       // Bleu nuit moyen
        accent: "#00ffcc",   
        primary: {
					100: "#D5F3FF",
					200: "#A6E4FF",
					300: "#76D5FF",
					400: "#3CB8F2",
					500: "#008CBA",
					600: "#00729A",
					700: "#005A7A",
					800: "#00425A",
					900: "#002B3B",
				},     
        "black-100": "#0d1821",    // Noir bleuté
        "black-200": "#050a0f",    // Noir très profond
        "white-100": "#f8fafb",    // Blanc cassé
        "ocean-50": "#e6faf7",     // Ocean très clair
        "ocean-100": "#b3f0e8",    // Ocean clair
        "ocean-200": "#80e7d9",    // Ocean moyen-clair
        "ocean-300": "#4dddc9",    // Ocean moyen
        "ocean-400": "#1ad4ba",    // Ocean moyen-foncé
        "ocean-500": "#00D1B2",    // Ocean (base)
        "ocean-600": "#00a78f",    // Ocean foncé
        "ocean-700": "#007d6b",    // Ocean très foncé
        "ocean-800": "#005448",    // Ocean ultra-foncé
        "ocean-900": "#002a24",    // Ocean presque noir
      },
      boxShadow: {
        card: "0px 35px 120px -15px #00554830",
        "card-hover": "0px 40px 140px -10px #00D1B250",
        glow: "0 0 20px rgba(0, 209, 178, 0.3)",
        "glow-lg": "0 0 40px rgba(0, 209, 178, 0.5)",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/hero.jpg')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-ocean": "linear-gradient(135deg, #00D1B2 0%, #00a78f 100%)",
        "gradient-ocean-reverse": "linear-gradient(135deg, #00a78f 0%, #00D1B2 100%)",
         "gradient-ocean-overlay": "linear-gradient(to bottom, rgba(10,25,41,0.8), rgba(10,25,41,0.6), rgba(13,24,33,0.9))",
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};