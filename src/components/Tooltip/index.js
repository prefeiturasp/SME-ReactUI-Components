import React from 'react';
import t from 'prop-types';

// Ant
import { TooltipStyle } from './styles';

/**
 * `import { Tooltip } from "@sme/secretui"`
 * 
 * O tooltip fornece informações adicionais ao passar o mouse. Ele geralmente contem texto auxiliar contextual. 
 */
function Tooltip({ children, title, placement }) {
  return (
    <TooltipStyle
      title={title}
      placement={placement}
    >
      <span className="tooltipContent">
        {children}
      </span>
    </TooltipStyle>
  );
};

Tooltip.propTypes = {
  title: t.string,
  placement: t.oneOf(["top", "left", "right", "bottom", "topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"])
};

Tooltip.defaultProps = {
  placement: "top"
};

export default Tooltip;
