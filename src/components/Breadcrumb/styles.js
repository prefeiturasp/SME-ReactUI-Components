import styled from 'styled-components';

// Ant
import { Breadcrumb } from 'antd';

export const BreadcrumbStyle = styled(Breadcrumb)`
  .ant-breadcrumb-link:not(:disabled),
  .ant-breadcrumb-link > i,
  .ant-breadcrumb-separator > i {
    color: ${(props) => props.theme?.Colors?.Primary};
    font-size: ${(props) => props.theme?.Typography?.Size?.XXSmall};

    &:hover {
      color: ${(props) => props.theme?.Colors?.PrimaryLight} !important;
    }
  }
`;

export const BreadcrumbItemStyle = styled(Breadcrumb.Item)`
  font-size: ${(props) => props.theme?.Typography?.Size?.XXSmall};

  ${(props) =>
    !props.disabled &&
    `
    color: ${props.theme?.Colors?.Primary} !important;
    &:hover {
      color: ${props.theme?.Colors?.PrimaryLight} !important;
    }
  `}

  ${(props) =>
    props.disabled &&
    `
    color: ${props.theme?.Colors?.neutralDark} !important;
  `}
`;
