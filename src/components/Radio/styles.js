import styled from 'styled-components';

// Ant
import { Radio } from 'antd';

export const RadioStyle = styled(Radio)`
  .ant-radio + span {
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  }

  .ant-radio-checked {
    .ant-radio-inner {
      border-width: 2px;
      border-color: ${(props) => props.theme?.Colors?.Primary};
      
      &::after {
        background-color: ${(props) => props.theme?.Colors?.Primary};
        width: 6px;
        height: 6px;
      }
    }
  }

  &:hover {
    .ant-radio-inner {
      border-color: ${(props) => props.theme?.Colors?.Primary};
    }
  }
  
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: ${(props) => props.theme?.Colors?.Primary};
  }

  // Disabled
  .ant-radio-disabled {
    .ant-radio-inner {
      background-color: ${(props) => props.theme?.Colors?.disabled};
      border-color: ${(props) => props.theme?.Colors?.disabled} !important;
    }

    &.ant-radio-checked {
      
      .ant-radio-inner {
        background-color: transparent;

        &::after {
          background-color: ${(props) => props.theme?.Colors?.disabled};
        }
      }
    }
  }
`;
