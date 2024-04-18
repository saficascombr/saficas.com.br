import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '560px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '1xl': '1460px',
      '2xl': '1536px',
    },
    fontFamily: {
      glass: ["Glass Antiqua", "cursive"]
    },
    extend: {
      backgroundImage: {
        'pink checkered': "url('https://r2.easyimg.io/hkcax6rj7/pattern.png')"
      },
      colors: {
      },
      keyframes: {
        "hammering": {
          "0%": {
            "transform": "translateY(0)"
          },
          "50%": {
            "transform": "translateY(-10px)"
          },
          "100%": {
            "transform": "translateY(0)"
          }
        }
      },
  plugins: [],
}
}
};
export default config;
