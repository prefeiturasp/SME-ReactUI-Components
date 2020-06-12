import React from 'react';
import t from 'prop-types';

// Ant
import { Tooltip as TooltipStyle } from 'antd';

function Tooltip({ children, title, placement }) {
  return (
    <TooltipStyle
      title={title}
      placement={placement}
    >
      {children}
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
