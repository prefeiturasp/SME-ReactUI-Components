import React, { useState } from 'react';

// Components
import { Breadcrumb } from '~/components';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  subcomponents: { Item: Breadcrumb.Item },
};

export const BreadcrumbStory = () => {
  const [items] = useState([
    {
      text: 'Relatórios',
      href: null,
    },
    {
      text: 'PAP',
      href: '#',
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
