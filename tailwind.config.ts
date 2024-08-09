import type { Config } from 'tailwindcss'
import flowbite from 'flowbite-react/tailwind'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },

      colors: {
        primary: '#1E70B5', // Azul principal
        secondary: '#A8D5BA', // Verde suave
        highlight: '#0e7490', // Azul claro escuro
        background: '#F5F5F5', // Cinza claro
        textPrimary: '#000000', // Preto para textos principais
        textSecondary: '#C1C1C1', // Cinza médio para textos secundários
        white: '#FFFFFF', // Branco
      },
    },
  },
  plugins: [flowbite.plugin()],
}
export default config
