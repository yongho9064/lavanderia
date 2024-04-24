// postcss.config.js

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-preset-env')({
      stage: 0,
    }),
  ],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
};
