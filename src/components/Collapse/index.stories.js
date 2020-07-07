import React, { useState } from 'react';

// Components
import { Collapse } from '~/components';

const { Panel } = Collapse;

export default {
  title: 'Components|Collapse',
  component: Collapse,
  subcomponents: { Panel },
};

export const CollapseStory = () => {
  const [activePanel, setActivePanel] = useState(['0']);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel header="Título">Content</Collapse.Panel>
      <Collapse.Panel header="Título">Content</Collapse.Panel>
      <Collapse.Panel header="Título">Content</Collapse.Panel>
    </Collapse>
  );
};

export const CollapseDisabledStory = () => {
  const [activePanel, setActivePanel] = useState([]);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel disabled header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel disabled header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel disabled header="Título">
        Content
      </Collapse.Panel>
    </Collapse>
  );
};

export const CollapseBorderedStory = () => {
  const [activePanel, setActivePanel] = useState([]);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel bordered header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered header="Título">
        Content
      </Collapse.Panel>
    </Collapse>
  );
};

export const CollapseCustomBorderStory = () => {
  const [activePanel, setActivePanel] = useState([]);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel bordered borderColor="red" header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered borderColor="yellow" header="Título">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered borderColor="cyan" header="Título">
        Content
      </Collapse.Panel>
    </Collapse>
  );
};

CollapseStory.story = {
  name: 'default collapse',
};

CollapseDisabledStory.story = {
  name: 'disabled collapse',
};

CollapseBorderedStory.story = {
  name: 'bordered collapse',
};

CollapseCustomBorderStory.story = {
  name: 'custom border color collapse',
};
