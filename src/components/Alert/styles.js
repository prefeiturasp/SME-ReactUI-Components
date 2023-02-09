import React from 'react';
import styled from 'styled-components';

// Ant
import { Alert } from 'antd';

// Utils
import Utils from './utils';

export const AlertToastStyle = styled(Alert)`
  width: auto;
  margin: 0.3rem 0 !important;
  font-weight: bold;
  text-align: left;
  background-color: #333638;
  ${(props) =>
  `
    border-bottom: 3px solid ${Utils.Colors[props.type.toUpperCase()]};
    .ant-alert-close-icon {
      top: 5px;
      right: 5px;
      .anticon-close{
        color: ${props.theme?.Colors?.Light};
      }
    }
    .ant-alert-message {
        color: ${props.theme?.Colors?.Light};
    }
    .ant-alert-description {
      color: ${props.theme?.Colors?.Light};
      font-weight: initial;
    }
  `}
`;

export const AlertToastrStyle = styled.div`
  ${(props) =>
    props.float &&
    `
    position: absolute;
    z-index: 99999;
    min-width: 40%;

    ${
      props.position === Utils.Position.BOTTOM_RIGHT &&
      `
        bottom: 0;
        right: 0;
    `
    }

    ${
      props.position === Utils.Position.BOTTOM_LEFT &&
      `
        bottom: 0 !important;
        left: 0;
    `
    }

    ${
      props.position === Utils.Position.TOP_LEFT &&
      `
        top: 0;
        left: 0;
    `
    }

    ${
      props.position === Utils.Position.TOP_RIGHT &&
      `
        top: 0;
        right: 0;
    `
    }
  `}
`;

export const AlertBoxStyle = styled.div`
  border: 2px solid ${(props) => props.theme?.Colors?.Warning};
  color: ${(props) => props.theme?.Colors?.Warning};
  border-radius: 0.2rem;
  text-align: center;
  padding: 1.5rem;
  font-size: 15px;

  h2 {
    color: ${(props) => props.theme?.Colors?.Warning};
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
