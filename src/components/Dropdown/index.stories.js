import { Space } from 'antd';
import React from 'react';
import { Dropdowns } from '~/components';

export default {
  title: 'Components|Dropdown',
  component: Dropdowns,
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="filled"
          >
            Primary
        </Dropdowns>
      </Space>
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          >
            Secondary
        </Dropdowns>
      </Space>      
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          >
            Primary outlined
        </Dropdowns>
      </Space> 
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="outlined"
          >
            Secondary outlined
        </Dropdowns>
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          >
            Primary
        </Dropdowns>
      </Space>
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="outlined"
          >
            Secondary
        </Dropdowns>
      </Space> 
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="dark"
          type="text"
          >
            Dark
        </Dropdowns>
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="filled"
          >
            Primary
        </Dropdowns>
      </Space>
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          >
            Primary
        </Dropdowns>
      </Space> 
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="text"
          >
            Text
        </Dropdowns>
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="small"
          >
            Small
        </Dropdowns>
      </Space>
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="default"
          >
            Default
        </Dropdowns>
      </Space> 
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          size="large"
          >
            Large
        </Dropdowns>
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          disabled
          >
            Default
        </Dropdowns>
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
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="secondary"
          type="filled"
          iconLeft={"fa-user"}
          >
            Default
        </Dropdowns>
      </Space>
      <Space>
        <Dropdowns 
          items={items} 
          onClick={(itemClicked) => console.log(itemClicked)}
          color="primary"
          type="outlined"
          iconLeft={"fa-list"}
          >
            Default
        </Dropdowns>
      </Space>                      
    </Space>
  );
};
All.story = { name: 'all dropdowns' };
Types.story = { name: 'types' };
Colors.story = { name: 'colors' };
Disabled.story = { name: 'disabled' };


