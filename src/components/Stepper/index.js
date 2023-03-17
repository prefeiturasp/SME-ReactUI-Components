import React from 'react';
import t from 'prop-types';

// Estilos
import { StepperStyle } from './styles';

/**
 * `import { Stepper } from "@sme/secretui"`
 *
 * Exibem o progresso sequencial e servem para guiar o usuário em um fluxo, ajudando a completar uma atividade ou processo específico.
 */

function Stepper({ items, current, size, direction, color, onChange }) {
  return (
    <StepperStyle
      items={items}
      current={current}
      size={size}
      direction={direction}
      onChange={onChange}
      color={color}
    />
  );
}

Stepper.propTypes = {
  items: t.array,
  current: t.number,
  direction: t.oneOf(['horizontal', 'vertical']),
  size: t.oneOf(['default', 'small']),
  color: t.oneOf(['primary', 'secondary', 'tertiary']),
  onChange: t.func,
};

Stepper.defaultProps = {
  items: [],
  direction: 'horizontal',
  size: 'default',
  onChange: () => {},
  color: 'primary',
};

export default Stepper;
