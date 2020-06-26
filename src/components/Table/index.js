import React from 'react';
import t from 'prop-types';

// Components
import { Icon } from '~/components';
import { customRenderNavButtons } from '~/components/Pagination';

// Styles
import { TableStyle } from './styles';

/**
 * `import { Table } from "@sme/secretui"`
 * 
 * O componente apresenta dados distribuídos em linhas e colunas, exibindo-os em uma ordem lógica que permite fácil leitura, comparação e varredura das informações.
 * 
 * # Boas práticas de uso
 * - As colunas em que a ordenação é possível devem apresentar o ícone de classificação no lado direito do rótulo.
 * - O componente Paginator deve ser apresentado apenas para grandes conjuntos de dados.
 */
function Table({ columns, dataSource, rowSelection, pagination, onChange }) {
  return (
    <TableStyle
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
      rowSelection={rowSelection}
      pagination={pagination ? {
        itemRender: customRenderNavButtons
      } : false}
      bordered
    />
  );
};

Table.propTypes = {
  columns: t.array,
  dataSource: t.array,
  rowSelection: t.object,
  pagination: t.bool,
  onChange: t.func,
};

Table.defaultProps = {
  columns: [],
  dataSource: [],
  rowSelection: null,
  pagination: false,
  onChange: () => {}
};

export default Table;
