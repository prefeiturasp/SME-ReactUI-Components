import React from 'react';
import t from 'prop-types';

// Estilos
import { SwitchStyle } from './styles';

/**
 * `import { Switch } from "@sme/secretui"`
 *
 * Switch é um controle usado para alternar rapidamente entre dois estados possíveis. Eles são comumente usados ​​para situações "On / Off".
 */
function Switch({ isFrequence, onChange, checked, checkedChildren, unCheckedChildren }) {
  return (
    <SwitchStyle
      isFrequence={isFrequence}
      onChange={onChange}
      checked={checked}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
    />
  );
}

Switch.propTypes = {
  isFrequence: t.bool,
  onChange: t.func,
  checked: t.bool,
  checkedChildren: t.element,
  unCheckedChildren: t.element
};

Switch.defaultProps = {
  isFrequence: false,
  checked: false,
};

export default Switch;
