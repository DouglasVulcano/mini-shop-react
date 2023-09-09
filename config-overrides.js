const path = require("path");

module.exports = function override(config, env) {
  // Adicione a configuração de alias para os paths no Webpack
  config.resolve.alias = {
    ...config.resolve.alias,
    "@components": path.resolve(__dirname, "src/components"),
    "@services": path.resolve(__dirname, "src/services"),
    "@features": path.resolve(__dirname, "src/features"),
    "@modules": path.resolve(__dirname, "src/modules"),
    "@hooks": path.resolve(__dirname, "src/hooks"),
  };

  return config;
};
