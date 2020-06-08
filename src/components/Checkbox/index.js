import React from 'react';
import t from 'prop-types';

// Styles
import { CheckboxStyle } from './styles';

function Checkbox({ children, defaultChecked, disabled, onChange }) {
  return (
    <CheckboxStyle
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
    >
      {children}
    </CheckboxStyle>
  );
};

Checkbox.propTypes = {
  defaultChecked: t.bool,
  disabled: t.bool,
  onChange: t.func
};

Checkbox.defaultProps = {
  defaultChecked: false,
  disabled: false,
  onChange: () => {}
};

export default Checkbox;
