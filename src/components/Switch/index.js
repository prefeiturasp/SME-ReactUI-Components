import React from 'react';
import t from 'prop-types';

// Estilos
import { SwitchStyle } from './styles';

/**
 * `import { Switch } from "@sme/secretui"`
 *
 * Switch é um controle usado para alternar rapidamente entre dois estados possíveis. Eles são comumente usados ​​para situações "On / Off".
 */
function Switch({ isFrequence, onChange, checked }) {
  return (
    <SwitchStyle
      isFrequence={isFrequence}
      onChange={onChange}
      checked={checked}
    />
  );
}

Switch.propTypes = {
  isFrequence: t.bool,
  onChange: t.func,
  checked: t.bool,
};

Switch.defaultProps = {
  isFrequence: false,
  checked: false,
};

export default Switch;
