module.exports = {
  // Outras configurações...
  plugins: [
    [
      "module-resolver",
      {
        root: ["src"],
        alias: {
          "@components": "./components",
          "@services": "./services",
          "@features": "./features",
        },
      },
    ],
  ],
};
