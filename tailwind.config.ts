import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gradient-radial': 'radial-gradient(circle, red, blue)',
        'gradient-blue': 'linear-gradient(180deg, #4285F4 0%, #286DE0 100%)',
     }),
     fontFamily: {
      'poppins': ['Poppins', 'sans-serif'], 
      'lato': ['Lato', 'sans-serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans'],
      'figtree': ['Figtree', 'sans']
    },
    colors: {
      'secondary': 'var(--Secondary-Text, #858585)',
      'light-bulma': 'var(--light-bulma, #231F20)',
    },
    backgroundColor: {
      'background': 'var(--Background, #F5F5F5)',
      'light-goku': 'var(--light-goku, #F5F5F5)',
    },
    
    },
  },
  plugins: [],
}
export default config
