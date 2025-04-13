// tailwind.config.js
module.exports = {
  darkMode: 'class', // very important for dark mode toggle
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // look in all files inside src
  ],
  theme: {
    extend: {
      screens: {
        // Custom breakpoints (You can adjust these as per your design requirements)
        sm: "640px", // Small screens (default mobile)
        md: "768px", // Medium screens (tablet)
        lg: "1024px", // Large screens (laptops/desktops)
        xl: "1280px", // Extra-large screens
        "2xl": "1536px", // Very large screens (large desktop)
      },
    },
  },
  plugins: [],
};
