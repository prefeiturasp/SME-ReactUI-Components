import React from 'react';
import t from 'prop-types';

// Styles
import { RadioStyle } from './styles';

/**
 * `import { Radio } from "@sme/secretui"`
 * 
 * # Boas práticas de uso
 * - As opções devem ser agrupadas com um rótulo.
 * - Uma opção deve ser selecionada por padrão. Exceto quando uma opção padrão pode causar danos ao usuário ou implica uma ação crítica / importante do sistema: nesses casos, você pode apresentar a lista sem nenhuma opção padrão e adicionar uma opção para limpar a seleção.
 * - Ordene a lista em uma ordem lógica, por exemplo: mais provável de ser selecionado primeiro / menos provável por último; opção mais simples para os mais complexos, etc.
 * - Para uma lista com mais de 4 opções, considere usar Selecionar .
 */
function Radio({ children, value, defaultChecked, disabled, onChange }) {
  return (
    <RadioStyle
      value={value}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={onChange}
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
