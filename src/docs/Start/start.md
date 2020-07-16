Aprenda como incluir o SecretUI no seu projeto.

## Instalação

A melhor maneira de consumir o SecretUI é através do pacote npm, que você pode instalar com o npm (ou yarn, se preferir).

`npm install @sme/secretui --save-dev`

## Aplicando o tema

Para o funcionamento do SecretUI você precisa englobar todo o seu projeto com o ThemeProvider, informando qual o tema você vai utilizar.

```
import { ThemeProvider, useTheme } from '@sme/secretui/dist';

const { themeSGP } = useTheme();

<ThemeProvider theme={themeSGP}>

  Seu conteúdo aqui

</ThemeProvider>
```

## Importando componentes

Abaixo você vê um exemplo de importação de dois componentes: o Button e o TextField. Na seção componentes dessa documentação você descobre como utilizar os demais.

`import { Button, TextField } from "@sme/secretui/dist";`