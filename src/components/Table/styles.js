import styled, { createGlobalStyle } from 'styled-components';

// Ant
import { Table } from 'antd';

export const TableStyle = styled(Table)`
  .ant-table-thead > tr > th {
    background-color: #F5F6F8;
    color: #42474A;
    font-weight: bold;
  }
  
  .ant-table-thead > tr > th, .ant-table-tbody > tr > td {
    font-size: ${props => props.theme?.Typography?.Size?.XSmall};
    padding: 14px 14px 14px 25px;
  }

  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr.ant-table-row-selected td {
    background-color: ${props => props.theme?.Colors?.Primary};
    color: #FFF;
  }

  .ant-pagination {
    li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #DADADA !important;
      min-width: 32px;
      height: 32px;
      border-radius: 0;
      margin-right: -1px !important;
      transition: background 0.3s ease;

      a {
        font-size: ${props => props.theme?.Typography?.Size?.XSmall};
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
  }
`;
