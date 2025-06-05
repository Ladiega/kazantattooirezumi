/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  darkMode: "class", // Habilita dark mode via class (manual)
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Paleta de colores personalizada (estilo Sen japonés)
      colors: {
        // Modo Claro
        washi: "#f5f5f0",    // Fondo claro (papel washi)
        sumi: "#252525",      // Texto principal (tinta sumi)
        
        // Modo Oscuro (invertidos)
        yuki: "#e8e8e8",      // Texto claro (nieve)
        yamabuki: "#f8c630",  // Oro japonés (acento oscuro)
        
        // Colores compartidos
        akebono: "#f19483",   // Rosa amanecer (acento)
        shinobu: "#6b7280",   // Gris neutro (para bordes)
        
        // Colores temáticos japoneses
        beni: "#c33b2b",      // Rojo beni (tradicional)
        ai: "#2c5f9d",        // Azul índigo
      },
      // Fuentes personalizadas (Next.js + Google Fonts)
      fontFamily: {
        sans: ['var(--font-noto-sans)', ...fontFamily.sans],
        serif: ['var(--font-noto-serif-jp)', ...fontFamily.serif],
        mono: ['var(--font-jetbrains-mono)', ...fontFamily.mono],
      },
      // Extensiones adicionales
      boxShadow: {
        'tattoo-card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'tattoo-card-dark': '0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)',
      },
      backgroundImage: {
        'texture-washi': "url('/textures/washi-paper.png')",
        'brush-stroke': "url('/textures/brush-stroke.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // Para estilos de texto avanzados
  ],
} 