import React, { useState } from 'react';

// Components
import { Switch, Icon } from '~/components';

export default {
  title: 'Components|Switch',
  component: Switch,
};

export const SwitchStory = () => {
  const [active, setActive] = useState(true);
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

export const SwitchWithTextStory = () => {
  const [active, setActive] = useState(true);
  return (
    <Switch 
      checked={active} 
      onChange={() => setActive(!active)}
      checkedChildren='Ativo' 
      unCheckedChildren='Inativo'
    />
  );
};

export const SwitchWithIconStory = () => {
  const [active, setActive] = useState(true);
  return (
    <Switch 
      checked={active} 
      onChange={() => setActive(!active)}
      checkedChildren={<Icon icon='fa-check' size='xxs' color='light' />} 
      unCheckedChildren={<Icon icon='fa-xmark' size='xxs' color='light' />} 
    />
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

SwitchWithTextStory.story = {
  name: 'with text',
};

SwitchWithIconStory.story = {
  name: 'with icon',
};
