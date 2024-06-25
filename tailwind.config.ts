import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'syne': ['Syne', 'sans-serif'],
        'familjen-grotesk': ['Familjen Grotesk', 'sans-serif'],
      },
      spacing: {
        '1.25': '5px',
      },
      borderWidth: {
        '5': '5px',
      },
    },
  },
  plugins: [],
};
export default config;
