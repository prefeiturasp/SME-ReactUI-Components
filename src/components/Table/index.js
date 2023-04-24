import React from 'react';
import t from 'prop-types';
import { Button } from '~/components';
//antd
import { Table as TableAnt } from 'antd';
// Styles
import { TableStyle, ArrowDown, ArrowUp } from './styles';

/**
 * `import { Table } from "@sme/secretui"`
 *
 * O componente apresenta dados distribuídos em linhas e colunas, exibindo-os em uma ordem lógica que permite fácil leitura, comparação e varredura das informações.
 *
 * # Boas práticas de uso
 * - As colunas em que a ordenação é possível devem apresentar o ícone de classificação no lado direito do rótulo.
 * - O componente Paginator deve ser apresentado apenas para grandes conjuntos de dados.
 */
function Table({
  columns,
  dataSource,
  rowSelection,
  pagination,
  expandable,
  size,
  onChange,
}) {
  const ButtonExpandable = ({ expanded, onExpand }) => {
    return (
      <Button
        type="text"
        size="small"
        icon={expanded ? ArrowUp : ArrowDown}
        onClick={onExpand}
      />
    );
  };
  return (
    <TableStyle
      columns={expandable ? [...columns, TableAnt.EXPAND_COLUMN] : columns}
      dataSource={dataSource}
      onChange={onChange}
      rowSelection={rowSelection}
      expandable={
        expandable && {
          expandedRowRender: expandable,
          expandIcon: ({ expanded, onExpand, record }) => (
            <ButtonExpandable
              expanded={expanded}
              onExpand={(e) => onExpand(record, e)}
            />
          ),
        }
      }
      pagination={pagination}
      bordered
      size={size}
      align="left"
    />
  );
}

Table.propTypes = {
  columns: t.array,
  dataSource: t.array,
  rowSelection: t.object,
  // pagination: t.oneOfType([t.object, t.bool]),
  onChange: t.func,
  expandable: t.func,
  size: t.oneOf(['small', 'middle', 'large']),
};

Table.defaultProps = {
  columns: [],
  dataSource: [],
  rowSelection: null,
  // pagination: false,
  size: 'middle',
  onChange: () => {},
  expandable: null,
};

export default Table;
