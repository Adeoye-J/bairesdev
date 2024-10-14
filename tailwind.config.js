/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: "var(--bg)",
        bgsoft: "var(--bgSoft)",
        text: "var(--text)",
        text: "var(--text)",
        textsoft: "var(--textSoft)",
        btn: "var(--btn)",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
      rotate: {
        '270': '270deg',
      },
    },
  },
  plugins: [],
};
