import React from 'react';
import { Select } from '~/components';

export default {
  title: 'Components|Select',
  component: Select
};

export const All = () => {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "Text example #1"
    },
    {
      text: "Text example #2",
      value: "Text example #2"
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  function handleChangeTest(value) {
    const message = `value = ${value}`;
    console.log(message);
    alert(message);
  }

  return (
    <>
      <Select
        placeholder="Select a option"
        options={optionsExample}
      />

      <Select
        placeholder="Select a option"
        options={optionsExample}
        disabled
      />

      <Select
        mode="multiple"
        placeholder="Multiple select"
        options={optionsExample}
      />

      <Select
        placeholder="Select with onChange event"
        options={optionsExample}
        onChange={handleChangeTest}
      />
    </>
  );
}

export const Default = () => {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "Text example #1"
    },
    {
      text: "Text example #2",
      value: "Text example #2"
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  return (
    <>
      <Select
        placeholder="Select a option"
        options={optionsExample}
      />
    </>
  );
}

export const Disabled = () => {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "Text example #1"
    },
    {
      text: "Text example #2",
      value: "Text example #2"
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  return (
    <>
      <Select
        placeholder="Select a option"
        options={optionsExample}
        disabled
      />
    </>
  );
}

export const MultiSelect = () => {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "Text example #1"
    },
    {
      text: "Text example #2",
      value: "Text example #2"
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  return (
    <>
      <Select
        mode="multiple"
        placeholder="Select with onChange event"
        options={optionsExample}
      />
    </>
  );
}

export const OnChange = () => {
  const optionsExample = [
    {
      text: "Text example #1",
      value: "Text example #1"
    },
    {
      text: "Text example #2",
      value: "Text example #2"
    },
    {
      text: "Text example disabled",
      value: "Text example disabled",
      disabled: true
    }
  ];

  function handleChangeTest(value) {
    const message = `value = ${value}`;
    console.log(message);
    alert(message);
  }

  return (
    <>
      <Select
        placeholder="Select with onChange event"
        options={optionsExample}
        onChange={handleChangeTest}
      />
    </>
  );
}

All.story = { name: 'all selects' }
Default.story = { name: 'default' }
Disabled.story = { name: 'disabled' }
MultiSelect.story = { name: 'multi select' }
OnChange.story = { name: 'onChange action' }