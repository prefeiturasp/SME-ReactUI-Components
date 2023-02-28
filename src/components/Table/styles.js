import React from 'react';
import styled from 'styled-components';
import { Icon } from '~/components';
// Ant
import { Table } from 'antd';

export const TableStyle = styled(Table)`

  .ant-table-bordered >.ant-table-container {
    border-inline-start: 1px solid #BFBFBF !important; 
  }
  
  .ant-table-tbody >tr >td {
    border-bottom: 1px solid #BFBFBF !important; 
    border-inline-end: 1px solid #BFBFBF !important; 
  }
  
  .ant-table-thead >tr>th, .ant-table-thead > tr > td {
    border-bottom: 1px solid #BFBFBF !important; 
    border-top: 1px solid #BFBFBF !important; 
    border-inline-end: 1px solid #BFBFBF !important;
  }

  &>tfoot>tr>td{
    border-inline-end: 1px solid #BFBFBF !important;
  }
  
  tr:nth-child(even) {
    background-color: #F5F6F8;
  }

  .ant-table-container {
    border-radius: 8px; 
  }

  .ant-table-tbody > tr:last-child >*:first-child{
    border-end-start-radius: 8px !important;
  }

  .ant-table-tbody > tr:last-child >*:last-child{
    border-end-end-radius: 8px !important;
  }

  .ant-table-thead > tr > th {
    background-color: #EAEAEA;
    color: #42474A;
    font-weight: bold;
  }

  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row):not(.ant-table-row-selected) > td, .ant-table-tbody > tr.ant-table-row-selected td {
    background-color: #E2DEF0;
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: ${props => props.theme?.Colors?.Primary} !important;
    border-color: ${props => props.theme?.Colors?.Primary} !important;
  }

  .ant-checkbox-checked:after {
    border: 2px solid ${props => props.theme?.Colors?.Primary} !important;
  }

  .ant-checkbox-input:hover {
    border-color: ${props => props.theme?.Colors?.Primary} !important;
  }

  .ant-checkbox-indeterminate .ant-checkbox-inner:after {
    background-color: ${props => props.theme?.Colors?.Primary} !important;
  }
  
  .ant-checkbox:not(.ant-checkbox-disabled):hover .ant-checkbox-inner{
    border-color: ${props => props.theme?.Colors?.Primary} !important;
  }

  .ant-table-thead >tr>td {
    background-color: #EAEAEA;
  }

  .ant-table-tbody >tr.ant-table-row-selected:hover>td{
    background-color: #E2DEF0;
  }

  .ant-table.ant-table-small {
    font-size: 12px;
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

export const ArrowDown = <Icon type="solid" color="dark" icon="fa-chevron-down" size="xs"/>;
export const ArrowUp = <Icon type="solid" color="dark" icon="fa-chevron-up" size="xs"/>;
