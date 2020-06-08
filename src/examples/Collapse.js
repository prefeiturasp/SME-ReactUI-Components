import React from 'react';

// Componentes
import { Collapse } from '~/components';

// Theme
import { ThemeProvider } from 'styled-components';
import Temas, { support } from '~/themes';

function CollapseExample() {
  return (
    <div
      style={{
        width: '80%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <ThemeProvider theme={{ ...support, ...Temas.temaSIGPAE }}>
        <Collapse>
          <Collapse.Panel disabled={false} bordered header="Primeiro Bimestre">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Segundo Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Terceiro Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Quarto Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>

      <ThemeProvider theme={{ ...support, ...Temas.temaSGP }}>
        <Collapse>
          <Collapse.Panel disabled={false} bordered header="Primeiro Bimestre">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Segundo Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Terceiro Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Quarto Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>

      <ThemeProvider theme={{ ...support, ...Temas.temaSGC }}>
        <Collapse>
          <Collapse.Panel disabled={false} bordered header="Primeiro Bimestre">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Segundo Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Terceiro Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
          <Collapse.Panel bordered header="Quarto Bimestre" title="Teste">
            Teste
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>

      <ThemeProvider theme={{ ...support, ...Temas.temaSGC }}>
        <Collapse>
          <Collapse.Panel
            disabled={false}
            bordered
            borderColor="red"
            header="Primeiro Bimestre"
          >
            Teste
          </Collapse.Panel>
          <Collapse.Panel
            bordered
            borderColor="red"
            header="Segundo Bimestre"
            title="Teste"
          >
            Teste
          </Collapse.Panel>
          <Collapse.Panel
            bordered
            borderColor="red"
            header="Terceiro Bimestre"
            title="Teste"
          >
            Teste
          </Collapse.Panel>
          <Collapse.Panel
            bordered
            borderColor="red"
            header="Quarto Bimestre"
            title="Teste"
          >
            Teste
          </Collapse.Panel>
        </Collapse>
      </ThemeProvider>
    </div>
  );
}

export default CollapseExample;
