import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        customGreen: "var(--customGreen)",
        customPink: "var(--customPink)",
        textTitle:"var(--textTitle)",
        textPar:"var(--textPar)",
        linkBlue:"var(--linkBlue)",
        backgroundDark: "var(--backgroundDark)",
        customGreenDark: "var(--customGreenDark)",
        customPinkDark: "var(--customPinkDark)",
        textTitleDark:"var(--textTitleDark)",
        textParDark:"var(--textParDark)",
        linkBlueDark:"var(--linkBlueDark)",
      },
    },
  },
  plugins: [],
};

export default config;
