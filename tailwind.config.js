/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fondo base (madera oscura del estudio)
        ink: "#0a0a0a",        // Fondo principal oscuro
        coal: "#151515",       // Fondo elevado / tarjetas
        ash: "#1f1f1f",        // Fondo de superficies hover

        // Texto
        yuki: "#f2f0eb",       // Texto claro (nieve)
        fog: "#b3b0a8",        // Texto secundario
        mist: "#6b6a65",       // Texto terciario / apagado

        // Acentos japoneses
        beni: "#c8281a",        // Rojo beni (tradicional) - acento principal
        yamabuki: "#e3b341",   // Oro japonés - acento secundario
        akebono: "#f19483",    // Rosa amanecer
        ai: "#2c5f9d",         // Azul índigo
        washi: "#f5f5f0",      // Papel claro (modo claro)

        // Líneas / bordes
        shinobu: "#2c2c2b",    // Borde oscuro
        ginko: "#3a3a38",      // Borde resaltado
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', ...fontFamily.sans],
        serif: ['var(--font-noto-serif-jp)', ...fontFamily.serif],
        display: ['var(--font-noto-serif-jp)', ...fontFamily.serif],
      },
      boxShadow: {
        'card': '0 1px 0 rgba(255,255,255,0.03) inset, 0 8px 30px rgba(0,0,0,0.35)',
        'card-light': '0 4px 6px -1px rgba(0,0,0,0.08), 0 2px 4px -1px rgba(0,0,0,0.05)',
        'glow-beni': '0 0 0 1px rgba(200,40,26,0.4), 0 0 40px rgba(200,40,26,0.25)',
      },
      backgroundImage: {
        'grain': "url('/textures/grain.png')",
        'radial-beni': 'radial-gradient(circle at 20% 0%, rgba(200,40,26,0.12), transparent 45%)',
        'radial-gold': 'radial-gradient(circle at 80% 100%, rgba(227,179,65,0.08), transparent 45%)',
      },
      letterSpacing: {
        'widest-caps': '0.2em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'ken-burns': 'ken-burns 12s ease-out forwards',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
