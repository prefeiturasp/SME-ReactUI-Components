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

      // Multiselect - Placeholder
      .ant-select-selection__placeholder {
        margin-left: 0;
        font-size: ${(props) => props.theme?.Typography?.Size.XSmall};
      }

      .ant-select-selection-selected-value {
        font-size: ${(props) => props.theme?.Typography?.Size.XSmall};
      }

      // Multiselect - tag
      .ant-select-selection__choice {
        display: inline-flex;
        align-items: center;
        padding-left: 6px;
        margin-top: 6px;
        border-radius: 6px;
        font-size: ${(props) => props.theme?.Typography?.Size.XSmall};

        &:first-child {
          margin-left: -7px;
        }
      }
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-left: 18px;
        padding-right: 10px !important;
        font-size: ${(props) => props.theme?.Typography?.Size.XSmall};
    
        &.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
          background-color: ${(props) => props.theme?.Colors?.Primary};
          color: #FFF;
        }

        // Multiselect icons
        .fa-check-square {
          display: none;
        }

        &.ant-select-dropdown-menu-item-selected {
          .fa-square {
            display: none;
          }

          .fa-check-square {
            display: block;
          }
        }

        .notFound + i {
          display: none;
        }
      }
    }
  }
`;

export const SuffixIcon = <Icon type="solid" icon="fa-caret-down" />;

export const MenuItemSelectedIcon = (
  <>
    <Icon type="regular" icon="fa-square" />
    <Icon type="solid" icon="fa-check-square" />
  </>
);

export const NotFoundContent = <span className="notFound">Nada encontrado</span>