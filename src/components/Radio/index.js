import React from 'react';
import t from 'prop-types';

// Styles
import { RadioStyle } from './styles';

function Radio({ children, value, defaultChecked, disabled, onChange }) {
  return (
    <RadioStyle
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
      value={value}
    >
      {children}
    </RadioStyle>
  );
};

Radio.propTypes = {
  value: t.any,
  defaultChecked: t.bool,
  disabled: t.bool,
  onChange: t.func
};

Radio.defaultProps = {
  defaultChecked: false,
  disabled: false,
  onChange: () => {}
};

Radio.Group = RadioStyle.Group;
export default Radio;
