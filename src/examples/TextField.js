import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { TextField, useTheme, Icon } from '~/components';

// Themes
import Themes from '~/themes';

function TextFieldExample() {
  const [loading, setLoading] = useState(false);
  const tema = useTheme({
    Colors: {
      Primary: Themes.temaSIGPAE.primary,
      PrimaryLight: Themes.temaSIGPAE.primaryLight,
      PrimaryDark: Themes.temaSIGPAE.primaryDark,
    },
    ...Themes.temaSIGPAE,
  });

  return (
    <div className="App">
      <div style={{ width: '30%' }}>
        <ThemeProvider theme={tema}>
          <TextField
            label="Nome"
            errorMessage="Campo não pode ser vazio"
            required
            placeholder="Digite o nome"
          />
          <br />
          <TextField label="Nome" placeholder="Digite o nome" />
          <br />
          <TextField disabled required placeholder="Digite o nome" />
          <br />
          <TextField
            errorMessage="Campo não pode ser vazio"
            placeholder="Digite o nome"
          />
          <br />
          <TextField
            placeholder="Digite o nome"
            suffix={<Icon type="solid" icon="fa-search-dollar" />}
          />
          <br />
          <TextField
            placeholder="Digite o nome"
            prefix={<Icon type="solid" icon="fa-search-dollar" />}
          />
          <br />
          <TextField.Search
            onSearch={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 2500);
            }}
            loading={loading}
            placeholder="Digite o nome"
          />
        </ThemeProvider>
      </div>
    </div>
  );
}

export default TextFieldExample;
