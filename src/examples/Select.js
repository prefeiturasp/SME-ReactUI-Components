import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Select } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function SelectExample() {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "value1",
      disabled: false
    },
    {
      text: "Text example #2",
      value: "value2",
      disabled: false
    },
    {
      text: "Text example disabled",
      value: "value3",
      disabled: true
    }
  ];

  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '0.2rem' }}>
            <Select
              placeholder="Select a option"
              options={optionsExample} />
          </div>

          <div style={{ padding: '0.2rem' }}>
            <Select
              placeholder="Select a option"
              options={optionsExample}
              disabled
            />
          </div>

          <div style={{ padding: '0.2rem' }}>
            <Select
              placeholder="Select a option"
              defaultValue="value2"
              options={optionsExample} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SelectExample;
