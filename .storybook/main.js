const createCompiler = require('@storybook/addon-docs/mdx-compiler-plugin');

module.exports = {
  stories: [
    '../src/docs/**/*.stories.js',
    '../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
    'storybook-addon-styled-component-theme/dist/register',
    'storybook-addon-playroom',
    '@storybook/addon-knobs/register',
  ],
};
