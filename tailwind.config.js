/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'yellow': '#FFE925',
        'blue': '#2563EB',
        'gray': '#475569',
        'red': '#FF0F0F',
        'green': '#22c55e',
        'ligthBlue':'#0ea5e9',
        'purple':'#a21caf',
        'orange':'#f97316'
      },
      fontFamily: {
        'title': ['Libre Franklin','sans-serif'],
        'subtitle': ['Merriweather Sans', 'sans-serif'],
        'paragraph': ['Numans', 'sans-serif']
      },
      backgroundImage: {
        'hero': "url('https://img.freepik.com/vector-premium/fondo-vector-monocromo-blanco-abstracto-folleto-diseno-folleto-sitio-web-fondo-pantalla-blanco-geometrico-pagina-inicio-presentacion-certificado_249611-6006.jpg?w=900')",
      },
    },
  },
  plugins: [],
}

