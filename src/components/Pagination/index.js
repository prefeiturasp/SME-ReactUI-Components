import React from 'react';
import t from 'prop-types';

// Components
import { Icon } from '~/components';

// Styles
import { PaginationStyle } from './styles';

export function customRenderNavButtons(_, type, originalElement) {
  if (type === 'prev') {
    return <Icon icon="fa-chevron-left" />;
  }

  if (type === 'next') {
    return <Icon icon="fa-chevron-right" />;
  }

  if (type === 'jump-prev' || type === 'jump-next') {
    return <Icon icon="fa-ellipsis-h" />;
  }

  return originalElement;
}

/**
 * `import { Pagination } from "@sme/secretui"`
 * 
 * Usado para navegar entre várias páginas sempre que houver muitos resultados para mostrar de uma só vez ou quando algo levar muito tempo para carregar / renderizar todos os itens. É normalmente usado em uma tabela ou para exibir resultados da pesquisa.
 */
function Pagination({ defaultCurrent, pageSize, size, total, onChange }) {
  return (
    <PaginationStyle
      defaultCurrent={defaultCurrent}
      total={total}
      pageSize={pageSize}
      size={size}
      onChange={onChange}
      itemRender={customRenderNavButtons}
    />
  );
};

Pagination.propTypes = {
  defaultCurrent: t.number,
  pageSize: t.number,
  total: t.number,
  size: t.oneOf(['small', 'medium', 'large']),
  onChange: t.func
};

Pagination.defaultProps = {
  defaultCurrent: 1,
  pageSize: 10,
  total: 1,
  size: 'medium',
  onClick: () => {}
};

export default Pagination;
