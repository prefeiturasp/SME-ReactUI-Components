import { Col, Row, Space } from 'antd';
import React, { useState } from 'react';
import { Button, Icon } from '~/components';

export default {
  title: 'Components|Button',
  component: Button,
};

export const All = () => (
  <Space>
    <Space>
      <Button type="filled">Filled</Button>
      <Button type="outlined" color="secondary">Outlined</Button>
      <Button type="text" color="tertiary">Text</Button>        
      <Button type="link">Link</Button>        
    </Space>
  </Space>
);
 
export const Types = () => (
  <Space>
    <Space>
      <Button type="filled">Filled</Button>
      <Button type="outlined">Outlined</Button>
      <Button type="text">Text</Button>        
      <Button type="link">Link</Button>        
    </Space>
  </Space>
);

export const Colors = () => (
  <Row gutter={[16, 16]}>
  <Space>
    <Button type="filled" color="primary">Primary</Button>
    <Button type="outlined" color="primary">Primary</Button>
    <Button type="text" color="primary">Primary</Button>     
  </Space>
  <Space>
    <Button type="filled" color="secondary">Secondary</Button>
    <Button type="outlined" color="secondary">Secondary</Button>
    <Button type="text" color="secondary">Secondary</Button>     
  </Space>
  <Space>
    <Button type="filled" color="tertiary">Tertiary</Button>
    <Button type="outlined" color="tertiary">Tertiary</Button>
    <Button type="text" color="tertiary">Tertiary</Button>     
  </Space>  
  </Row>
);

export const Sizes = () => (
  <Space>
    <Button type="filled" size="small">Small</Button>
    <Button type="filled" size="default">Default</Button>
    <Button type="filled" size="large">Large</Button>
  </Space>
);

export const WithIcon = () => (
  <Space>
    <Button type="filled" icon={<Icon icon="fa-sync-alt" color="light" size="xs"/>}>
      Icon start
    </Button>
    <Button type="outlined" icon={<Icon icon="fa-sync-alt" color="primary" size="xs"/>} />
  </Space>
);

export const Disabled = () => (
  <Space>
    <Button type="filled" disabled>
      Label
    </Button>
    <Button type="outlined" icon={<Icon icon="fa-sync-alt" color="primary" size="xs"/>} disabled/>
    <Button type="text" disabled>
      Label
    </Button>
  </Space>
);

export const Loading = () => {
  const [loading, setLoading] = useState(true);

  function onClickButton() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }

  return (
    <Space>
      <Button type="filled" loading={loading} onClick={() => onClickButton()}>
        Loading
      </Button>
    </Space>
  );
};

export const OnClick = () => {
  function handleClick() {
    alert('handleClick example');
    console.log('handleClick example');
  }

  return (
    <Space>
      <Button color="primary" onClick={handleClick}>Click action</Button>
    </Space>
  );
};

export const ButtonGroup = () => {
  return (
    <Space>
      <Button.Group>
        <Button type="filled">Item 1</Button>
        <Button type="filled">Item 2</Button>
        <Button type="filled">Item 3</Button>
      </Button.Group>
      <Button.Group>
        <Button type="outlined">Item 1</Button>
        <Button type="outlined">Item 2</Button>
        <Button type="outlined">Item 3</Button>
      </Button.Group>
      <Button.Group>
        <Button disabled>Item 1</Button>
        <Button disabled>Item 2</Button>
        <Button disabled>Item 3</Button>
      </Button.Group>
    </Space>
  );
};

All.story = { name: 'all buttons' };
Colors.story = { name: 'colors' };
Types.story = { name: 'types' };
Sizes.story = { name: 'sizes' };
WithIcon.story = { name: 'with icon' };
Disabled.story = { name: 'disabled' };
Loading.story = { name: 'loading' };
OnClick.story = { name: 'onClick action' };
ButtonGroup.story = { name: 'button group' };
