import React from 'react';
import styled from 'styled-components';

// Ant
import { Alert } from 'antd';

export const AlertToastStyle = styled(Alert)`
  margin: 0.3rem 0 !important;
  font-weight: bold;
  text-align: center;

  .ant-alert-close-icon {
    top: 5px;
    right: 5px;
  }

  ${(props) =>
    props.type === 'success' &&
    `
    .ant-alert-message {
        color: ${props.theme.success};
    }
  `}

${(props) =>
  props.type === 'info' &&
  `
    .ant-alert-message {
        color: ${props.theme.info};
    }
  `}

${(props) =>
  props.type === 'error' &&
  `
    .ant-alert-message {
        color: ${props.theme.warning};
    }
  `}

${(props) =>
  props.type === 'warning' &&
  `
    .ant-alert-message {
        color: ${props.theme.alert};
    }
  `}
`;

export const AlertToastrStyle = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  min-width: 40%;
  z-index: 99999;
  margin: 0.5rem;
`;

export const AlertBoxStyle = styled.div`
  border: 2px solid ${(props) => props.theme.warning};
  color: ${(props) => props.theme.warning};
  border-radius: 0.2rem;
  text-align: center;
  padding: 1.5rem;
  font-size: 15px;

  h2 {
    color: ${(props) => props.theme.warning};
    margin: 0;
    margin-bottom: 0.5rem;
    line-height: 1;
  }

  ${(props) =>
    props.children.filter((x) => x?.type === 'h2').length > 0 &&
    typeof props.title === 'string' &&
    `
    text-align: left !important;
  `}
`;
