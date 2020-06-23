import React from 'react';
import { Button } from '~/components';
import notes from './notes.md';

export default {
  title: 'Button',
  parameters: {
    notes: { notes },
  },
};

export const PrimaryButton = () => <Button type="primary">Hello Button</Button>;

PrimaryButton.parameters = {
  props: {
    propTablesExclude: [],
  },
};

PrimaryButton.story = {
  name: 'Teste nome da historia',
  descripion: 'OAISJDOAHSIDHAISDUHAS',
};
