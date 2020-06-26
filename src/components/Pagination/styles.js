import styled from 'styled-components';

// Ant
import { Pagination  } from 'antd';

const SIZES = {
  small: 24,
  medium: 32,
  large: 40,
};

export const PaginationStyle = styled(Pagination)`
  li {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #DADADA !important;
    min-width: ${props => `${SIZES[props.size]}px`};
    height: ${props => `${SIZES[props.size]}px`};
    border-radius: 0;
    margin-right: -1px !important;
    transition: background 0.3s ease;

    a {
      font-size: ${props => props.theme?.Typography?.Size.XSmall};
    }

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
        color: ${props => props.theme?.Colors?.Primary};
      }
    }

    &.ant-pagination-item-active {
      background-color: ${props => props.theme?.Colors?.Primary};
      border-color: ${props => props.theme?.Colors?.Primary} !important;
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