module.exports = {
  presets: [
    require("./tailwind.copy.config.js"),
  ],
  purge: {
    enabled: true,
    content: [
      "./src/**/*.{ts,tsx}",
      "./node_modules/@abr-ya/lib-travel-kit-demo/dist/*.{js,jsx}",
    ],
  },
};
