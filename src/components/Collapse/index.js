import React from 'react';

// Estilos
import { CollapseStyle, PanelStyle } from './styles';

// Internal components
import Chevron from './components/Chevron';

function Collapse({ children, ...props }) {
  return (
    <CollapseStyle
      expandIconPosition="right"
      expandIcon={(panelProps) => <Chevron opened={panelProps.isActive} />}
      {...props}
    >
      {children}
    </CollapseStyle>
  );
}

function Panel({ children, ...props }) {
  return <PanelStyle {...props}>{children}</PanelStyle>;
}

Collapse.Panel = Panel;

export default Collapse;
