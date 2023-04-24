# SME-SecretUI

Biblioteca de componentes React para projetos da SME.

## Descrição

SME-SecretUI é um conjunto de componentes ReactJS baseados em Ant Design que visam simplificar o processo de criação de interfaces para os projetos da SME.

## Utilização

Para utilizar os componentes do SME-SecretUI em sua aplicação, siga os passos abaixo:

1. Instale a biblioteca utilizando o gerenciador de pacotes do npm:

```bash
npm install sme-secretui
```

2. Importe os componentes necessários em seu arquivo .jsx/.js:

```bash
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ThemeProvider, useTheme } from 'sme-secretui';

const { themeSIGPAE } = useTheme();

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(
    <ThemeProvider theme={themeSIGPAE}>
        <App>
    </ThemeProvider>
, wrapper) : false;
```

## Temas disponíveis

1. themeSGP
2. themeSGC
3. themeSIGPAE

## Exemplos

Para visualizar os componentes disponíveis e exemplos é possível consultar a documentação completa do projeto [Link documentação](https://sds-storybook.sme.prefeitura.sp.gov.br/?path=/docs/overview-design-system--intro-story).
