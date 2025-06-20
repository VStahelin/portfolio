/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // para arquivos React
  ],
  theme: {
    extend: {
      colors: {
        back: {
          light: "#2D3462", // Azul claro
          DEFAULT: "#282E4F", // Azul
          dark: "#23263A", // Preto
        },
        primary: {
          light: "#FFB3B3", // Vermelho claro
          DEFAULT: "#FF4C58", // Vermelho/Rosa
          dark: "#BF3D4D", // Vermelho escuro
        },
        secondary: {
          light: "#A8B8E2", // Azul claro
          DEFAULT: "#6572CC", // Azul
          dark: "#3F4D8F", // Azul escuro
        },
        tertiary: {
          light: "#424554", // Azul médio
          DEFAULT: "#212336", // Azul escuro
          dark: "#0E0F18", // Azul/cinza muito escuro
        },
        quaternary: {
          light: "#1f2133", // Azul/cinza muito escuro
          DEFAULT: "#151721", // Azul/cinza muito escuro
          dark: "#000000", // Preto
        },
        white: {
          light: "#FFFFFF", // Branco
          DEFAULT: "#FFFFFF", // Branco
          dark: "#f5f5f5", // Branco
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        fadeInUp: {
          from: {
            opacity: "0",
            transform: "translateY(30px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".animation-delay-300": {
          "animation-delay": "300ms",
        },
        ".animation-delay-500": {
          "animation-delay": "500ms",
        },
        ".animation-delay-700": {
          "animation-delay": "700ms",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
