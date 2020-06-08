import styled from 'styled-components';

// Ant
import { Collapse } from 'antd';

export const CollapseStyle = styled(Collapse)`
  box-shadow: 0px 0px 4px -2px grey;
  width: 100%;

  &.ant-collapse-icon-position-right {
    span.float-icon {
      position: absolute;
      right: 15px;
      top: 13px;
    }
  }
`;

export const PanelStyle = styled(Collapse.Panel)`
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.15px;
  width: 100%;

  .ant-collapse-header {
    padding: 18px 40px 18px 18px !important;
    ${(props) => props.bordered && `border-radius: 4px !important`};
    ${(props) =>
      props.bordered &&
      `border-left: 7px solid ${
        props.borderColor ? props.borderColor : `${props.theme.primary}`
      }`};
  }

  &.ant-collapse-item-active {
    .ant-collapse-header {
      box-shadow: 0px 3px 4px -3px #42474a94;
      padding: 18px 16px;
      padding-right: 40px;
    }
  }
`;
