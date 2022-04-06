import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

const customViewports = {
  galaxys9: {
    name: 'Galaxy S9',
    styles: {
      height: '740px',
      width: '360px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'iPad',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
  iphone12: {
    name: 'iPhone 12',
    styles: {
      height: '844px',
      width: '390px',
    },
    type: 'mobile',
  },
};

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'light-dark',
    values: [
      {
        name: 'light-dark',
        value: '#F8F8F8',
      },
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  viewport: {
    viewports: customViewports,
  },
};
