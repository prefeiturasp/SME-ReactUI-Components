import React, { useState } from 'react';
import t from 'prop-types';

import {
  MenuStyle,
  SubMenuStyle,
  MenuItemStyle,
  MenuTitleStyle,
} from './styles';

import Icon from '../Icon';
import MenuBarToogle from './components/MenuBarToogle';

function MenuNavigation({
  onClick,
  defaultSelectedKeys,
  defaultOpenKeys,
  items,
  navLogo,
}) {
  const [collapsed, setCollapse] = useState(false);

  function handleToggleMenu() {
    setCollapse((prev) => !prev);
  }

  function MenuTittle(opt) {
    return (
      <MenuTitleStyle collapsed={collapsed}>
        {opt.icon ? (
          <Icon type="solid" icon={opt.icon} color="light" size="xs" />
        ) : null}
        {collapsed ? null : <span>{opt.name}</span>}
      </MenuTitleStyle>
    );
  }

  function getNavs(opt, index) {
    return opt.submenus ? (
      <SubMenuStyle
        collapsed={collapsed}
        key={opt.path}
        title={MenuTittle(opt)}
      >
        {opt.submenus.map((sub, subIndex) => {
          return sub.submenus ? (
            getNavs(sub, subIndex)
          ) : (
            <MenuItemStyle key={sub.path} submenu={true}>
              <span>{sub.name}</span>
            </MenuItemStyle>
          );
        })}
      </SubMenuStyle>
    ) : (
      <MenuItemStyle submenu={false} key={opt.path}>
        {MenuTittle(opt)}
      </MenuItemStyle>
    );
  }

  return (
    <div style={{ width: 264 }}>
      <MenuStyle
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        inlineCollapsed={collapsed}
        mode="inline"
        onClick={onClick}
      >
        <MenuBarToogle
          collapsed={collapsed}
          handleToggleMenu={handleToggleMenu}
          navLogo={navLogo}
        />
        {items.map((opt, index) => {
          return getNavs(opt, index);
        })}
      </MenuStyle>
    </div>
  );
}

MenuNavigation.propTypes = {
  defaultSelectedKeys: t.array,
  defaultOpenKeys: t.array,
  items: t.array,
};

MenuNavigation.defaultProps = {
  items: [],
};

export default MenuNavigation;
