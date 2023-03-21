import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuStyle = styled(Menu)`
  padding: 12px;
  background-color: ${(props) => props.theme?.Colors?.Primary};
  &.ant-menu-inline-collapsed {
    width: 88px !important;
  }
`;
export const SubMenuStyle = styled(Menu.SubMenu)`
  padding-bottom: 0 !important;
  &:hover {
    background-color: transparent !important;
  }
  background-color: rgba(0, 0, 0, 0.06) !important;
  .ant-menu-submenu-title {
    span,
    i {
      font-weight: 600;
      color: white !important;
    }
  }
  .ant-menu-submenu-title {
    width: 100% !important;
    margin-inline: 0 !important;
  }
  &.ant-menu-submenu-open {
    ul {
      background: white !important;
      border-radius: 4px !important;
    }
    .ant-menu-submenu-title {
      width: 100%;
      background: white !important;

      border-radius: 4px !important;
      span,
      i {
        color: #f26419 !important;
      }
    }
  }
  .ant-menu-submenu-arrow {
    color: white;
  }

  .ant-menu-inline-collapsed > .ant-menu-submenu > .ant-menu-submenu-title {
    padding-inline: calc(50% - 18px) !important;
  }
  .ant-menu-vertical > .ant-menu-submenu > .ant-menu-submenu-title {
    height: 56px !important;
  }
  .ant-menu-title-content {
    height: 100% !important;
  }
`;
export const MenuItemStyle = styled(Menu.Item)`
  .ant-menu-item-selected {
    background-color: transparent !important;
  }
  margin-inline: 0 !important;
  ${(props) =>
    props?.submenu
      ? `
  
  &.ant-menu-item-only-child {
    width: 100% !important;
    span,
    i {
      font-weight: 600;
      color: black !important;
    }
  }
  `
      : `
    &.ant-menu-item-only-child {
      width: 100% !important;
      background-color: rgba(0, 0, 0, 0.06) !important;
      span,
      i {
        font-weight: 600;
        color: white !important;
      }
    }
  `}
`;
export const MenuButtonTogleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px !important;

  img {
    font-family: 'Roboto', sans-serif;
    font-size: 1.5rem;
    font-weight: 900;
    padding-left: 24px;
    color: white;
  }
  ${(props) =>
    props.collapsed &&
    `
    button {
      width: 100% !important;
    }
  `}
`;

export const MenuTitleStyle = styled.div`
  ${(props) => props.collapsed && `text-align: center;`}
  span {
    padding-left: 5px;
  }
`;
