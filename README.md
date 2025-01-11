# React + Vite + TailwindCss

commands to setup

npm create vite@latest  nameOfProject
cd nameOfProject 
npm install 
then npm run dev 

for tailwindCss

npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p


in tailwind.config.js file do this 
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

in index.css add this 
@tailwind base;
@tailwind components;
@tailwind utilities;
