/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFA800',
        myGray: 'rgba(231,231,231,0.6)',
        tag: '#1A365D',
        readmore: '#728095'
      }
    }
  },
  plugins: []
}
