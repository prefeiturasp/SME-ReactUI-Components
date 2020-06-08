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
`;
