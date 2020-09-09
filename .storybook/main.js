const PnpWebpackPlugin = require(`pnp-webpack-plugin`);

async function yarn2Config(config, options) {
  const newConfig = {
    ...config,
    resolve: {
      ...config.resolve,
      plugins: [
        ...config.resolve.plugins || [],
        PnpWebpackPlugin
      ]
    },
    resolveLoader: {
      ...(config.resolveLoader),
      plugins: [
        ...config.resolveLoader.plugins,
        PnpWebpackPlugin.moduleLoader(module)
      ]
    }
  };

  return newConfig;
}

module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  managerWebpack: yarn2Config, webpack: yarn2Config
}
