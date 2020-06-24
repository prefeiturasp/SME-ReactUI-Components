import React from 'react';
import t from 'prop-types';

// Styles
import { CheckboxStyle } from './styles';

/**
 * `import { Checkbox } from "@sme/secretui"`
 * 
 * As caixas de seleção são usadas quando há uma lista de opções e o usuário pode selecionar várias opções, incluindo todas ou nenhuma. Cada caixa de seleção é independente de todas as outras caixas de seleção da lista e marcar uma caixa não desmarca as outras.
 * 
 * # Boas práticas de uso
 * - Por padrão, as caixas de seleção estão desmarcadas.
 * - A seleção deve ser capaz de clicar diretamente na caixa ou em seu rótulo.
 * - Os rótulos aparecem à direita das caixas de seleção.
 * - Para listas com mais de 4 opções, considere usar a Seleção múltipla .
 */
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
