import React from 'react';
import { Button, useTheme } from '~/components';

import { ThemeProvider } from 'styled-components';
import Themes from '~/themes';

export default { title: 'Button' };

export const withText = () => {
  const tema = useTheme(Themes.temaSGP);

  return (
    <ThemeProvider theme={tema}>
      <Button type="primary">Hello Button</Button>
    </ThemeProvider>
  )
}

withText.parameters = {
 props: {
   propTablesExclude: []
 }
}