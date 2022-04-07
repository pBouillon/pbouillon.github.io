module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-viewport',
    '@storybook/addon-essentials',
    '@storybook/addon-backgrounds',
    '@storybook/addon-interactions',
    'storybook-tailwind-dark-mode'
  ],
  framework: '@storybook/angular',
  core: {
    builder: '@storybook/builder-webpack5',
  },
};
