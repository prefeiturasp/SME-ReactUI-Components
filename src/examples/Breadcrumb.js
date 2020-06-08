import React, { useState, useEffect, useCallback } from 'react';
import shortid from 'shortid';

// Componentes
import { Breadcrumb } from '~/components';

// Theme
import { ThemeProvider } from 'styled-components';
import Temas, { support } from '~/themes';

function BreadcrumbExample() {
  const [items, setItems] = useState([
    {
      text: 'Relatórios',
      href: null,
    },
    {
      text: 'PAP',
      href: '/home',
    },
    {
      text: 'Acompanhamento PAP',
      href: null,
      disabled: true,
    },
  ]);

  return (
    <div
      style={{
        width: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemeProvider theme={{ ...support, ...Temas.temaSIGPAE }}>
        <Breadcrumb items={items} />
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Temas.temaSGP }}>
        <Breadcrumb items={items} />
      </ThemeProvider>
      <ThemeProvider theme={{ ...support, ...Temas.temaSGC }}>
        <Breadcrumb items={items} />
      </ThemeProvider>
    </div>
  );
}

export default BreadcrumbExample;
