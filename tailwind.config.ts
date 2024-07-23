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
      play: ["Playco", "serif"]
    },
    extend: {
      backgroundImage: {
        'pattern': '@/assets/pattern'
      },
      colors: {
      },
  plugins: [],
}
}
};
export default config;
