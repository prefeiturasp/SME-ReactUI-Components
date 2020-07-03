import React, { useState } from 'react';

// Components
import { TextField, Icon } from '~/components';

const { Search } = TextField;

export default {
  title: 'Components|TextField',
  component: TextField,
  subcomponents: { Search },
};

export const TextFieldStory = () => {
  return <TextField placeholder="Placeholder..." />;
};

export const TextFieldDisabledStory = () => {
  return <TextField disabled placeholder="Placeholder..." />;
};

export const TextFieldLabeledStory = () => {
  return <TextField label="Label" placeholder="Placeholder..." />;
};

export const TextFieldLabeledRequiredStory = () => {
  return <TextField label="Label" required placeholder="Placeholder..." />;
};

export const TextFieldErrorStory = () => {
  return (
    <TextField
      label="Label"
      required
      errorMessage="Campo não pode ser vazio"
      placeholder="Placeholder..."
    />
  );
};

export const TextFieldPrefixStory = () => {
  return (
    <TextField
      label="Label"
      placeholder="Placeholder..."
      prefix={<Icon type="solid" icon="fa-user" />}
    />
  );
};

export const TextFieldSuffixStory = () => {
  return (
    <TextField
      label="Label"
      placeholder="Placeholder..."
      suffix={<Icon type="solid" icon="fa-user" />}
    />
  );
};

export const TextFieldSearchStory = () => {
  const [loading, setLoading] = useState(false);

  const onSearch = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };
  return (
    <TextField.Search
      label="Label"
      placeholder="Placeholder..."
      onSearch={() => onSearch()}
      loading={loading}
    />
  );
};

TextFieldStory.story = {
  name: 'default text field',
};

TextFieldDisabledStory.story = {
  name: 'disabled text field',
};

TextFieldLabeledStory.story = {
  name: 'labeled text field',
};

TextFieldLabeledRequiredStory.story = {
  name: 'labeled required text field',
};

TextFieldErrorStory.story = {
  name: 'error text field',
};

TextFieldPrefixStory.story = {
  name: 'prefix icon text field',
};

TextFieldSuffixStory.story = {
  name: 'suffix icon text field',
};

TextFieldSearchStory.story = {
  name: 'search text field',
};
