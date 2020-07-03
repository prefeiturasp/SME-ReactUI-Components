import React from 'react';
import { Checkbox } from '~/components';

export default {
  title: 'Checkbox',
  component: Checkbox
};

export const All = () => {
  function handleClick(e) {
    const message = `checked = ${e.target.checked}`;
    alert(message);
    console.log(message);
  }
  
  return (
    <>
      <Checkbox>Label</Checkbox>
      <Checkbox disabled>Label</Checkbox>
      <Checkbox onChange={handleClick}>Label</Checkbox>
    </>
  );
}

export const Default = () => (
  <>
    <Checkbox>Label</Checkbox>
  </>
);

export const Disabled = () => (
  <>
    <Checkbox disabled>Label</Checkbox>
  </>
);

export const OnClick = () => {
  function handleClick(e) {
    const message = `checked = ${e.target.checked}`;
    alert(message);
    console.log(message);
  }
  
  return (
    <>
      <Checkbox onChange={handleClick}>Label</Checkbox>
    </>
  );
}

All.story = { name: 'all checkboxs' }
Default.story = { name: 'default' }
Disabled.story = { name: 'disabled' }
OnClick.story = { name: 'onClick action' }