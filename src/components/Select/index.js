import React from 'react';
import t from 'prop-types';

// Componentes
import { Icon } from '~/components';

// Styles
import { SelectStyle, OptionStyle, GlobalStyle } from './styles';

function Select({ placeholder, options, defaultValue, disabled, onChange }) {
  const testIcon = <Icon type="solid" icon="fa-caret-down" />;

  return (
    <>
      <GlobalStyle />

      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        suffixIcon={testIcon}
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
  disabled: t.bool,
  onChange: t.func
};

Select.defaultProps = {
  options: [],
  disabled: false,
  onClick: () => {}
};

export default Select;
