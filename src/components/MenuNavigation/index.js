import React, { useState } from 'react';
import t from 'prop-types';

import {
  MenuStyle,
  SubMenuStyle,
  MenuItemStyle,
  MenuButtonTogle,
  MenuTitleStyle,
} from './styles';
import Icon from '../Icon';
import Button from '../Button';
import Typography from '../Typography';
import MenuLogo from './menu-logo.png';

function MenuNavigation({ defaultSelectedKeys, defaultOpenKeys }) {
  const [collapsed, setCollapse] = useState(false);

  const options = [
    {
      name: 'Planejamento estratégico',
      icon: 'fa-house',
      submenus: [
        {
          name: 'Notícias',
        },
      ],
    },
    {
      name: 'Calendário Escolar',
      icon: 'fa-user',
    },
    {
      name: 'Diário de Classe',
      icon: 'fa-wrench',
    },
    {
      name: 'Fechamento',
      icon: 'fa-circle-question',
    },
  ];

  function handleToggleMenu() {
    setCollapse((prev) => !prev);
  }

  return (
    <div style={{ width: 264 }}>
      <MenuStyle
        defaultSelectedKeys={defaultSelectedKeys}
        defaultOpenKeys={defaultOpenKeys}
        mode="inline"
        inlineCollapsed={collapsed}
      >
        <MenuButtonTogle collapsed={collapsed}>
          {!collapsed ? <img src={MenuLogo}></img> : null}
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
        </MenuButtonTogle>
        {options.map((opt, index) => {
          return opt.submenus ? (
            <SubMenuStyle
              collapsed={collapsed}
              key={index}
              title={
                <MenuTitleStyle collapsed={collapsed}>
                  {opt.icon ? (
                    <Icon
                      type="solid"
                      icon={opt.icon}
                      color="light"
                      size="xs"
                    />
                  ) : null}
                  <span>{opt.name}</span>
                </MenuTitleStyle>
              }
            >
              {opt.submenus.map((sub, subIndex) => {
                return (
                  <MenuItemStyle key={subIndex}>
                    <span>{sub.name}</span>
                  </MenuItemStyle>
                );
              })}
            </SubMenuStyle>
          ) : (
            <MenuItemStyle key={index} collapsed={collapsed}>
              <MenuTitleStyle collapsed={collapsed}>
                {opt.icon ? (
                  <Icon type="solid" icon={opt.icon} color="light" size="xs" />
                ) : null}
                <span>{opt.name}</span>
              </MenuTitleStyle>
            </MenuItemStyle>
          );
        })}
      </MenuStyle>
    </div>
  );
}

MenuNavigation.propTypes = {
  defaultSelectedKeys: t.array,
  defaultOpenKeys: t.array,
};

MenuNavigation.defaultProps = {};

export default MenuNavigation;
