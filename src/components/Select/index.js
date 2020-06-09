import React from 'react';
import t from 'prop-types';

// Componentes


// Styles
import { SelectStyle, OptionStyle, GlobalStyle, CustomIcon } from './styles';

function Select({ mode, placeholder, options, defaultValue, disabled, onChange }) {
  return (
    <>
      <GlobalStyle />

      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        suffixIcon={CustomIcon}
        mode={mode}
        menuItemSelectedIcon={CustomIcon}
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
  mode: t.oneOf(['default', 'multiple']),
  placeholder: t.string,
  options: t.array,
  defaultValue: t.string,
  disabled: t.bool,
  onChange: t.func
};

Select.defaultProps = {
  mode: "default",
  options: [],
  disabled: false,
  onClick: () => {}
};

export default Select;
