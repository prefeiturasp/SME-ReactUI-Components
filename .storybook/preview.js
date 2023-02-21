import './styles.css';

import '@fortawesome/fontawesome-free/css/all.min.css';

import useTheme from '~/utils/hook/useTheme';

const { addDecorator, addParameters } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withPlayroom } from 'storybook-addon-playroom';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';

const { themeSGP, themeSGC, themeSIGPAE } = useTheme();

addDecorator(withPropsTable);
addDecorator(withPlayroom);
addDecorator(withThemesProvider([themeSGP, themeSGC, themeSIGPAE]));
addDecorator(withKnobs);

addParameters({
  playroom: {
    // Because Playroom is built inside Storybook on this example's deploy,
    // we must define the absolute path to it when NODE_ENV is production,
    // otherwise set undefined to use the default Playroom URL (localhost)
    url:
      process.env.NODE_ENV === 'production'
        ? '/playroom/'
        : 'http://localhost:9000',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});
