/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				dark: '#10101A',
				light: '#fcfcfc',
				primary: '#8353E2',
				secondary: '#05B19A',
			},
      fontFamily: {
        mysignature: ["Great Vibes"],
      },
    },
  },
  plugins: [],
}
