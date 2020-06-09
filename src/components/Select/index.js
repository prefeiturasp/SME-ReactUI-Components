import React from 'react';
import t from 'prop-types';

// Styles
import { SelectStyle, OptionStyle, GlobalStyle } from './styles';

function Select({ placeholder, options, defaultValue, disabled }) {
  return (
    <>
      <GlobalStyle />

      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
      >
        {options.map((item, index) => (
          <OptionStyle
            key={index}
            value={item.value}
            disabled={item.disabled}
          >
            {item.text}
          </OptionStyle>
        ))}
      </SelectStyle>
    </>
  );
};

Select.propTypes = {
  placeholder: t.string,
  options: t.array,
  defaultValue: t.string,
  disabled: t.bool
};

Select.defaultProps = {
  options: [],
  disabled: false
};

export default Select;
