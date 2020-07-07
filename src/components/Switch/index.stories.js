import React, { useState } from 'react';

// Components
import { Switch } from '~/components';

export default {
  title: 'Components|Switch',
  component: Switch,
};

export const SwitchStory = () => {
  const [active, setActive] = useState(false);
  return <Switch checked={active} onChange={() => setActive(!active)} />;
};

export const SwitchDisabledStory = () => {
  return <Switch disabled />;
};

export const SwitchFrequenceStory = () => {
  const [active, setActive] = useState(false);
  return (
    <Switch isFrequence checked={active} onChange={() => setActive(!active)} />
  );
};

SwitchStory.story = {
  name: 'default switch',
};

SwitchDisabledStory.story = {
  name: 'disabled switch',
};

SwitchFrequenceStory.story = {
  name: 'frequence switch (SGP)',
};
