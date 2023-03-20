import styled from 'styled-components';
import { Menu } from 'antd';

export const MenuStyle = styled(Menu)`
  background-color: ${(props) => props.theme?.Colors?.Primary};
  &.ant-menu-inline-collapsed {
    width: 120px !important;
  }
`;
export const SubMenuStyle = styled(Menu.SubMenu)`
  padding-bottom: 0 !important;
  span {
    color: white;
  }
  .ant-menu-submenu-arrow {
    color: white;
  }
  .ant-menu-submenu-title {
    background-color: rgba(0, 0, 0, 0.06) !important;
    margin-inline: 8px !important;
    margin-block: 8px !important;
    width: calc(100% - 16px) !important;
    overflow: initial !important;

    span {
      ${(props) =>
        props.collapsed
          ? `
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      `
          : null}
    }
    ${(props) =>
      props.collapsed &&
      `
      height: 70px !important;
    `}
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
  background-color: rgba(0, 0, 0, 0.06) !important;
  margin-inline: 8px !important;
  margin-block: 8px !important;
  width: calc(100% - 16px) !important;
  ${(props) =>
    props.collapsed &&
    `
    height: 70px !important;
  `}
  .ant-menu-title-content {
    height: 100% !important;
  }
  span {
    color: white;
    ${(props) =>
      props.collapsed
        ? `
    display: flex !important;
    flex-direction: column !important;
    align-items: center !important;
    `
        : null}
  }
`;
export const MenuButtonTogle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px !important;
  background-color: rgba(0, 0, 0, 0.06) !important;
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
  ${(props) =>
    props.collapsed
      ? `
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    word-wrap: break-word;
    overflow: hidden;
    white-space: pre-wrap;
    line-height: 1.2em;
    text-align: center;
    span {
      font-size: 1em;
      padding-top: 5px;
    }  
  `
      : `
    span {
      padding-left: 5px
    }
  `}
`;
