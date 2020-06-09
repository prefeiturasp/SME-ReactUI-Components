import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import { Icon } from '~/components';

// Ant
import { Select } from 'antd';
const { Option } = Select;

export const SelectStyle = styled(Select)`
  width: 100%;

  .ant-select-selection {
    height: 38px;

    .ant-select-selection__rendered {
      margin-left: 18px;
      margin-right: 0; // toDo: change this
      line-height: 36px;
    }
  }

  // Suffix arrow
  .ant-select-arrow {
    transition: transform 300ms;
  }

  &.ant-select-open .ant-select-arrow {
    transform: rotate(180deg);
  }
`;

export const OptionStyle = styled(Option)``;

export const GlobalStyle = createGlobalStyle`
  .ant-select-dropdown {
    overflow: hidden;

    &-menu {
      padding-top: 0;
      padding-bottom: 0;

      &-item {
        padding-left: 18px;
    
        &.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
          background-color: ${(props) => props.theme.primary};
          color: #FFF;
        }
      }
    }
  }
`;

export const CustomIcon = <Icon type="solid" icon="fa-caret-down" />;