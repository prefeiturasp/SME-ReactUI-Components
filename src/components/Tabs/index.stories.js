import React from 'react';

// Components
import { Tabs, Icon } from '~/components';

const { TabPane } = Tabs;

export default {
  title: 'Tabs',
  component: Tabs,
};

export const TabsStory = () => {
  return (
    <Tabs>
      <TabPane key="1" tab="Tab 1">
        Content 1
      </TabPane>
      <TabPane key="2" tab="Tab 2">
        Content 2
      </TabPane>
      <TabPane key="3" tab="Tab 3">
        Content 3
      </TabPane>
    </Tabs>
  );
};

export const TabsIconStory = () => {
  return (
    <Tabs>
      <TabPane
        key="1"
        tab={
          <span>
            <Icon type="brand" icon="fa-apple" />
            &nbsp; Tab 1
          </span>
        }
      >
        Content 1
      </TabPane>
      <TabPane
        key="2"
        tab={
          <span>
            <Icon type="brand" icon="fa-apple" />
            &nbsp; Tab 2
          </span>
        }
      >
        Content 2
      </TabPane>
      <TabPane
        key="3"
        tab={
          <span>
            <Icon type="brand" icon="fa-apple" />
            &nbsp; Tab 3
          </span>
        }
      >
        Content 3
      </TabPane>
    </Tabs>
  );
};

export const TabsSlideStory = () => {
  return (
    <Tabs>
      {[...Array(30).keys()].map((item, index) => (
        <TabPane
          key={String(index + 1)}
          tab={
            <span>
              <Icon type="brand" icon="fa-apple" />
              &nbsp; Tab {index + 1}
            </span>
          }
        >
          Content {index + 1}
        </TabPane>
      ))}
    </Tabs>
  );
};

export const TabsCardStory = () => {
  return (
    <Tabs type="card">
      <TabPane key="1" tab="Tab 1">
        Content 1
      </TabPane>
      <TabPane disabled key="2" tab="Tab 2">
        Content 2
      </TabPane>
      <TabPane key="3" tab="Tab 3">
        Content 3
      </TabPane>
    </Tabs>
  );
};

TabsStory.story = {
  name: 'default tab',
};

TabsIconStory.story = {
  name: 'icon tab',
};

TabsSlideStory.story = {
  name: 'slide tab',
};

TabsCardStory.story = {
  name: 'card tab',
};
