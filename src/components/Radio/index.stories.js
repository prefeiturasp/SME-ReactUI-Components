  import React, { useState } from 'react';
import { Radio } from '~/components';

export default {
  title: 'Radio',
  component: Radio
};

export const All = () => {
  const [ radioValue, setRadioValue ] = useState(1);

  function handleChange(e) {
    const message = `checked = ${e.target.checked}`;
    console.log(message);
    alert(message);
  }
  
  return (
    <>
      <div>
        <Radio>A radio button</Radio><br/>
        <Radio defaultChecked={true}>A radio button with defaultValue</Radio>
      </div>

      <div>
        <Radio onChange={handleChange}>A radio with onChange event</Radio>
      </div>

      <div>
        <Radio disabled>A disabled radio</Radio>
        <Radio defaultChecked={true} disabled>A disabled radio with checked status</Radio>
      </div>

      <div>
        <Radio.Group onChange={(e) => setRadioValue(e.target.value)} value={radioValue}>
          <Radio value={1}>Radio on RadioGroup #1</Radio>
          <Radio value={2}>Radio on RadioGroup #2</Radio>
          <Radio value={3}>Radio on RadioGroup #3</Radio>
        </Radio.Group>
      </div>
    </>
  );
}

export const Defaults = () => (
    <>
      <Radio>A radio button</Radio><br/>
      <Radio defaultChecked={true}>A radio button with defaultValue</Radio>
    </>
);

export const OnChange = () => {
  function handleChange(e) {
    const message = `checked = ${e.target.checked}`;
    console.log(message);
    alert(message);
  }
  
  return <Radio onChange={handleChange}>A radio with onChange event</Radio>
}

export const Disabled = () => (
  <>
    <Radio disabled>A disabled radio</Radio>
    <Radio defaultChecked={true} disabled>A disabled radio with checked status</Radio>
  </>
);

export const Group = () => {
  const [ radioValue, setRadioValue ] = useState(1);

  return (
    <Radio.Group onChange={(e) => setRadioValue(e.target.value)} value={radioValue}>
      <Radio value={1}>Radio on RadioGroup #1</Radio>
      <Radio value={2}>Radio on RadioGroup #2</Radio>
      <Radio value={3}>Radio on RadioGroup #3</Radio>
    </Radio.Group>
  );
}

All.story = { name: 'all radios' }
Defaults.story = { name: 'defaults' }
OnChange.story = { name: 'on change action' }
Disabled.story = { name: 'disabled' }
Group.story = { name: 'radio group' }