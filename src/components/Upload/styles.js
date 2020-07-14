import styled from 'styled-components';

// Ant
import { Upload } from 'antd';
const { Dragger } = Upload;

export const UploadStyle = styled(Upload)`
  // File uploaded
  .ant-upload-list-item-info span {
    display: flex;
    align-items: center;
  }

  .complementText {
    display: block;
    margin-top: 5px;
    font-size: ${(props) => props.theme?.Typography?.Size?.XXSmall};
  }
  
  .ant-upload-list-item-name {
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  }
  
  .contentPictureCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    &.error {
      color: ${props => props.theme?.Colors?.Alert};
    }
  }
  
  .ant-upload-text {
    margin-top: 5px;
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  }
  
  .ant-upload-select-picture-card:hover {
    border-color: ${props => props.theme?.Colors?.Primary} !important;
  }
  `;
  
export const DraggerStyle = styled(Dragger)`
  height: max-content !important;
  
  .ant-upload-btn {
    padding: 30px 0;
  }

  .ant-upload-text {
    font-size: ${(props) => props.theme?.Typography?.Size?.Small} !important;
  }
  
  .ant-upload-drag-icon {
    font-size: 40px;
    color: ${props => props.theme?.Colors?.Primary};
  }
  
  &:not(.ant-upload-disabled):hover {
    border-color: ${props => props.theme?.Colors?.Primary} !important;
  }

  .ant-upload-list-item-name {
    font-size: ${(props) => props.theme?.Typography?.Size?.XSmall};
  }

  // File uploaded
  + .ant-upload-list .ant-upload-list-item-info span {
    display: flex;
    align-items: center;
  }
`