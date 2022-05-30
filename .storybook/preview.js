import { setCustomElementsManifest } from '@storybook/web-components';
import customElements from '../src/custom-elements.json';

setCustomElementsManifest(customElements);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  docs: {
    transformSource: source =>
      source
        // Clean empty boolean attribute values
        .replace(/=\"\"/g, ''),
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Documentation', ['Welcome', '*'], 'Components', 'Design System'],
      locales: 'en-US',
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
