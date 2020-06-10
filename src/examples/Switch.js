import React, { useState, useEffect } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Spin, Alert, Button, Switch } from '~/components';

// Themes
import Themes from '~/themes';

function SwitchExample() {
  const [checked, setChecked] = useState(false);
  return (
    <div className="App">
      <div style={{ width: '50%' }}>
        <ThemeProvider theme={Themes.temaSIGPAE}>
          <Switch
            isFrequence
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <Switch checked={checked} onChange={() => setChecked(!checked)} />
          <Switch isFrequence disabled checked />
          <Switch disabled />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default SwitchExample;
