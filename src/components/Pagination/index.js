import React from 'react';
import t from 'prop-types';

// Components
import { Icon } from '~/components';

// Styles
import { PaginationStyle } from './styles';

function Pagination({ defaultCurrent, pageSize, total, onChange }) {
  function itemRender(current, type, originalElement) {
    console.log(type);

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

  return (
    <PaginationStyle
      defaultCurrent={defaultCurrent}
      total={total}
      pageSize={pageSize}
      onChange={onChange}
      itemRender={itemRender}
    />
  );
};

Pagination.propTypes = {
  defaultCurrent: t.number,
  pageSize: t.number,
  total: t.number,
  onChange: t.func
};

Pagination.defaultProps = {
  defaultCurrent: 1,
  pageSize: 10,
  total: 1,
  onClick: () => {}
};

export default Pagination;
