import React from 'react';
import styled from 'styled-components';

// Components
import { Icon } from '~/components';

// Ant
import { Modal } from 'antd';

export const ModalStyle = styled(Modal)`
  .ant-modal-header {
    margin: 0 24px;
    padding-left: 0;
    
    .ant-modal-title {
      font-weight: bold;
    }
  }

  .ant-modal-close-x {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .ant-modal-footer {
    border-top: 0;
  }
`;

export const CloseIcon = <Icon type="solid" icon="fa-times" />;