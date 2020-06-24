import styled from 'styled-components';

// Ant
import { Checkbox } from 'antd';

export const CheckboxStyle = styled(Checkbox)`
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme?.Colors?.Primary};
      border-color: ${(props) => props.theme?.Colors?.Primary};
    }

    &::after {
      border-color: ${(props) => props.theme?.Colors?.Primary} !important;
    }
  }

  &:hover {
    .ant-checkbox-inner {
      border-color: ${(props) => props.theme?.Colors?.Primary};
    }
  }
  
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${(props) => props.theme?.Colors?.Primary};
  }

  .ant-checkbox + span {
    font-size: ${(props) => props.theme?.Typography?.Size.XSmall};
  }

  // Disabled
  .ant-checkbox-disabled {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme?.Colors?.disabled};
      border-color: ${(props) => props.theme?.Colors?.disabled} !important;
    }

    &.ant-checkbox-checked {
      .ant-checkbox-inner::after {
        border-color: #FFF;
      }
    }
  }
`;
