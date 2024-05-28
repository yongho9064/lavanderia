// postcss.config.js

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"], // Using 'sans' as an example
        courgette: ["Courgette", "cursive"],
      },
      screens: {
        '3xl': '1600px', // 3xl 브레이크포인트 추가
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    require("postcss-preset-env")({
      stage: 0,
    }),
  ],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
};
