import { Col, Row } from 'antd';
import React, {useState} from 'react';
import { Table, Typography } from '~/components';

export default {
  title: 'Components|Table',
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
    {
      title: 'State',
      dataIndex: 'state',
      key: 'state',
    },
  ];

  const dataSource = [
    {
      key: '1',
      name: 'Paulo',
      age: 32,
      city: 'Florianópolis',
      state: 'SC',
    },
    {
      key: '2',
      name: 'Ronaldo',
      age: 42,
      city: 'Blumenau',
      state: 'SC',
    },
    {
      key: '3',
      name: 'Mike',
      age: 32,
      city: 'São Paulo',
      state: 'SP',
    },
    {
      key: '4',
      name: 'Carla',
      age: 25,
      city: 'Campinas',
      state: 'SP',
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
{/* 
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
      /> */}
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

  let dataSource = [];

  for (let i = 0; i < 100; i++) {
    dataSource.push({
      key: i,
      name:  `Edward ${i}`,
      age: 12 + i,
      city:  'Florianópolis',     
    });
  }

  const [currentPage, setPage] = useState(1);

  const paginationOptions = {
    pageSize: 5,
    current: currentPage,
    total: dataSource.length,
    showSizeChanger: false,
    size: 'small',
    // pageSizeOptions: [10, 20, 30],
    onChange: (page) => setPage(page),
  };

  return (
    <Row gutter={[5, 5]}>
      <Col span={12}>
        <Typography.Title level={4}>
          Default props
        </Typography.Title>        
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination
        />      
      </Col>      
      <Col span={12}>
        <Typography.Title level={4}>
          Custom props
        </Typography.Title>
        <Table
          columns={columns}
          dataSource={dataSource}
          pagination={paginationOptions}
        />        
      </Col>
    </Row>
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
    selections: [
      {
        key: 'item option 1',
        text: 'Row action 1',
        onSelect: (changeableRowKeys) => {}
      },
      {
        key: 'item option 2',
        text: 'Row action 2',
        onSelect: (changeableRowKeys) => {}
      },      
    ]
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

export const Expandable = () => {
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

  const subColumns = [
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
  ];

  const subDataSource = [
    {
      key: '1',
      address: 'Street B',
      number: '1035',
    },
    {
      key: '2',
      address: 'Street B',
      number: '1035',
    },
  ];
  
  const renderRow = () => {
    return (
      <Table
        columns={subColumns}
        dataSource={subDataSource}
        size='small'
      />
    );
  }

  return (
    <>
      <Table
        columns={columns}
        dataSource={dataSource}
        expandable={renderRow}
      />
    </>
  );
}

All.story = { name: 'all tables' }
Default.story = { name: 'default' }
Pagination.story = { name: 'pagination' }
RowSelection.story = { name: 'row selection' }
Expandable.story = { name: 'expandable' }