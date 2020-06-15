import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Upload } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function UploadExample() {
  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '0.2rem' }}>
            <Upload />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default UploadExample;
