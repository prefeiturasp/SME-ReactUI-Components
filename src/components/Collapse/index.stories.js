import React from 'react';

// Components
import { Collapse } from '~/components';

const { Panel } = Collapse;

export default {
  title: 'Collapse',
  component: Collapse,
  subcomponents: { Panel },
};

export const CollapseStory = () => (
  <Collapse defaultActiveKey={1}>
    <Collapse.Panel bordered header="Título" key={1}>
      Content
    </Collapse.Panel>
    <Collapse.Panel bordered header="Título" key={2}>
      Content
    </Collapse.Panel>
    <Collapse.Panel bordered header="Título" key={3}>
      Content
    </Collapse.Panel>
  </Collapse>
);
