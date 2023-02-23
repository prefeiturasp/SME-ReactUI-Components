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
        defaultValue={"Text example #1"}
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
        defaultValue={["Text example #1", "Text example #2"]}
      />

      <Select
        placeholder="Select with onChange event"
        options={optionsExample}
        onChange={handleChangeTest}
      />

      <Select
        placeholder="Select a option"
        options={optionsExample}
        defaultValue={{
          text: "Text example #1",
          value: "Text example #1"
        }}
        helpText="There's an error with your input"
        error={true}
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
        defaultValue={["Text example #1", "Text example #2"]}
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
        helpText="Helptext onChange event story"
      />
    </>
  );
}

export const ErrorSelect = () => {
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
        defaultValue={{
          text: "Text example #1",
          value: "Text example #1"
        }}
        helpText="There's an error with your input"
        error={true}
      />
    </>
  );
}

All.story = { name: 'all selects' }
Default.story = { name: 'default' }
Disabled.story = { name: 'disabled' }
MultiSelect.story = { name: 'multi select' }
OnChange.story = { name: 'onChange action' }
ErrorSelect.story = { name: 'error' }