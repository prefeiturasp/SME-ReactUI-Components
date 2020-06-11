import styled from 'styled-components';

// Ant
import { Pagination  } from 'antd';

export const PaginationStyle = styled(Pagination)`
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #DADADA;
    min-width: 56px;
    height: 56px;
    border-radius: 0;
    margin-right: -1px;
    transition: background 0.3s ease;

    &:focus, &:hover {
      border-color: #DADADA;
    }

    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    
    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &:hover {
      background-color: #fafafa;

      a {
        color: ${props => props.theme.primary};
      }
    }

    &.ant-pagination-item-active {
      background-color: ${props => props.theme.primary};
      border-color: ${props => props.theme.primary};
      position: relative;
      z-index: 1;

      a {
        color: #FFF;
      }
    }

    &.ant-pagination-jump-next, &.ant-pagination-jump-prev {
      color: #DADADA;
    }

    &.ant-pagination-disabled {
      i {
        opacity: 0.3;
      }
    }
  }
`;