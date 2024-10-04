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
          light: "#292A34", // Cinza escuro
          DEFAULT: "#12131b", // Azul/cinza muito escuro
          dark: "#000000", // Preto
        },
        white: {
          light: "#FFFFFF", // Branco
          DEFAULT: "#FFFFFF", // Branco
          dark: "#F0F0F0", // Cinza claro
        },
      },
    },
  },
  plugins: [],
};
