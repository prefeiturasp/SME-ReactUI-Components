import styled from 'styled-components';

// Ant
import { Button } from 'antd';

export const Teste = styled(Button)``;

export const ButtonStyle = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  font-weight: ${(props) =>
    props.theme?.Typography?.FontWeight?.Bold} !important;
  font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  border-radius: 0.25rem;
  overflow: hidden;
  pointer-events: initial !important;

  .sme__icon + .button__content {
    margin-left: ${(props) => props.theme?.Spacing?.XXS} !important;
  }

  &.ant-btn-group {
    background: red;
  }

  &:disabled {
    background: transparent !important;
    border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
    color: ${(props) => props.theme?.Colors?.Disabled} !important;
  }

  i {
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  }

  &.ant-btn-link {
    color: ${(props) => props.theme?.Colors?.Info} !important;
    border: none;

    &:hover {
      background: transparent;
    }

    &:disabled {
      color: ${(props) => props.theme?.Colors?.Disabled} !important;
    }
  }

  &.ant-btn-sm {
    font-size: ${(props) => props.theme?.Typography?.Size?.XXSmall};

    i {
      font-size: ${(props) => props.theme?.Typography?.Size?.XXSmall};
    }
  }

  &.ant-btn-lg {
    font-size: ${(props) => props.theme?.Typography?.Size?.Small};

    i {
      font-size: ${(props) => props.theme?.Typography?.Size?.Small};
    }
  }

  &.ant-btn-primary {
    background-color: ${(props) => props.theme?.Colors?.Primary} !important;
    border-color: ${(props) => props.theme?.Colors?.Primary} !important;

    &:hover:not(:disabled) {
      background-color: ${(props) =>
        props.theme?.Colors?.PrimaryDark} !important;
    }

    &:disabled {
      background: transparent !important;
      border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
      color: ${(props) => props.theme?.Colors?.Disabled} !important;
    }
  }

  &.ant-btn-secondary {
    background-color: ${(props) => props.theme?.Colors?.Info} !important;
    border-color: ${(props) => props.theme?.Colors?.Info} !important;
    color: white;

    &:disabled {
      background: transparent !important;
      border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
      color: ${(props) => props.theme?.Colors?.Disabled} !important;
    }
  }

  ${(props) =>
    props.outline &&
    `
    &.ant-btn-primary {
      background-color: transparent !important;
      color: ${props.theme?.Colors?.Primary} !important;

      &:hover:not(:disabled) {
        background-color: ${props.theme?.Colors?.Primary} !important;
        color: white !important;
      }
    }

    &.ant-btn-secondary {
      background-color: transparent !important;
      color: ${props.theme?.Colors?.Info} !important;

      &:hover:not(:disabled) {
        background-color: ${props.theme?.Colors?.Info} !important;
        color: white !important;
      }
    }
  `}
`;

export const ButtonGroupStyle = styled(Button.Group)`
  .ant-btn:not(:nth-child(1)) {
    margin-left: -1px !important;
  }
`;
