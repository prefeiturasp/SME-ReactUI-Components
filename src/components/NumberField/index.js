import React from 'react';
import t from 'prop-types';

// Styles
import { InputNumberStyle } from './styles';

function NumberField({ 
    children, 
    value, 
    min, 
    max,
    disabled, 
    onChange
}) {
  return (
    <InputNumberStyle
        min={min}
        max={max}
        style={{ margin: '0 16px' }}
        value={value}
        onChange={onChange}
        disabled={disabled}
    >
      {children}
    </InputNumberStyle>
  );
};

export default NumberField;
