import React from 'react';
import styled from 'styled-components';

// Components
import { Icon } from '~/components';

// Ant
import { Modal } from 'antd';

export const ModalStyle = styled(Modal)`
  border-radius: 4px !important;

  .ant-modal-header {
    padding-left: 0;
    border-bottom: 1px solid #BFBFBF;
    padding-bottom: 12px;
    
    .ant-modal-title {
      font-weight: bold;
      font-size: ${(props) => props.theme?.Typography?.Size.Small};
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-modal-footer {
    padding-top: 12px;
    border-top: 1px solid #BFBFBF;
  }
`;

export const CloseIcon = <Icon type="solid" icon="fa-times" />;
