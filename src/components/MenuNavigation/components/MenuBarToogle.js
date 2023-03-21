import React from 'react';
import { MenuButtonTogleStyle } from '../styles';
import Icon from '../../Icon';
import Button from '../../Button';

export default function MenuBarToogle({
  collapsed,
  handleToggleMenu,
  navLogo,
}) {
  return (
    <MenuButtonTogleStyle collapsed={collapsed}>
      {!collapsed && navLogo ? <img src={navLogo}></img> : null}
      <Button
        type="text"
        onClick={handleToggleMenu}
        icon={
          <Icon
            type="solid"
            icon={collapsed ? 'fa-bars' : 'fa-close'}
            color="light"
            size="xs"
          />
        }
      />
    </MenuButtonTogleStyle>
  );
}
