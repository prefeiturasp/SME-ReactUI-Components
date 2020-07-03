import React from 'react';
import { Table } from '~/components';

export default {
  title: 'Table',
  component: Table
};

export const All = () => {
  function handleOnChange(pagination, filters, sorter, extra) {
    console.log(pagination, filters, sorter, extra);
  }

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
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      city: 'Florianópolis',
    },
    {
      key: '2',
      name: 'Ronaldo',
      age: 42,
      city: 'Blumenau',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      city: 'São Paulo',
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
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
      />

      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={handleOnChange}
        pagination
      />

      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
        onChange={handleOnChange}
      />
    </>
  );
}

export const Default = () => {
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
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      city: 'Florianópolis',
    },
    {
      key: '2',
      name: 'Ronaldo',
      age: 42,
      city: 'Blumenau',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      city: 'São Paulo',
    },
  ];
  
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
      />
    </>
  );
}

export const Pagination = () => {
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
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      city: 'Florianópolis',
    },
    {
      key: '2',
      name: 'Ronaldo',
      age: 42,
      city: 'Blumenau',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      city: 'São Paulo',
    },
  ];
  
  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        pagination
      />
    </>
  );
}

export const RowSelection = () => {
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
      title: 'City',
      dataIndex: 'city',
      key: 'city',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      city: 'Florianópolis',
    },
    {
      key: '2',
      name: 'Ronaldo',
      age: 42,
      city: 'Blumenau',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      city: 'São Paulo',
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
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowSelection={rowSelection}
      />
    </>
  );
}

All.story = { name: 'all tables' }
Default.story = { name: 'default' }
Pagination.story = { name: 'pagination' }
RowSelection.story = { name: 'row selection' }