import React, { useState } from 'react';
import shortid from 'shortid';

import { Button, Typography, Toastr } from '~/components';


export default {
  title: 'Components|Toast',
  component: Toastr,
};

export const ToastrStory = () => {
  // const { success } = 

  const showToastr = (placement) => {
    Toastr.success({message:'Success', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', placement})
  }

  const showToastrError = (placement) => {
    Toastr.error({message:'Error', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', placement})
  }

  return (
    <>
      <Button onClick={() => showToastr('topLeft')}>Abrir topLeft</Button>
      <Button onClick={() => showToastr('topRight')}>Abrir topRight</Button>
      <Button onClick={() => showToastr('bottomLeft')}>Abrir bottomLeft</Button>
      <Button onClick={() => showToastr('bottomRight')}>Abrir bottomRight</Button>
      <hr></hr>
      <Button onClick={() => showToastrError('topLeft')}>Abrir toastr sucesso</Button>
      <Button onClick={() => showToastrError('topRight')}>Abrir toastr erro</Button>
    </>
  );
};

ToastrStory.story = {
  name: 'toastr',
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