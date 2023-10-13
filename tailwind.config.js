/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "intense-red": "#E61428",
        "dark-gray": "#333333",
        "light-gray": "#DDDDDD",
        "light-silver": "#FAFAFA",
        "muted-gray ": "#828282",
      },
      fontFamily: {
        "gothic-a1": ["Gothic A1", "sans-serif"],
        "jetBrains-mono": ["JetBrains Mono", "monospace"],
        "noto-serif-jp": ["Noto Serif JP", "serif"],
      },
    },
  },
  plugins: [],
};
