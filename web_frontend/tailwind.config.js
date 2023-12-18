// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#323234', // Define your custom color here
        // Add more custom colors if needed
      },
    },
  },
  plugins: [],
};

