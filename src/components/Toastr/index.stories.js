import React, { useState } from 'react';

import { Button, Typography, Toastr } from '~/components';
import { ToastrService } from '.';

export default {
  title: 'Components|Toast',
  component: Toastr,
};

export const ToastrStory = () => {
  const toastrService = new ToastrService(); 

  const showToastr = (placement) => {
    toastrService.success({message:'Success', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', placement})
  }

  return (
    <>
      <Button onClick={() => showToastr('topLeft')} style={{margin: 2}}>Abrir topLeft</Button>
      <Button onClick={() => showToastr('topRight')} style={{margin: 2}}>Abrir topRight</Button>
      <Button onClick={() => showToastr('bottomLeft')} style={{margin: 2}}>Abrir bottomLeft</Button>
      <Button onClick={() => showToastr('bottomRight')} style={{margin: 2}}>Abrir bottomRight</Button>
    </>
  );
};

ToastrStory.story = {
  name: 'default',
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
}


export const Placements = () => {
  const toastrService = new ToastrService(); 

  const showToastr = (placement) => {
    toastrService.success({message:'Success', description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit', placement})
  }

  return (
    <>
      <Button onClick={() => showToastr('topLeft')} style={{margin: 2}}>Abrir topLeft</Button>
      <Button onClick={() => showToastr('topRight')} style={{margin: 2}}>Abrir topRight</Button>
      <Button onClick={() => showToastr('bottomLeft')} style={{margin: 2}}>Abrir bottomLeft</Button>
      <Button onClick={() => showToastr('bottomRight')} style={{margin: 2}}>Abrir bottomRight</Button>
    </>
  );
};

export const Types = () => {
  const toastrService = new ToastrService(); 

  const getMessage = (type) => {
    return {
      message: type,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
    }
  };

  return (
    <>
      <Button onClick={() => toastrService.info(getMessage('Info'))} style={{margin: 2}}>Abrir info</Button>
      <Button onClick={() => toastrService.warning(getMessage('Warning'))} style={{margin: 2}}>Abrir warning</Button>
      <Button onClick={() => toastrService.success(getMessage('Success'))} style={{margin: 2}}>Abrir success</Button>
      <Button onClick={() => toastrService.error(getMessage('Error'))} style={{margin: 2}}>Abrir error</Button>
    </>
  );
};

Placements.story = { name: 'placements' };
Types.story = { name: 'types' };