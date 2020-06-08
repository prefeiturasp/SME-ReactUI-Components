import styled from 'styled-components';

// Ant
import { Radio } from 'antd';

export const RadioStyle = styled(Radio)`
  .ant-radio-checked {
    .ant-radio-inner {
      border-width: 2px;
      border-color: ${(props) => props.theme.primary};
      
      &::after {
        background-color: ${(props) => props.theme.primary};
        width: 6px;
        height: 6px;
      }
    }

  }

  &:hover {
    .ant-radio-inner {
      border-color: ${(props) => props.theme.primary};
    }
  }
  
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${(props) => props.theme.primary};
  }

  // Disabled
  .ant-radio-disabled {
    .ant-radio-inner {
      background-color: ${(props) => props.theme.disabled};
      border-color: ${(props) => props.theme.disabled} !important;
    }

    &.ant-radio-checked {
      
      .ant-radio-inner {
        background-color: transparent;

        &::after {
          background-color: ${(props) => props.theme.disabled};
        }
      }
    }
  }
`;
