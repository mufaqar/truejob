/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-gray': `var(--dark-gray)`,
        'light-gray': `var(--light-gray)`,
        'yellow': `var(--yellow)`,
        'pure': `var(--pure)`,
        'light-blue': `var(--light-blue)`,
        'text': `var(--text)`,
        'border': `var(--border)`,
      },
      screens: {
        '1080': '1080px',
      },
      fontFamily: {
        'oswald': ['oswald'],
        'poppins': ['poppins'],
        'lato': ['lato'],
      },
    },
  },
  plugins: [],
}
