import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Checkbox } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function CheckboxExample() {
  function handleChangeTest(e) {
    const message = `checked = ${e.target.checked}`;
    console.log(message);
    alert(message);
  }

  return (
    <div className="App">
      <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
        <div>
          <Checkbox>A checkbox</Checkbox>
          <Checkbox defaultChecked={true}>A checkbox with defaultChecked</Checkbox>
          <Checkbox onChange={handleChangeTest}>A checkbox with onChange event</Checkbox>
          <Checkbox disabled>A disabled checkbox</Checkbox>
          <Checkbox defaultChecked={true} disabled>A disabled checkbox with checked status</Checkbox>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Themes.temaSGP }}>
        <div>
          <Checkbox>A checkbox</Checkbox>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Themes.temaSGC }}>
        <div>
          <Checkbox>A checkbox</Checkbox>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default CheckboxExample;
