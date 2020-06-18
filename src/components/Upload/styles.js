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
  }

  .contentPictureCard {
    display: flex;
    flex-direction: column;
    align-items: center;

    &.error {
      color: ${props => props.theme.alert};
    }
  }

  .ant-upload-text {
    margin-top: 5px;
  }

  .ant-upload-select-picture-card:hover {
    border-color: ${props => props.theme.primary} !important;
  }
`;

export const DraggerStyle = styled(Dragger)`
  height: max-content !important;

  .ant-upload-btn {
    padding: 30px 0;
  }

  .ant-upload-drag-icon {
    font-size: 40px;
    color: ${props => props.theme.primary};
  }

  &:not(.ant-upload-disabled):hover {
    border-color: ${props => props.theme.primary} !important;
  }

  // File uploaded
  + .ant-upload-list .ant-upload-list-item-info span {
    display: flex;
    align-items: center;
  }
`