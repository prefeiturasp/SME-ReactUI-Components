import React, { useState } from 'react';

// Components
import { Stepper } from '~/components';

export default {
  title: 'Components|Stepper',
  component: Stepper,
};

export const HorizontalStepperStory = () => {
  const items = [
    {
      title: 'Step 1',
      description: 'Description',
    },
    {
      title: 'Step 2',
      description: 'Description',
    },
    {
      title: 'Step 3',
      description: 'Description',
    },
  ];
  return <Stepper items={items} current={1} />;
};

export const VerticalStepperStory = () => {
  const items = [
    {
      title: 'Step 1',
      description: 'Description',
    },
    {
      title: 'Step 2',
      description: 'Description',
    },
    {
      title: 'Step 3',
      description: 'Description',
    },
  ];
  return <Stepper items={items} current={1} direction={'vertical'} />;
};

export const ClickableStepperStory = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const items = [
    {
      title: 'Step 1',
      description: 'Description',
    },
    {
      title: 'Step 2',
      description: 'Description',
    },
    {
      title: 'Step 3',
      description: 'Description',
    },
  ];
  return <Stepper items={items} current={current} onChange={onChange} />;
};

export const DisabledStepperItemStory = () => {
  const [current, setCurrent] = useState(1);

  const onChange = (value) => {
    console.log('onChange:', value);
    setCurrent(value);
  };

  const items = [
    {
      title: 'Step 1',
      description: 'Description',
    },
    {
      title: 'Step 2',
      description: 'Description',
    },
    {
      title: 'Step 3',
      description: 'Description',
      disabled: true,
    },
  ];
  return <Stepper items={items} current={current} onChange={onChange} />;
};

HorizontalStepperStory.story = {
  name: 'default stepper',
};

VerticalStepperStory.story = {
  name: 'vertical stepper',
};

ClickableStepperStory.story = {
  name: 'clickable story',
};

DisabledStepperItemStory.story = {
  name: 'disabled item story',
};
