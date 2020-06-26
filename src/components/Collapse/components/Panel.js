import React from 'react';
import t from 'prop-types';

// Styles
import { PanelStyle } from '../styles';

function Panel({ children, disabled, bordered, borderColor, header, key }) {
  return (
    <PanelStyle
      disabled={disabled}
      bordered={bordered}
      borderColor={borderColor}
      header={header}
      key={key}
    >
      {children}
    </PanelStyle>
  );
}

// Panel.propTypes = {
//   disabled: t.bool,
//   bordered: t.bool,
//   borderColor: t.string,
//   header: t.string,
//   key: t.oneOfType([t.string, t.number]),
// };

// Panel.defaultProps = {};

export default Panel;
