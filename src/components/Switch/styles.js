import styled from 'styled-components';

// Ant
import { Switch } from 'antd';

export const SwitchStyle = styled(Switch)`
  ${(props) =>
    props.isFrequence &&
    `
    &.ant-switch-checked {
    background-color: white;
  }

  &.ant-switch {
    border: solid 1px #DADADA;
    background-color: white;
  }

  &.ant-switch-inner {
    color: grey;
  }
        ${
          props.checked
            ? `
        &.ant-switch::after {
            content: 'C' !important;
            background-color: #297805;
            color: white;
            font-size: 11px;
            font-weight: bold;
        }
        `
            : `
        &.ant-switch::after {
      content: 'F' !important;
      background-color: #b40c02;
      color: white;
      font-size: 11px;
            font-weight: bold;
    }
        `
        }
    `}
`;
