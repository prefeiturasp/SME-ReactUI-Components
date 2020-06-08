import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Checkbox } from '~/components';

// Themes
import Themes from '~/themes';

function CheckboxExample() {
  return (
    <div className="App">
      <ThemeProvider theme={Themes.temaSIGPAE}>
        <div>
          <Checkbox>A checkbox</Checkbox>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={Themes.temaSGP}>
        <div>
          <Checkbox>A checkbox</Checkbox>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={Themes.temaSGC}>
        <div>
          <Checkbox>A checkbox</Checkbox>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default CheckboxExample;
