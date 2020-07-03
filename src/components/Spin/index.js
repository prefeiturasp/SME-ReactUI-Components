import React from 'react';
import t from 'prop-types';

// Styles
import { SpinStyle, IconStyle } from './styles';

/**
 * `import { Spin } from "@sme/secretui"`
 * 
 * Um controle giratório para exibir o estado de carregamento de uma página ou seção.
 * 
 * # Boas práticas de uso
 * Quando parte da página está aguardando dados assíncronos ou durante um processo de renderização, uma animação como resposta um carregamento.
 */
function Spin({ children, spinning, showTip, size }) {
  const icon = <IconStyle type="loading" size={size} spin />;

  return (
    <SpinStyle
      spinning={spinning}
      indicator={icon}
      customSize={size}
      tip={`${showTip ? 'Carregando...' : ''}`}
    >
      {children}
    </SpinStyle>
  );
};

Spin.propTypes = {
  spinning: t.bool,
  showTip: t.bool,
  size: t.number,
};

Spin.defaultProps = {
  spinning: false,
  showTip: false,
  size: 80,
};

export default Spin;
