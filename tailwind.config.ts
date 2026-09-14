import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#FFFBF7",
        "pink-sweet": "#FFC4D6",
        "pink-hot": "#FF99B8",
        "lavender-soft": "#D8B4F8",
        "choco-dark": "#5C3A21",
        "choco-medium": "#7A4E2D",
      },
      fontFamily: {
        mplus: ["var(--font-mplus)", "Hiragino Maru Gothic ProN", "sans-serif"],
        kiwi: ["var(--font-kiwi)", "Hiragino Mincho ProN", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
