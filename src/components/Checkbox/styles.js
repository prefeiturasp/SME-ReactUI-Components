import styled from 'styled-components';

// Ant
import { Checkbox } from 'antd';

export const CheckboxStyle = styled(Checkbox)`
  .ant-checkbox-checked {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
    }

    &::after {
      border-color: ${(props) => props.theme.primary} !important;
    }
  }

  &:hover {
    .ant-checkbox-inner {
      border-color: ${(props) => props.theme.primary};
    }
  }
  
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border-color: ${(props) => props.theme.primary};
  }

  // Disabled
  .ant-checkbox-disabled {
    .ant-checkbox-inner {
      background-color: ${(props) => props.theme.disabled};
      border-color: ${(props) => props.theme.disabled} !important;
    }

    &.ant-checkbox-checked {
      .ant-checkbox-inner::after {
        border-color: #FFF;
      }
    }
  }
`;
