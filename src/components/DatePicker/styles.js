import styled from 'styled-components';

// Ant
import { DatePicker } from 'antd';

export const DatePickerStyle = styled(DatePicker)`
  .ant-input,
  .ant-calendar-picker-input {
    min-height: 38px !important;
    height: 38px !important;

    &:focus,
    &:hover:not(:disabled) {
      border-color: ${(props) => props.theme?.Colors?.Primary} !important;
      box-shadow: 0 0 0 2px #6933ff1c;
    }
  }
`;
