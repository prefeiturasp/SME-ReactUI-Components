import React from 'react';
import t from 'prop-types';

// Styles
import { SelectStyle, OptionStyle, GlobalStyle, SuffixIcon, MenuItemSelectedIcon, NotFoundContent } from './styles';

/**
 * `import { Select } from "@sme/secretui"`
 * 
 * Usado para revelar uma lista de opções ou comandos ocultos. No cabeçalho, geralmente é usado para navegação, onde uma ação leva o usuário para outra página.
 * 
 * # Boas práticas de uso
 * - Não remova itens da lista se esta ação não estiver disponível. Nesse caso, mantenha o item desativado.
 * - Não coloque muitos itens na lista. Se você precisar de mais opções, considere usar outro tipo de cabeçalho / menu.
 */
function Select({ mode, placeholder, options, defaultValue, disabled, onChange }) {
  return (
    <>
      <GlobalStyle />

      <SelectStyle
        placeholder={placeholder}
        defaultValue={defaultValue}
        disabled={disabled}
        onChange={onChange}
        suffixIcon={SuffixIcon}
        mode={mode}
        menuItemSelectedIcon={MenuItemSelectedIcon}
        notFoundContent={NotFoundContent}
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
