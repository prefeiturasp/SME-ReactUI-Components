import styled from 'styled-components';

// Ant
import { Collapse } from 'antd';

export const CollapseStyle = styled(Collapse)`
  width: 100%;

  &.ant-collapse-icon-position-right {
    span.float-icon {
      position: absolute;
      right: 15px;
      top: 10px;
    }
  }

  &.ant-collapse{
    border: none !important;
    background-color: transparent !important;
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
    min-height: 3rem !important;
    box-shadow: 0px 1px 4px rgba(8, 35, 48, 0.1);
    background: ${(props) => props.theme?.Colors?.Light};
    ${(props) => props.bordered && 
      `border-radius: 4px !important`};
    ${(props) => props.bordered && 
      `border-left: 7px solid ${`${props.theme?.Collapse?.colors?.[props.borderColor]?.default}`}`};
    ${(props) => (props.bordered && props.disabled) &&  
      `border-left: 7px solid ${`${props.theme?.Collapse?.colors?.[props.borderColor]?.default}66`}`};
    .ant-collapse-expand-icon{
      ${(props) => props.disabled &&  
        `opacity: 0.1`};
    }
  }
  &.ant-collapse-item {
    margin-bottom: 1em;
    border-bottom: 0 !important;
    .ant-collapse-content {
      border-radius: 0px 0px 4px 4px !important;
      border-top: 0 !important;
      border: 1px solid #DADADA;
      box-shadow: 0px 1px 4px rgb(8 35 48 / 10%);
    }
  }
`;

export const PanelHeaderStyle = styled.div`
  display: flex;
`;

export const PanelHeaderIconContentStyle = styled.div`
  margin-right: 1rem;
`;

export const PanelHeaderTextStyle = styled.div``;

export const PanelHeaderTitleStyle = styled.span`
  display: block;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
`;

export const PanelHeaderSubtitleStyle = styled.span`
  display: block;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  opacity: 0.7;
`;
