import React, { useState } from 'react';

// Components
import { Breadcrumb } from '~/components';

export default {
  title: 'Components|Breadcrumb',
  component: Breadcrumb,
  subcomponents: { Item: Breadcrumb.Item },
};

export const BreadcrumbStory = () => {
  const [items] = useState([
    {
      text: 'Relatórios',
      href: null,
      disabled: true,
    },
    {
      text: 'PAP',
      href: '#',
      disabled: false,
    },
    {
      text: 'Acompanhamento PAP',
      href: null,
      disabled: true,
    },
  ]);

  return <Breadcrumb items={items} />;
};

BreadcrumbStory.story = {
  name: 'default',
};
