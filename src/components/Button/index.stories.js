import React, { useState } from 'react';
import { Button, Icon } from '~/components';

export default {
  title: 'Button',
  component: Button
};

export const All = () => (
  <>
    <Button type="primary">Label</Button>
    <Button type="secondary">Label</Button>
    <Button type="link">Label</Button>
  </>
);

export const Types = () => (
  <>
    <Button type="primary">Label</Button>
    <Button type="secondary">Label</Button>
    <Button type="link">Label</Button>
  </>
);

export const Sizes = () => (
  <>
    <Button size="small">Label</Button>
    <Button size="default">Label</Button>
    <Button size="large">Label</Button>
  </>
);

export const Outline = () => (
  <>
    <Button outline type="primary">Label</Button>
    <Button outline type="secondary">Label</Button>
  </>
);

export const WithIcon = () => (
  <>
    <Button icon={<Icon type="solid" icon="fa-sync-alt" />}>Label</Button>
    <Button icon={<Icon type="solid" icon="fa-sync-alt" />} />
  </>
);

export const Disabled = () => (
  <>
    <Button type="primary" disabled>Label</Button>
    <Button type="secondary" disabled>Label</Button>
    <Button type="link" disabled>Label</Button>
    <Button disabled={true} outline>Label</Button>
  </>
);

export const Loading = () => {
  const [loading, setLoading] = useState(false);

  function onClickButton() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 3000)
  }

  return(
    <>
      <Button loading={loading} onClick={() => onClickButton()}>Label</Button>
    </>
  )
}

export const OnClick = () => {
  function handleClick() {
    alert('handleClick example');
    console.log('handleClick example');
  }

  return(
    <>
      <Button onClick={handleClick}>Label</Button>
    </>
  )
}

All.story = { name: 'all buttons' }
Types.story = { name: 'types' }
Sizes.story = { name: 'sizes' }
Outline.story = { name: "outline" }
Sizes.story = { name: 'sizes' }
Outline.story = { name: "outline" }
WithIcon.story = { name: "with icon" }
Disabled.story = { name: 'disabled' }
Loading.story = { name: "loading" }
OnClick.story = { name: "onClick action" }