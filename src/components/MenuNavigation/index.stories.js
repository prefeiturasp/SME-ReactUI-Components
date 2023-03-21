import React from 'react';

// Components
import { MenuNavigation } from '~/components';
import MenuLogo from './menu-logo.png';

export default {
  title: 'Components|MenuNavigation',
  component: MenuNavigation,
};

export const DefaultStory = () => {
  const items = [
    {
      name: 'Relatórios',
      icon: 'fa-house',
      submenus: [
        {
          name: 'Frequências',
          path: '/frequencia',
        },
        {
          name: 'Fechamento',
          path: '/fechamento',
        },
        {
          name: 'Diário de classe',
          path: '/diario',
        },
        {
          name: 'Gestão',
          icon: 'fa-house',
          submenus: [
            {
              name: 'Usuários',
              path: '/usuarios',
            },
            {
              name: 'Atribuições',
              path: '/atribuicoes',
            },
          ],
        },
      ],
    },
    {
      name: 'Calendário Escolar',
      icon: 'fa-user',
      path: '/calendario',
    },
  ];
  function onClick(e) {
    console.log(e);
  }
  return <MenuNavigation onClick={onClick} items={items} navLogo={MenuLogo} />;
};

DefaultStory.story = {
  name: 'default',
};
