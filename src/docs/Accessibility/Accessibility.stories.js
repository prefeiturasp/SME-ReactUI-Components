import React from 'react';
import { Description } from '@storybook/addon-docs/blocks';
import Accessibility from './Accessibility.md';


export default {
  title: 'Overview|Acessibilidade',
};

export const AccessibilityStory = () => {
  return (
    <div style={{ margin: '1rem' }}>
      <Description markdown={Accessibility} />
    </div>
  );
};

AccessibilityStory.story = {
  name: 'Introdução',
};
