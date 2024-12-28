/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Remove the ShadCN paths if not using its components
  ],
  theme: {
    extend: {
      keyframes: {
        'slide-in': {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        'slide-in': 'slide-in 0.8s ease-out forwards', // Reduced duration
        'fade-in': 'fade-in 0.8s ease-in forwards',   // Added fade-in for general use
      },
    },
  },
  plugins: [],
};
