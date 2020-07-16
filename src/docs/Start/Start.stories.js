import React from 'react';
import { Description } from '@storybook/addon-docs/blocks';
import start from './start.md';


export default {
  title: 'Overview|Instalação',
};

export const IntroStory = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <Description markdown={start} />
    </div>
  );
};

IntroStory.story = {
  name: 'Bem Vindo',
};
