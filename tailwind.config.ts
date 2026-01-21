import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nav-blue': '#0067c5',
        'nav-dark': '#004d99',
        'skatt-green': '#1a7d36',
        'helse-red': '#c30000',
      },
      fontSize: {
        'accessible': '1.25rem',
        'accessible-lg': '1.5rem',
        'accessible-xl': '2rem',
      }
    },
  },
  plugins: [],
}
export default config
