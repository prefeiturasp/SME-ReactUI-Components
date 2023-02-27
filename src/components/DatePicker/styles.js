import React from 'react';
import styled from 'styled-components';

// Components
import { Icon } from '~/components';

// Ant
import { DatePicker, TimePicker } from 'antd';
const { RangePicker } = DatePicker;

export const InputContentStyle = styled.div`
  position: relative;
`;

export const IconErrorStyle = styled.div`
  i {
    bottom: 0;
    margin: auto;
    position: absolute;
    right: 2rem;
    top: 21%;
  };
`;

export const DatePickerStyle = styled(DatePicker)`
  ${(props) => `
    min-height: 40px !important;
    height: 40px !important;
    width: 100%;  
    ${props.disabled ? '' : `border: 1px solid ${props.theme?.Select?.colors?.grey?.default} !important;`}
    
    &:focus, &:hover, &:active, &:visited, &:focus-within  {
      ${(props.error || props.disabled) ? '' : `
        border: 1px solid ${props.theme?.Select?.colors.primary?.default} !important;
        .ant-picker-suffix i { 
          transition: all 0.2s ease-out;
          color: ${props.theme?.Select?.colors.primary?.default} !important;
        }
      `}
    }

    ${props.error && `border: 1px solid ${props.theme?.Select?.colors?.error?.default} !important;`}
  `}
`;

export const RangePickerStyle = styled(RangePicker)`
  ${(props) => `
    min-height: 40px !important;
    height: 40px !important;
    width: 100%;

    ${props.disabled ? '' : `border: 1px solid ${props.theme?.Select?.colors?.grey?.default} !important;`}

    &:focus, &:hover, &:active, &:visited, &:focus-within  {
      ${(props.error || props.disabled) ? '' : `
        border: 1px solid ${props.theme?.Select?.colors.primary?.default} !important;
        .ant-picker-suffix i { 
          transition: all 0.2s ease-out;
          color: ${props.theme?.Select?.colors?.primary?.default} !important;
        }
        .ant-picker-active-bar{
          background-color: ${props.theme?.Select?.colors.primary?.default} !important;
        }
      `}
    }
  
    ${props.error && `
      border: 1px solid ${props.theme?.Select?.colors?.error?.default} !important;
      .ant-picker-active-bar{
        background-color: ${props.theme?.Select?.colors?.error?.default} !important;
      }      
    `}
    `
  }
`;

export const TimePickerStyle = styled(TimePicker)`
  ${(props) => `
    min-height: 40px !important;
    height: 40px !important;
    width: 100%;

    ${props.disabled ? '' : `border: 1px solid ${props.theme?.Select?.colors?.grey?.default} !important;`}

    &:focus, &:hover, &:active, &:visited, &:focus-within  {
      ${(props.error || props.disabled) ? '' : `
        border: 1px solid ${props.theme?.Select?.colors.primary?.default} !important;
        .ant-picker-suffix i { 
          transition: all 0.2s ease-out;
          color: ${props.theme?.Select?.colors?.primary?.default} !important;
        }
        .ant-picker-active-bar{
          background-color: ${props.theme?.Select?.colors.primary?.default} !important;
        }
      `}
    }
  
    ${props.error && `
      border: 1px solid ${props.theme?.Select?.colors?.error?.default} !important;
      .ant-picker-active-bar{
        background-color: ${props.theme?.Select?.colors?.error?.default} !important;
      }      
    `}
    `
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

export const ErrorIcon = <Icon icon="fa-circle-exclamation" size="xs" color="error"/>;

