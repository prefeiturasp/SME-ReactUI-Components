import React from 'react';
import t from 'prop-types';

// Styles
import { TabsStyle } from './styles';

// Internal Components
import TabPane from './components/TabPane';
import TabPaneTitle from './components/TabPaneTitle';

/**
 * `import { Tabs } from "@sme/secretui"`
 *
 * O uso de abas é indicado para organizar conteúdos similares em uma mesma página, permitindo que o conteúdo possa ser visualizado sem ter que navegar para outra página.
 *
 * # Boas práticas de uso
 * - Utilize no máximo três palavras para o título.
 * - Utilize abas quando o conteúdo e estrutura das telas forem diferentes.
 * - Utilize no máximo 6 abas, isso ajuda a manter a interface organizada e reduz a carga cognitiva do usuário.
 * - Abas com conteúdos relacionados devem ser mantidas próximas uma das outras.
 * - Não é recomendado utilizar abas como componente de filtro.
 */
const Tabs = ({ items = [] }) => {

  return (
    <TabsStyle type='card'>
      {items.map((_item) => {
        return (
          <TabPane
            tab={<TabPaneTitle title={_item.title} icon={_item.icon}/>}
            {..._item}
          >
            {_item.content}
          </TabPane>
        )
      })}
    </TabsStyle>
  );
};

Tabs.propTypes = {
  items: t.array
};

Tabs.defaultProps = {
  items: []
};

Tabs.TabPane = TabPane;

export default Tabs;
