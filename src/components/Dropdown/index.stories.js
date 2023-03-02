import { Space } from 'antd';
import React from 'react';
import { Dropdown } from '~/components';

export default {
  title: 'Components|Dropdown',
  component: Dropdown,
};

export const All = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="filled"
          >
            Primary
        </Dropdown>
      </Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          >
            Secondary
        </Dropdown>
      </Space>      
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          >
            Primary outlined
        </Dropdown>
      </Space> 
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="outlined"
          >
            Secondary outlined
        </Dropdown>
      </Space>            
    </Space>
  );
};

export const Colors = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          >
            Primary
        </Dropdown>
      </Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="outlined"
          >
            Secondary
        </Dropdown>
      </Space> 
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="dark"
          type="text"
          >
            Dark
        </Dropdown>
      </Space>                      
    </Space>
  );
};

export const Types = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="filled"
          >
            Primary
        </Dropdown>
      </Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          >
            Primary
        </Dropdown>
      </Space> 
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="text"
          >
            Text
        </Dropdown>
      </Space>                      
    </Space>
  );
};

export const Sizes = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="small"
          >
            Small
        </Dropdown>
      </Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="default"
          >
            Default
        </Dropdown>
      </Space> 
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="large"
          >
            Large
        </Dropdown>
      </Space>                      
    </Space>
  );
};

export const Disabled = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          disabled
          >
            Default
        </Dropdown>
      </Space>                      
    </Space>
  );
};

export const WithIcon = () => {
  const items = [
    {
      label: '1st menu item',
      key: '1',
    },
    {
      label: '2nd menu item',
      key: '2',
    },
    {
      label: '3rd menu item',
      key: '3',
      danger: true,
    },
    {
      label: '4rd menu item',
      key: '4',
      danger: true,
      disabled: true,
    },
  ];
  return (
    <Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          iconLeft={"fa-user"}
          >
            Default
        </Dropdown>
      </Space>
      <Space>
        <Dropdown 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          iconLeft={"fa-list"}
          >
            Default
        </Dropdown>
      </Space>                      
    </Space>
  );
};
All.story = { name: 'all dropdowns' };
Types.story = { name: 'types' };
Colors.story = { name: 'colors' };
Disabled.story = { name: 'disabled' };


