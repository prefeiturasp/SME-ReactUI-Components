import styled from 'styled-components';

// Ant
import { Tag } from 'antd';
const { CheckableTag } = Tag;

const lineHeights = {
  small: '16px',
  medium: '20px',
  large: '36px',
}

export const TagStyle = styled(Tag)`
  line-height: ${props => lineHeights[props.size]};
  padding: ${props => props.closable ? '0 6px 0 12px' : '0 12px'};
  background-color: #F5F6F8;
`;

export const CheckableTagStyle = styled(CheckableTag)`
  cursor: pointer;
  line-height: ${props => lineHeights[props.size]};
  padding: 0 12px;
  background-color: #F5F6F8;
  border-color: #D9D9D9;

  &:not(.ant-tag-checkable-checked):hover {
    color: ${props => props.theme.primary};
  }
  
  &.ant-tag-checkable-checked {
    background-color: ${props => props.theme.primary};
    color: #FFF;
    border-color: transparent;
  }
`
