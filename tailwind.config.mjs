/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#B96BF6',
        secondary: '#F9D423',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui'],
        Baloo: ['Baloo 2 Variable', 'system-ui'],
      },
    },
    plugins: [],
  },
}
