import React from 'react';
import t from 'prop-types';

// Components
import { Icon } from '~/components';
import { customRenderNavButtons } from '~/components/Pagination';

// Styles
import { TableStyle } from './styles';

function Table({ columns, dataSource, rowSelection, onChange }) {
  return (
    <TableStyle
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      rowSelection={rowSelection}
      pagination={{
        itemRender: customRenderNavButtons
      }}
      bordered
    />
  );
};

Table.propTypes = {
  columns: t.array,
  dataSource: t.array,
  rowSelection: t.object,
  onChange: t.func,
};

Table.defaultProps = {
  columns: [],
  dataSource: [],
  rowSelection: {},
  onChange: () => {}
};

export default Table;
