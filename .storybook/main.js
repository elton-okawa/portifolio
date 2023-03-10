const path = require("path");
module.exports = {
  stories: [
    "../packages/!(node_modules)/!(node_modules)/stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    docsPage: true,
  },
  staticDirs: ["../public"],
};
