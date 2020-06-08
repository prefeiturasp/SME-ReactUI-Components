import styled from 'styled-components';

// Ant
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

export const SpinStyle = styled(Spin)`
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .ant-spin-text {
    position: relative !important;
    top: auto !important;
    color: #353535;
    font-size: 14px;
  }
`;

export const LoadingOutlinedStyle = styled(LoadingOutlined)`
  font-size: ${(props) => `${props.size}px !important`};
  margin: 0 !important;
  position: relative !important;
  top: auto !important;
  left: auto !important;

  &:before {
    display: block;
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    border: ${(props) => `${props.size * 0.07}px`} solid rgba(0, 0, 0, 0.04);
  }

  svg {
    fill: ${(props) => props.theme.primary};
  }
`;