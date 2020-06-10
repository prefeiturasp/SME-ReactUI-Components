import React from 'react';

// Estilos
import { SwitchStyle } from './styles';

function Switch({ isFrequence, onChange, checked, ...rest }) {
  return (
    <SwitchStyle
      isFrequence={isFrequence}
      onChange={onChange}
      checked={checked}
      {...rest}
    />
  );
}

export default Switch;
