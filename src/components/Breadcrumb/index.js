import React from 'react';
import t from 'prop-types';
import shortid from 'shortid';

// Componentes
import { Icon } from '~/components';
import BreadcrumbItem from './components/BreadcrumbItem';

// Estilos
import { BreadcrumbStyle } from './styles';

function Separator() {
  return (
    <BreadcrumbStyle.Separator>
      <Icon typeColor="primary" type="solid" icon="fa-chevron-circle-right" />
    </BreadcrumbStyle.Separator>
  );
}

/**
 * `import { Breadcrumb } from "@sme/secretui"`
 *
 * O breadcrumb permite que os usuários vejam rapidamente sua localização como um caminho de navegação.
 *
 * # Boas práticas de uso
 * - Coloque breadcrumb na parte superior da página.
 * - Mostrar hierarquia, não histórico.
 * - Mantenha os títulos do Breadcrumb curtos, mas descritivos.
 * - Não use o breadcrumb se estiver conduzindo os usuários por um processo de várias etapas (use um Indicador de Progresso para isso.)
 * - Use breadcrumbs somente se houver dois ou mais níveis de navegação (por exemplo: Início> Configurações).
 */
function Breadcrumb({ items }) {
  return (
    <BreadcrumbStyle routes={[]} separator="">
      <BreadcrumbItem text="" separator="" href="/">
        <Icon typeColor="primary" type="solid" icon="fa-home" />
      </BreadcrumbItem>
      <Separator />
      {items?.map((item, index) => (
        <React.Fragment key={shortid.generate()}>
          <BreadcrumbItem
            separator=""
            disabled={item.disabled}
            href={item.href}
            text={item.text}
          />
          {index + 1 !== items?.length && <Separator />}
        </React.Fragment>
      ))}
    </BreadcrumbStyle>
  );
}

Breadcrumb.propTypes = {
  items: t.arrayOf(
    t.shape({
      children: t.oneOfType([t.element, t.elementType, t.node]),
      disabled: t.bool.isRequired,
      text: t.string,
      href: t.string,
      path: t.string,
      target: t.string,
      separator: t.oneOfType([t.string, t.element, t.elementType]),
    })
  ),
};

Breadcrumb.Item = BreadcrumbItem;

export default Breadcrumb;
