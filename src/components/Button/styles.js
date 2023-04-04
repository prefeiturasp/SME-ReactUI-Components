import styled from 'styled-components';

// Ant
import { Button } from 'antd';

export const ButtonStyle = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  overflow: hidden;
  pointer-events: initial !important;

  .sme__icon + .button__content {
    margin-left: ${(props) => props.theme?.Spacing?.XXS} !important;
  }

  &.ant-btn:disabled i{
    color: unset !important;
  }

  &.ant-btn:not(.ant-btn-group *){
    border-radius: 4px !important;
  }
  
  &.ant-btn-group {
    background: red;
  }

  &:disabled {
    background: transparent !important;
    border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
    color: ${(props) => props.theme?.Colors?.Disabled} !important;
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

  &.ant-btn-primary {
    background-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
    border-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

    &:hover:not(:disabled) {
      background-color: ${(props) => props.theme?.Button.colors[props.color]?.dark}  !important;
    }

    &:disabled {
      background: transparent !important;
      border-color: ${(props) => props.theme?.Colors?.Disabled} !important;
      color: ${(props) => props.theme?.Colors?.Disabled} !important;
    }
  }

  &.ant-btn-text {
    color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

    &:disabled{
      color: ${(props) => props.theme?.Colors?.Disabled} !important;
      border: unset !important;
    }
  }

  &.ant-btn-outlined:not(:disabled) {
    background-color: transparent !important;
    color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;
    border-color: ${(props) => props.theme?.Button.colors[props.color]?.default} !important;

    &:hover:not(:disabled) {
      background-color: ${(props) => props.theme?.Button.colors[props.color]?.dark}66 !important;
      color: ${(props) => props.theme?.Button.colors[props.color]?.dark} !important;
      border-color: ${(props) => props.theme?.Button.colors[props.color]?.dark} !important;
    }
    &:not(:disabled):focus-visible{
      background-color: transparent !important;
      color: ${(props) => props.theme?.Colors[props.color]} !important;
      outline: unset;
    }
  }
`;

export const ButtonGroupStyle = styled(Button.Group)`
  .ant-btn:not(:nth-child(1)) {
    margin-left: -1px !important;
  }
`;
