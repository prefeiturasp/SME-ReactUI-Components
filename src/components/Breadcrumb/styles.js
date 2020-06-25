import styled from 'styled-components';

// Ant
import { Breadcrumb } from 'antd';

export const BreadcrumbStyle = styled(Breadcrumb)`
  .ant-breadcrumb-link,
  .ant-breadcrumb-link > i,
  .ant-breadcrumb-separator > i {
    color: ${(props) => props.theme?.Colors?.Primary};
    &:hover {
      color: ${(props) => props.theme?.Colors?.PrimaryLight};
    }
  }

  .ant-breadcrumb-link {
    &:disabled {
      color: ${(props) => props.theme?.Colors?.disabled} !important;
    }
  }
`;
