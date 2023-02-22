import React from 'react';

// Components
import { Tabs, Icon } from '~/components';

const { TabPane } = Tabs;

export default {
  title: 'Components|Tabs',
  component: Tabs,
};

export const TabsStory = () => {
  const items = [
    {
    key: "1",
    title: "Tab 1",
    content: "Content 1"
  },
  {
    key: "2",
    title: "Tab 2",
    content: "Content 2"
  }
];
  return (
    <Tabs items={items}/>
  );
};

export const TabsIconStory = () => {
  const items = [
      {
      key: "1",
      title: "Tab 1",
      icon: "fa-home",
      content: "Content 1"
    },
    {
      key: "2",
      title: "Tab 2",
      icon: "fa-user",
      content: "Content 2"
    },
    {
      key: "3",
      title: "Tab 3",
      icon: "fa-gear",
      content: "Content 3",
      disabled: true
    }
  ];
  return (
    <Tabs items={items}/>
  );
};

export const TabsSlideStory = () => {
  return (
    <Tabs items={
      [...Array(15).keys()].map((item, index) => {
        return {
          key: `String ${(index + 1)}`,
          title: `Tab ${index + 1}`,
          content: `Content ${index + 1}`
        }
      })
    }>
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