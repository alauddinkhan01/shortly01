/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    fontFamily: {
      PlusJakarta:['Plus Jakarta Sans', 'sans-serif'],
      Quicksand:['Quicksand', 'sans-serif'],
      josef:['Josefin Slab','josef-slab'],
      alata:['Alata'],
      kode:['Kode Mono'],
      freehand:['Freehand']
    },
    
    extend: {
      colors:{
        alauddin: '#50855e'
      },
      letterSpacing:{
        widest:'.3em'
      }
    },
    darkMode:'class'
  },
  plugins: [
    function({addUtilities}) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display:"none"
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width" : "none"
        }
      }
      addUtilities(newUtilities);
    }
  ],
}

