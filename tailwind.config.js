/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: '#277FD0',
        secondaryBlue: '#6FE1FF',
        backgroundColor: '#EDF6FF',
        textColor: '#2A2A2B',
        inactiveTextColor: '#8B8B8B',
      },
      fontFamily: {
        nats: ["natsReg"],
        lexendPetaLight: ["LexendPetaLight"]
      }
    },
  },
  plugins: [],
}