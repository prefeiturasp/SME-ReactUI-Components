module.exports = {
  stories: ['../src/**/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-react-docgen',
    'storybook-addon-styled-component-theme/dist/register',
    'storybook-addon-playroom',
    '@storybook/addon-knobs/register',
    '@storybook/addon-notes/register',
  ],
};
