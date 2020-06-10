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
      value: "Text example #1",
      disabled: false
    },
    {
      text: "Text example #2",
      value: "Text example #2",
      disabled: false
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  function handleChangeTest(value) {
    const message = `value = ${value}`;
    console.log(message);
    alert(message);
  }

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
              defaultValue="Text example #2"
              options={optionsExample} />
          </div>

          <div style={{ padding: '0.2rem' }}>
            <Select
              placeholder="Select with onChange event"
              options={optionsExample}
              onChange={handleChangeTest} />
          </div>

          <div style={{ padding: '0.2rem' }}>
            <Select
              mode="multiple"
              placeholder="Multiple select"
              options={optionsExample} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SelectExample;
