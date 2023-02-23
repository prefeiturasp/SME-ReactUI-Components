import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// Components
import { Icon } from '~/components';

// Ant
import { Select } from 'antd';
const { Option } = Select;


export const SelectContentStyle = styled.div`
  position: relative;
`;

export const IconErrorStyle = styled.div`
  i {
    bottom: 0;
    margin: auto;
    position: absolute;
    right: 2rem;
    top: 34%;
  };
`;

export const SelectStyle = styled(Select)`
  width: 100%;
  background-color: #ffff !important;

  .ant-select-selector {
    height: 40px !important;
    border: 1px solid ${(props) => props.disabled ? '' : props.theme?.Select?.colors?.grey?.default} !important;

    .ant-select-selection-placeholder{
      line-height: 40px !important;
    }
    .ant-select-selection-item {
      ${(props) => props.mode !== 'multiple' && `line-height: 40px !important;`};
      ${(props) => props.mode === 'multiple' ? `border: 1px solid ${props.theme?.Select?.colors?.grey?.default}` : ''} !important;
    }
    &:focus, &:hover, &:active, &:visited, &:focus-within  {
      border: 1px solid ${(props) => props.error ? props.theme?.Select?.colors?.error?.default : props.theme?.Select?.colors.primary?.default} !important;
    }
    ${(props) => props.error &&
      `border: 1px solid ${props.theme?.Select?.colors?.error?.default} !important;`
    }
  }
  .ant-select-selection {
    height: 40px;

    .ant-select-selection__rendered {
      margin-left: 18px;
      margin-right: 0; // toDo: change this
      line-height: 40px;

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
        min-height: 39px !important;

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

export const HelptexttStyle = styled.span`
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  ${(props) => props.error ? (
    `color: ${props.theme?.Select?.colors?.error?.default};`
  ) : (
    `color: #6F777C;`
  )}
  margin-top: 5px;
  margin-left: 5px;
`;

export const SuffixIcon = <Icon type="solid" icon="fa-chevron-down" size="xs"/>;

export const MenuItemSelectedIcon = (
    <Icon type="solid" icon="fa-check-square" />
);

export const NotFoundContent = <span className="notFound">Nada encontrado</span>

export const ErrorIcon = <Icon icon="fa-circle-exclamation" size="xs" color="error"/>;