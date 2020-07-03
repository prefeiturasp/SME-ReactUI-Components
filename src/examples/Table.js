import React from 'react';
import { ThemeProvider } from 'styled-components';

// Components
import { Table } from '~/components';

// Themes
import Themes, { support } from '~/themes';

function TableExample() {
  function exampleOnChange(pagination, filters, sorter, extra) {
    console.log(pagination, filters, sorter, extra);
  }

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '4',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '5',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '6',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '7',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '8',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '9',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '10',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
    {
      key: '11',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '12',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
      disabled: record.title === 'Paulo', // Column configuration not to be checked
      name: record.title,
    }),
  };

  return (
    <div className="App">
      <div>
        <ThemeProvider theme={{ ...support, ...Themes.temaSIGPAE }}>
          <div style={{ padding: '1rem 0.2rem' }}>
            <Table
              columns={columns}
              dataSource={dataSource}
              rowSelection={rowSelection}
              onChange={exampleOnChange}
            />
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default TableExample;
