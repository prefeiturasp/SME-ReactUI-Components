import styled from 'styled-components';

// Ant
import { Tabs } from 'antd';

export const TabsStyle = styled(Tabs)`
  .ant-tabs-tab-active {
    color: ${(props) => props.theme?.Colors?.Primary} !important;
  }

  .ant-tabs-nav .ant-tabs-tab {
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};

    &:not(.ant-tabs-tab-disabled) {
      &:hover {
        color: ${(props) => props.theme?.Colors?.Primary} !important;
      }
    }
  }

  .ant-tabs-ink-bar {
    height: 6px;
    background-color: ${(props) => props.theme?.Colors?.Primary} !important;
  }
`;

export const TabPaneStyle = styled(Tabs.TabPane)``;
