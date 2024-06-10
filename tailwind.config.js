const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@catppuccin/tailwindcss")({
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }),
    iconsPlugin({
      collections: getIconCollections(["mdi", "lucide"]),
    }),
  ],
}

