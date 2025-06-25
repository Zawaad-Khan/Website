module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        accent: "#e45735"
      },
      fontFamily: {
        serif: ["Georgia", "serif"]
      },
      maxWidth: {
        prose: "700px"
      }
    }
  },
  plugins: []
};