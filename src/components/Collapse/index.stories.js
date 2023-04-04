import React, { useState } from 'react';

// Components
import { Collapse, Icon } from '~/components';

const { Panel } = Collapse;
const { PanelHeader } = Panel;

export default {
  title: 'Components|Collapse',
  component: Collapse,
  subcomponents: { Panel, PanelHeader },
};

export const CollapseStory = () => {
  const [activePanel, setActivePanel] = useState(false);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel bordered header="Title" borderColor="primary">Content</Collapse.Panel>
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
      <Collapse.Panel bordered header="Title" borderColor="primary">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered header="Title" borderColor="secondary">
        Content
      </Collapse.Panel>
      <Collapse.Panel bordered header="Title" borderColor="tertiary">
        Content
      </Collapse.Panel>
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
      <Collapse.Panel disabled bordered header="Title" borderColor="primary">
        Content
      </Collapse.Panel>
      <Collapse.Panel disabled bordered header="Title" borderColor="primary">
        Content
      </Collapse.Panel>
      <Collapse.Panel disabled bordered header="Title" borderColor="primary">
        Content
      </Collapse.Panel>
    </Collapse>
  );
};

export const CollapseAdvancedHeaderStory = () => {
  const [activePanel, setActivePanel] = useState(false);
  return (
    <Collapse
      activeKey={activePanel}
      onChange={(panel) => setActivePanel(panel)}
    >
      <Collapse.Panel 
        bordered 
        borderColor="info"
        header="Info collapse" 
        subtitle="Info collapse subtitle"
        icon='fa-circle-exclamation'
      >
        Content
      </Collapse.Panel>

      <Collapse.Panel 
        bordered 
        header="Warning collapse" 
        borderColor="warning"
        subtitle="Warning collapse subtitle"
        icon='fa-triangle-exclamation'
      >
        Content
      </Collapse.Panel>      

      <Collapse.Panel 
        bordered 
        header="Success collapse" 
        borderColor="success"
        subtitle="Success collapse subtitle"
        icon='fa-circle-check'
      >
        Content
      </Collapse.Panel>            

      <Collapse.Panel 
        bordered 
        header="Error collapse" 
        borderColor="error"
        subtitle="Error collapse subtitle"
        icon='fa-circle-xmark'
      >
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

CollapseAdvancedHeaderStory.store = {
  name: 'advanced header collapse',
};
