import styled from 'styled-components';

// Ant
import { Breadcrumb } from 'antd';

export const BreadcrumbStyle = styled(Breadcrumb)`
  .ant-breadcrumb-link,
  .ant-breadcrumb-link > i {
    color: ${(props) => props.theme.primary};
    &:hover {
      color: ${(props) => props.theme.primaryLight};
    }
  }
`;
