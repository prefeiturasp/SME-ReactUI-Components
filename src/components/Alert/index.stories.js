import React, { useState } from 'react';
import shortid from 'shortid';

import { Alert, TextField, Button, Typography } from '~/components';

const { Box, Toastr } = Alert;

export default {
  title: 'Components|Alert',
  component: Alert,
  subcomponents: { Toastr, Box },
};

export const AlertStory = () => (
  <>
    <Alert
      type="success"
      message="Conteúdo do alerta"
      afterClose={() => null}
    />
    <Alert
      type="warning"
      message="Conteúdo do alerta"
      afterClose={() => null}
    />
    <Alert type="error" message="Conteúdo do alerta" afterClose={() => null} />
    <Alert type="info" message="Conteúdo do alerta" afterClose={() => null} />
  </>
);

export const AlertToastrStory = () => {
  const [alerts, setAlerts] = useState([
    {
      id: shortid.generate(),
      type: Alert.Utils.Type.SUCCESS,
      message: 'Cadastrado com sucesso!',
      closable: true,
      showIcon: true,
    },
  ]);

  const addAlert = () =>
    setAlerts((oldState) => [
      ...oldState,
      {
        id: shortid.generate(),
        type: Alert.Utils.Type.ERROR,
        message: 'Ocorreu um erro. Contate o suporte.',
        closable: true,
        timeout: 2000,
        showIcon: true,
      },
    ]);

  return (
    <>
      <Button onClick={() => addAlert()}>Adicionar alerta</Button>
      <br />
      <br />
      <Toastr
        list={alerts}
        afterClose={(alert) =>
          setAlerts((oldState) => oldState.filter((x) => x.id !== alert.id))
        }
      />
    </>
  );
};

export const AlertBoxStory = () => (
  <Box
    visible
    text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
    title="Teste"
  />
);

export const AlertBoxWithCustomHtml = () => (
  <Box
    visible
    text="Mussum Ipsum, cacilds vidis litro abertis. Delegadis gente finis, bibendum egestas augue arcu ut est. Atirei o pau no gatis, per gatis num morreus. "
    title="Teste"
  >
    <div style={{ margin: '0.5rem 0' }}>
      <TextField placeholder="Digite alguma coisa..." />
    </div>
    <div
      style={{
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <Button style={{ marginRight: '0.5rem' }} type="primary" outline>
        Cancelar
      </Button>
      <Button type="primary">Confirmar</Button>
    </div>
  </Box>
);

AlertBoxStory.story = {
  name: 'alert box',
};

AlertToastrStory.story = {
  name: 'alert toastr',
  decorators: [
    (storyFn) => (
      <div style={{ margin: '0 0.5rem' }}>
        <Typography.Paragraph weight="regular">
          Esse componente funciona como um envólucro (wrapper) de alertas. Deve
          ser usado em uma determinada posição da tela onde serão exibidas todos
          os alertas do sistema como mensagens de sucesso, erro e avisos.
        </Typography.Paragraph>
        <br />
        {storyFn()}
      </div>
    ),
  ],
};

AlertBoxWithCustomHtml.story = {
  name: 'alert box with custom html',
};

AlertStory.story = {
  name: 'default alert',
  decorators: [
    (storyFn) => (
      <div>
        <Typography.Paragraph weight="regular">
          Esse alerta deve ser usado de forma unitária caso necessite apenas UM
          alerta em um determinado local da tela, como alguma informação ou
          alerta de algum requerimento.
        </Typography.Paragraph>
        <br />
        {storyFn()}
      </div>
    ),
  ],
};
