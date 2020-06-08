import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Radio } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function RadioExample() {
  const [ radioValue, setRadioValue ] = useState(1);

  function handleChangeTest(e) {
    const message = `checked = ${e.target.checked}`;
    console.log(message);
    alert(message);
  }

  return (
    <div className="App">
      <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio>A radio button</Radio>
        </div>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio defaultChecked={true}>A radio button with defaultValue</Radio>
        </div>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio onChange={handleChangeTest}>A radio with onChange event</Radio>
        </div>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio disabled>A disabled radio</Radio>
          <Radio defaultChecked={true} disabled>A disabled radio with checked status</Radio>
        </div>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio.Group onChange={(e) => setRadioValue(e.target.value)} value={radioValue}>
            <Radio value={1}>Radio on RadioGroup #1</Radio>
            <Radio value={2}>Radio on RadioGroup #2</Radio>
            <Radio value={3}>Radio on RadioGroup #3</Radio>
          </Radio.Group>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Themes.temaSGP }}>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio>A radio button</Radio>
        </div>
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Themes.temaSGC }}>
        <div style={{ marginBottom: '0.2rem' }}>
          <Radio>A radio button</Radio>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default RadioExample;
