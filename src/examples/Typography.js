import React from 'react';

import { ThemeProvider } from 'styled-components';

// Components
import { Typography, useTheme } from '~/components';

// Themes
import Themes from '~/themes';

function TypographyExample() {
  const tema = useTheme(Themes.temaSGP);
  const { Title, Text, Paragraph } = Typography;

  return (
    <ThemeProvider theme={tema}>
      <div className="titles">
        <Title level={1} weight="extrabold">
          h1. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={1} weight="bold">
          h1. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={1} weight="regular">
          h1. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <div style={{ backgroundColor: 'black' }}>
          <Title level={1} weight="regular" copyable inverted>
            h1. Mussum Ipsum, cacilds vidis litro abertis.
          </Title>
        </div>
        <hr />

        <Title level={2} weight="extrabold">
          h2. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={2} weight="bold">
          h2. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={2} weight="regular">
          h2. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <div style={{ backgroundColor: 'black' }}>
          <Title level={2} weight="regular" copyable inverted>
            h2. Mussum Ipsum, cacilds vidis litro abertis.
          </Title>
        </div>
        <hr />

        <Title level={3} weight="extrabold">
          h3. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={3} weight="bold">
          h3. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={3} weight="regular">
          h3. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <div style={{ backgroundColor: 'black' }}>
          <Title level={3} weight="regular" copyable inverted>
            h3. Mussum Ipsum, cacilds vidis litro abertis.
          </Title>
        </div>
        <hr />

        <Title level={4} weight="extrabold">
          h4. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={4} weight="bold">
          h4. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <Title level={4} weight="regular">
          h4. Mussum Ipsum, cacilds vidis litro abertis.
        </Title>
        <div style={{ backgroundColor: 'black' }}>
          <Title level={4} weight="regular" copyable inverted>
            h4. Mussum Ipsum, cacilds vidis litro abertis.
          </Title>
        </div>
      </div>
      <hr />
      <div className="text">
        <Text weight="extrabold" copyable keyboard>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se
          pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis,
          filhis, espiritis santis. Mussum Ipsum, cacilds vidis litro abertis.
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo,
          vitae iaculis nisl. Paisis, filhis, espiritis santis.
        </Text>
        <Text weight="bold" copyable keyboard>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se
          pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis,
          filhis, espiritis santis. Mussum Ipsum, cacilds vidis litro abertis.
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo,
          vitae iaculis nisl. Paisis, filhis, espiritis santis.
        </Text>
        <Text copyable keyboard code>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se
          pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis,
          filhis, espiritis santis. Mussum Ipsum, cacilds vidis litro abertis.
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo,
          vitae iaculis nisl. Paisis, filhis, espiritis santis.
        </Text>
        <Paragraph weight="bold" delete>
          Mussum Ipsum, cacilds vidis litro abertis. Mais vale um bebadis
          conhecidiss, que um alcoolatra anonimis. Casamentiss faiz malandris se
          pirulitá. Aenean aliquam molestie leo, vitae iaculis nisl. Paisis,
          filhis, espiritis santis. Mussum Ipsum, cacilds vidis litro abertis.
          Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.
          Casamentiss faiz malandris se pirulitá. Aenean aliquam molestie leo,
          vitae iaculis nisl. Paisis, filhis, espiritis santis.
        </Paragraph>
      </div>
      <hr />
    </ThemeProvider>
  );
}

export default TypographyExample;
