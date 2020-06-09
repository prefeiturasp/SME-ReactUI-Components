import styled, { createGlobalStyle } from 'styled-components';

// Ant
import { Select } from 'antd';
const { Option } = Select;

export const SelectStyle = styled(Select)`
  width: 100%;

  .ant-select-selection {
    height: 38px;

    .ant-select-selection__rendered {
      margin-left: 18px;
      margin-right: 0; // toDo: change this
      line-height: 36px;
    }
  }

  // Items
  .ant-select-dropdown-menu-item {
    padding-left: 18px;
  }
`;

export const OptionStyle = styled(Option)``;

export const GlobalStyle = createGlobalStyle`
  .ant-select-dropdown-menu-item {
    color: #F00;
  }
`