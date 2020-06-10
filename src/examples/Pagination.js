import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Pagination } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function PaginationExample() {
  function exampleOnChange(page) {
    console.log(page);
  };

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '0.2rem' }}>
            <Pagination total={500} onChange={exampleOnChange} />
          </div>
        </ThemeProvider>
        <ThemeProvider theme={{ ...support, ...Themes.temaSGP }}>
          <div style={{ padding: '0.2rem' }}>
            <Pagination total={500} />
          </div>
        </ThemeProvider>
        <ThemeProvider theme={{ ...support, ...Themes.temaSGC }}>
          <div style={{ padding: '0.2rem' }}>
            <Pagination total={500} />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default PaginationExample;
