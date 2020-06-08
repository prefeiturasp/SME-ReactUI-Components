import React from 'react';
import t from 'prop-types';

// Styles
import { SpinStyle, IconStyle } from './styles';

function Spin({ children, spinning, hideTip, size }) {
  const icon = <IconStyle type="loading" size={size} spin />;

  return (
    <SpinStyle
      spinning={spinning}
      indicator={icon}
      tip={`${hideTip ? '' : 'Carregando...'}`}
    >
      {children}
    </SpinStyle>
  );
};

Spin.propTypes = {
  spinning: t.bool,
  hideTip: t.bool,
  size: t.number,
};

Spin.defaultProps = {
  spinning: false,
  hideTip: false,
  size: 80,
};

export default Spin;
