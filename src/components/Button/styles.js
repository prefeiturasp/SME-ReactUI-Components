import styled from 'styled-components';

// Ant
import { Button } from 'antd';

export const Teste = styled(Button)``;

export const ButtonStyle = styled(Button)`
  font-family: 'Roboto', sans-serif !important;
  font-weight: 700;
  font-size: 14px;
  border-radius: 0.25rem;
  min-width: 65px;
  overflow: hidden;

  i {
    font-size: 14px;
    margin-right: 8px;
  }

  &.ant-btn-sm {
    font-size: 11px;

    i {
      font-size: 11px;
      margin-right: 8px;
    }
  }

  &.ant-btn-lg {
    font-size: 17px;

    i {
      font-size: 17px;
      margin-right: 8px;
    }
  }

  &.ant-btn-primary {
    background-color: ${(props) => props.theme.primary} !important;
    border-color: ${(props) => props.theme.primary} !important;

    &:hover {
      background-color: ${(props) => props.theme.primaryDark} !important;
    }
  }

  &.ant-btn-secondary {
    background-color: #086397 !important;
    border-color: #086397 !important;
    color: white;
  }

  ${(props) =>
    props.outline &&
    `
    &.ant-btn-primary {
      background-color: transparent !important;
      color: ${props.theme.primary} !important;

      &:hover {
        background-color: ${props.theme.primary} !important;
        color: white !important;
      }
    }

    &.ant-btn-secondary {
      background-color: transparent !important;
      color: #086397 !important;

      &:hover {
        background-color: #086397 !important;
        color: white !important;
      }
    }
  `}
`;
