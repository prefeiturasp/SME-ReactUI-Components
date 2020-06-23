import React from 'react';
import { Button } from '~/components';

export default { title: 'Button' };

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
