import '../index.css';
import 'antd/dist/antd.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Themes from '~/themes';

const { addDecorator, addParameters } = require('@storybook/react');
const { withPropsTable } = require('storybook-addon-react-docgen');
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import { withPlayroom } from 'storybook-addon-playroom';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';

const themes = [Themes.temaSGP, Themes.temaSGC, Themes.temaSIGPAE];

addDecorator(withPropsTable);
addDecorator(withPlayroom);
addDecorator(withThemesProvider(themes));
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
});
